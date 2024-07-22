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
              <td> 2 T (інф)</td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 10:00 - 11:20</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 11:30 - 12:50</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 13:20 - 14:40</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 14:50 - 16:10</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <th> 16:20 - 17:40</th>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
        </tbody>
        </Timetable>
    )
}
export default Schedule