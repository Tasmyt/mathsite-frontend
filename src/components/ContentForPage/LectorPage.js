import React, { useState, useEffect } from 'react';
import { useLectures } from '../../context/LecturesContext';
import CustomList from 'components/customList/CustomList';
import { renderTopicItem } from 'components/customList/renderTopicItem';
import {
  ListSection,
  SwitchThemeButton,
  ThemeDiv1,
  ThemeDiv2,
  ThemeLink,
} from 'components/customList/customList.styled';
import useWindowWidth from 'hooks/useWindowWidth';

const YOUR_API_KEY = process.env.REACT_APP_API_KEY;
const YOUR_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

const LecturePage = ({ topics }) => {
  const { lectures } = useLectures();
  const [selectedLectureContent, setSelectedLectureContent] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const [openTopics, setOpenTopics] = useState({});
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const initializeGoogleApi = () => {
      window.gapi.load('client', () => {
        window.gapi.client.init({
          apiKey: YOUR_API_KEY,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"]
        }).then(() => {
          // API initialized successfully
        }).catch((error) => {
          console.error('Failed to initialize Google API:', error);
        });
      });
    };

    const handleCredentialResponse = (response) => {
      console.log('Encoded JWT ID token: ' + response.credential);
      initializeGoogleApi();
    };

    window.google.accounts.id.initialize({
      client_id: YOUR_CLIENT_ID,
      callback: handleCredentialResponse
    });

    window.google.accounts.id.prompt(); // Display the One Tap prompt

  }, []);

  const handleClick = lecture => {
    createPicker();
    if (openMenu) setTimeout(() => setOpenMenu(false), 50);
  };

  const renderLectureItem = lecture => (
    <ThemeLink to={`${lecture._id}`} onClick={() => handleClick(lecture)}>
      {lecture.title}
    </ThemeLink>
  );

  const handleToggleTopic = topic => {
    setOpenTopics(prevOpenTopics => ({
      ...prevOpenTopics,
      [topic]: !prevOpenTopics[topic],
    }));
  };

  const createPicker = () => {
    const oauthToken = window.gapi.auth.getToken().access_token;

    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(YOUR_API_KEY)
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  };

  const pickerCallback = (data) => {
    if (data[window.google.picker.Response.ACTION] === window.google.picker.Action.PICKED) {
      const fileId = data[window.google.picker.Response.DOCS][0].id;
      loadFile(fileId);
    } else {
      console.error('Picker action failed:', data);
    }
  };

  const loadFile = (fileId) => {
    window.gapi.client.drive.files.export({
      fileId: fileId,
      mimeType: 'text/plain'
    }).then((response) => {
      const fileContent = response.body;
      setSelectedLectureContent(fileContent);
    }).catch(error => {
      console.error('Failed to load file:', error);
    });
  };

  return (
    <>
      {windowWidth <= 576 ? (
        <SwitchThemeButton onClick={() => setOpenMenu(!openMenu)}>
          {!openMenu ? 'Відкрити список тем' : 'Закрити список тем'}
        </SwitchThemeButton>
      ) : null}

      <ListSection>
        <ThemeDiv1 $isopenmenu={openMenu}>
          <CustomList
            items={topics}
            renderItem={topic =>
              renderTopicItem(
                topic,
                lectures,
                renderLectureItem,
                openTopics[topic],
                () => handleToggleTopic(topic)
              )
            }
          />
        </ThemeDiv1>

        <ThemeDiv2>
          {selectedLectureContent && (
            <div>{selectedLectureContent}</div>
          )}
        </ThemeDiv2>
      </ListSection>
    </>
  );
};

export default LecturePage;
