import React, {FC, useState} from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarPage: FC = () => {
    const [calendar, setCalendar ] = useState<any>(new Date())
    return (
        <div>
            <Calendar value={calendar} onChange={setCalendar} className={"text-black rounded-lg text-center leading-10 mx-auto my-8 "}/>
        </div>
    );
};

export default CalendarPage;