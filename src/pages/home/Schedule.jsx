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
              <td> АВМ-24 (мат)</td>
              <td> ВТЗ, НХ-25 (мат)</td>
              <td> ЕТ, КХ-24 (мат)</td>
              <td> ЕС, НПМ, ЕН-24 (мат)</td>
              <td> ЕТ-25 (інф)</td>
            </tr>
            <tr>
              <th> 10:00 - 11:20</th>
              <td> </td>
              <td> ЕС, НПМ, ЕН-25 (мат)</td>
              <td> </td>
              <td> ЕТ-24 (інф)</td>
              <td> ЕТ-25 (інф)</td>
            </tr>
            <tr>
              <th> 11:30 - 12:50</th>
              <td> </td>
              <td> ОСКД, ЦЖ-25 (мат)</td>
              <td> ЕС, НПМ, ЕН-24 (мат)</td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 13:20 - 14:40</th>
              <td> АВМ-25 (мат)</td>
              <td> МСКД, ЦЖ-24 (мат)</td>
              <td> </td>
              <td> </td>
              <td> ЕТ-25 (мат)</td>
            </tr>
            <tr>
              <th> 14:50 - 16:10</th>
              <td> ЕТ, КХ-24 (мат)</td>
              <td> АВМ-24 (мат)</td>
              <td> ВТЗ, НХ-24 (мат)</td>
              <td> МСКД, ЦЖ-24 (мат)</td>
              <td> </td>
          </tr>          
            <tr>
              <th> 16:20 - 17:40</th>
              <td> ВТЗ, НХ-24 (мат)</td>
              <td> </td>
              <td> </td>
              <td>  (мат)</td>
              <td> НХ-24 (інф)</td>
            </tr>
        </tbody>
        </Timetable>
    )
}
export default Schedule