import React, {FC, useEffect, useState} from 'react';
import pic from "../assets/images/kineme.jpg"
import Image from "next/image";

const ProfilePage: FC = () => {
    const [userData, setUserData] = useState<any>({
        username: '',
        email: '',
    });

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '');
        setUserData({
            username: user.username,
            email: user.email,
        });
        console.log(user)

    }, [])

    return (
        <div>
            <h1 className={'text-5xl text-black font-bold text-right px-4 py-3.5 '}>
                YOUR PROFILE
            </h1>
            <div className={"pt-8"}>
                <div className={"flex flex-col bg-gray-200 mr-4 ml-14 pt-16 h-[935px] rounded-lg items-center"}>
                    <Image src={pic} alt={'profile'} width={160} height={160}
                           className={"rounded-full w-40 h-40 overflow-hidden"}/>
                    <div className={"text-5xl text-black pt-8"}>
                        {userData.username}
                    </div>
                    <div className={"text-3xl text-black pt-8 "}>
                        {userData.email}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProfilePage;