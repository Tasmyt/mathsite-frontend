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
              <td> ЕН, ЕС-23 (мат)</td>
              <td> ЕС, НПМ, ВТЗ-24 (мат)</td>
              <td> АВМ-23 (мат)</td>
              <td> Еі, НХ-24 (мат)</td>
              <td> АВМ-24 (мат)</td>
            </tr>
            <tr>
              <th> 10:00 - 11:20</th>
              <td> Ет, Ні-24 (мат)</td>
              <td> </td>
              <td> Еі, НХ-24 (інф)</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 11:30 - 12:50</th>
              <td> ЕС, НПМ, ВТЗ-24 (мат)</td>
              <td> АВМ-24 (мат)</td>
              <td> ЕТ, НІ-24 (інф)</td>
              <td> ЕТ, НІ-24 (мат)</td>
              <td> М, Цж-24 (мат)</td>
            </tr>
            <tr>
              <th> 13:20 - 14:40</th>
              <td> НХ, ЕІ-24 (мат)</td>
              <td> М, ЦЖ-24 (мат)</td>
              <td> М, Цж-23 (мат)</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 14:50 - 16:10</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> ВТЗ, Ет-23 (мат)</td>
              <td> </td>
          </tr>          
            <tr>
              <th> 16:20 - 17:40</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> НПМ, НХ-23 (мат)</td>
              <td> </td>
            </tr>
        </tbody>
        </Timetable>
    )
}
export default Schedule