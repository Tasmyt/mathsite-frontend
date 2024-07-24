import React, { useState } from 'react';
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

const LecturePage = ({ topics }) => {
  
  const { lectures } = useLectures();
  const [selectedLectureId, setSelectedLectureId] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const [openTopics, setOpenTopics] = useState({});
  const windowWidth = useWindowWidth();
  const handleClick = lectureId => {
    setSelectedLectureId(lectureId);
    if (openMenu) setTimeout(() => setOpenMenu(false), 50);
  };

  const renderLectureItem = lecture => (
    <ThemeLink to={`${lecture._id}`} onClick={() => handleClick(lecture._id)}>
      {lecture.title}
    </ThemeLink>
  );
  const selectedLecture = lectures.find(
    lecture => lecture._id === selectedLectureId
  );

  const handleToggleTopic = topic => {
    setOpenTopics(prevOpenTopics => ({
      ...prevOpenTopics,
      [topic]: !prevOpenTopics[topic],
    }));
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
          {selectedLecture && (
            <LectureFrame
              src={selectedLecture.url}
              title="лекція"
            ></LectureFrame>
          )}
        </ThemeDiv2>
      </ListSection>
    </>
  );
}
export default LecturePage;

