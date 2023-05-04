import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.success) {
      router.push("/news").then(() => {});
    }
  });

  return (
    <div
      className={
        "flex min-h-screen flex-col items-center justify-center bg-white"
      }
    >
      <div
        className={
          "pb-28 text-center text-5xl font-bold text-black drop-shadow-2xl"
        }
      >
        B.A.S
      </div>
      <div
        className={" flex flex-row gap-4 rounded-xl bg-[#A2BD96] px-44 py-56"}
      >
        <Link
          href={"register"}
          className={"pt-2 text-2xl font-semibold text-black"}
        >
          REGISTER
        </Link>
        <Link
          href={"register"}
          className={
            "rounded-md bg-[#1b360f] px-8 py-2 text-2xl font-semibold text-[#A2BD96]"
          }
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
};

export default Home;