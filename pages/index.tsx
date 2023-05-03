import React from 'react';
import Link from "next/link";

const Home = () => {
    return (
        <div className={"bg-white min-h-screen flex flex-col items-center justify-center"}>
            <div className={"text-center font-bold text-5xl text-black pb-28 drop-shadow-2xl"}>
                B.A.S
            </div>
            <div className={" bg-[#A2BD96] rounded-xl flex flex-row px-44 py-56 gap-4"}>
                <Link href={"register"} className={"text-black text-2xl font-semibold pt-2"}>
                    REGISTER
                </Link>
                <Link href={"register"} className={"text-[#A2BD96] bg-[#1b360f] text-2xl font-semibold px-8 py-2 rounded-md"}>
                    LOGIN
                </Link>

            </div>
            <div>

            </div>

        </div>
    );
};

export default Home;