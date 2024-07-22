import { TimetableHeaderTh } from './homepage.styled';

const ScheduleDesctop = () => {
  return (
    <thead>
      <tr>
        <TimetableHeaderTh></TimetableHeaderTh>
        <TimetableHeaderTh> Понеділок</TimetableHeaderTh>
        <TimetableHeaderTh> Вівторок</TimetableHeaderTh>
        <TimetableHeaderTh> Середа</TimetableHeaderTh>
        <TimetableHeaderTh> Четвер</TimetableHeaderTh>
        <TimetableHeaderTh> П'ятниця</TimetableHeaderTh>
      </tr>
    </thead>
  );
};
export default ScheduleDesctop;
