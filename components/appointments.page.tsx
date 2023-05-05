import React, {FC} from 'react';

const AppointmentsPage: FC = () => {
    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 pt-3.5 py-12 '}>
                APPOINTMENTS
            </h1>
            <div className={"bg-gray-100 flex flex-col mx-52 mt-12 rounded-2xl h-[850px] justify-items-center"}>
                <div className={"text-black font-medium text-4xl text-center pt-8"}>
                    Request an appointment
                </div>
                <div className={"text-black text-xl"}>
                    <div className={"px-56 pt-14 text-3xl"}>
                        Select Barangay Official
                    </div>
                    <div className={"ml-56"}>
                        <select
                            className={"h-14 w-5/6 bg-white px-8 text-black- mt-6"}
                        >
                            <option value="barangay_captain">Barangay Captain</option>
                            <option value="barangay_secretary">Barangay Secretary</option>
                            <option value="barangay_treasurer">Barangay Treasurer</option>
                            <option value="barangay_councilor">Barangay Councilor</option>
                            <option value="sk_chairman">SK Chairman</option>
                        </select>
                    </div>
                    <div className={"ml-56 pt-64"}>
                        <input
                            type={"text"}
                            className={"h-14 w-5/6 px-3 text-black"}
                            placeholder={"type email here..."}
                        />
                    </div>
                    <div className={"pt-28 pl-[530px]"}>
                        <button
                            type={"submit"}
                            className={"bg-green-500 px-14 py-3 font-semibold text-white"}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;