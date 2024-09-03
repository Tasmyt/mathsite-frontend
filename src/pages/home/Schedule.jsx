import useWindowWidth from "hooks/useWindowWidth"
import ScheduleDesctop from "./ScheduleDesctop"
import ScheduleMobil from "./ScheduleMobil"
import { Timetable, TimetableCaption} from "./homepage.styled"


const Schedule = () => {
    const windowWidth = useWindowWidth(); 

    return (
        <Timetable>
          <TimetableCaption>
            Розклад занять.
          </TimetableCaption>          
              {windowWidth > 912 ? <ScheduleDesctop /> : <ScheduleMobil />}
        <tbody>
            <tr>
              <th> 8:30 - 9:50</th>
              <td> 2 АВМ (мат)</td>
              <td> 2 НПМ, Нар хор (мат)</td>
              <td> 2 АВМ (мат)</td>
              <td> 1 Еі, Нар хор (мат)</td>
              <td> 2 НПМ, Нар хор (інф)</td>
            </tr>
            <tr>
              <th> 10:00 - 11:20</th>
              <td> 1 Ет, Ні (інф)</td>
              <td> 2 ВТЗ, Ет (мат)</td>
              <td> 1 Еі, Нар хор (інф)</td>
              <td> </td>
              <td> 1 Ет, Ні (мат)</td>
            </tr>
            <tr>
              <th> 11:30 - 12:50</th>
              <td> 2 ЕН, Ес (мат)</td>
              <td> 1 АВМ (мат)</td>
              <td> 2 ВТЗ, Ет (інф)</td>
              <td> 2 ЕН, Ес (інф)</td>
              <td> 1 М, Цж (мат)</td>
            </tr>
            <tr>
              <th> 13:20 - 14:40</th>
              <td> </td>
              <td> </td>
              <td> 2 М, Цж (мат)</td>
              <td> </td>
              <td> 2 ЕН, Ес (мат)</td>
            </tr>
            <tr>
              <th> 14:50 - 16:10</th>
              <td> 2 М, Цж (мат)</td>
              <td> 1 Ес, НПМ, ВТЗ (мат)</td>
              <td> 2 М, Цж (інф)</td>
              <td> 2 ВТЗ, Ет (мат)</td>
              <td> </td>
            </tr>
            <tr>
              <th> 16:20 - 17:40</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> 2 НПМ, Нар хор (мат)</td>
              <td> </td>
            </tr>
        </tbody>
        </Timetable>
    )
}
export default Schedule