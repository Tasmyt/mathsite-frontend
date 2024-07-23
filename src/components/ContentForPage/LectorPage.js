import React, { useState, useEffect } from 'react';
import { useLectures } from '../../context/LecturesContext';
import CustomList from 'components/customList/CustomList';
import { renderTopicItem } from 'components/customList/renderTopicItem';
import {
  LectureFrame,
  ListSection,
  SwitchThemeButton,
  ThemeDiv1,
  ThemeDiv2,
  ThemeLink,
} from 'components/customList/customList.styled';
import useWindowWidth from 'hooks/useWindowWidth';

const YOUR_API_KEY = 'YOUR_API_KEY';
const YOUR_CLIENT_ID = 'YOUR_CLIENT_ID';

const LecturePage = ({ topics }) => {
  const { lectures } = useLectures();
  const [selectedLectureUrl, setSelectedLectureUrl] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const [openTopics, setOpenTopics] = useState({});
  const windowWidth = useWindowWidth();

  useEffect(() => {
    const loadGoogleApi = () => {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          apiKey: YOUR_API_KEY,
          clientId: YOUR_CLIENT_ID,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
          scope: "https://www.googleapis.com/auth/drive.file"
        }).then(() => {
          window.gapi.auth2.getAuthInstance().signIn();
        });
      });
      window.gapi.load('picker', () => {});
    };

    loadGoogleApi();
  }, []);

  const handleClick = lecture => {
    createPicker();
    setSelectedLectureUrl(lecture.url);
    if (openMenu) setTimeout(() => setOpenMenu(false), 50);
  };

  const renderLectureItem = lecture => (
    <ThemeLink to={`${lecture._id}`} onClick={() => handleClick(lecture._id)}>
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
    const oauthToken = window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token;

    const picker = new window.google.picker.PickerBuilder()
      .addView(window.google.picker.ViewId.DOCS)
      .setOAuthToken(oauthToken)
      .setDeveloperKey(YOUR_API_KEY)
      .setCallback(pickerCallback)
      .build();
    picker.setVisible(true);
  };

  const pickerCallback = (data) => {
    if (data.action === window.google.picker.Action.PICKED) {
      const fileId = data.docs[0].id;
      loadFile(fileId);
    }
  };

  const loadFile = (fileId) => {
    window.gapi.client.drive.files.get({
      fileId: fileId,
      fields: 'webViewLink'
    }).then((response) => {
      const fileUrl = response.result.webViewLink;
      setSelectedLectureUrl(fileUrl);
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
            items={ topics }
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
          {selectedLectureUrl && (
            <LectureFrame
              src={selectedLectureUrl}
              title="лекція"
            ></LectureFrame>
          )}
        </ThemeDiv2>
      </ListSection>
    </>
  );
};

export default LecturePage;