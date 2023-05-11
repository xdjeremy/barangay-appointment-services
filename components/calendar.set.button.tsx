import React, {FC} from 'react';

const CalendarSetButton: FC = () => {
    return (
        <button className={" bg-green-700 rounded-lg text-center text-white font-bold px-6 py-2 "}>
            Set date
        </button>
    );
};

export default CalendarSetButton;