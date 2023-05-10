import React, { FC } from "react";
import pic from "../assets/images/kineme.jpg";
import Image from "next/image";
import { useUser } from "@/context";

const ProfilePage: FC = () => {
  const { user } = useUser();

  return (
    <div>
      <h1 className={"px-4 py-3.5 text-right text-5xl font-bold text-black "}>
        YOUR PROFILE
      </h1>
      <div className={"pt-8"}>
        <div
          className={
            "ml-14 mr-4 flex h-[935px] flex-col items-center rounded-lg bg-gray-200 pt-16"
          }
        >
          <Image
            src={pic}
            alt={"profile"}
            width={160}
            height={160}
            className={"h-40 w-40 overflow-hidden rounded-full"}
          />
          <div className={"pt-8 text-5xl text-black"}>{user?.username}</div>
          <div className={"pt-8 text-3xl text-black "}>{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
