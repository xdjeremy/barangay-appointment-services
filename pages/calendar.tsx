import React from 'react';
import CalendarPage from "@/components/calendar.page";
import Layout from "@/components/layout";
import CalendarCancelButton from "@/components/calendar.cancel.button";
import CalendarSetButton from "@/components/calendar.set.button";

const Calendar = () => {
    return (
        <Layout activePage={"Calendar"}>
            <h1 className={'text-5xl text-black font-bold text-right px-4 py-3.5 '}>
                CALENDAR
            </h1>
            <div className={"border border-[#F3F3F4] drop-shadow-lg rounded-lg w-2/5 mx-auto mt-28"}>
                <CalendarPage/>
                <div className={"border border-t-2 border-b-0 border-[#F3F3F4] flex flex-row justify-end gap-4 pt-6 "}>
                    <CalendarCancelButton/>
                    <CalendarSetButton/>
                </div>
                <div className={"flex flex-col text-black py-1 px-3 font-medium text-2xl "}>
                    August 1
                </div>
                <div className={"flex flex-col text-black px-3 font-medium text-lg "}>
                    Mr/Ms(name) appointment is set during 8:00-10:00AM
                </div>
                <div className={"flex flex-col text-black pt-4 px-3 font-medium text-2xl "}>
                    August 18
                </div>
                <div className={"flex flex-col text-black px-3 font-medium text-lg "}>
                    Mr/Ms(name) appointment is set during 1:00-2:00pm
                </div>
            </div>
        </Layout>
    );
};

export default Calendar;