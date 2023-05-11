import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { pocketBase } from "@/utils";

interface Inputs {
  username: string;
  password: string;
}

const LoginPage: FC = () => {
  const { register, handleSubmit } = useForm<Inputs>();

  const router = useRouter();
  const loginHandler: SubmitHandler<Inputs> = async ({
    username,
    password,
  }) => {
    try {
      await pocketBase.collection("users").authWithPassword(username, password);

      // save to cookie
      document.cookie = pocketBase.authStore.exportToCookie({
        httpOnly: false,
      });

      // redirect to home page
      await router.push("/news");
      toast.success("Login successful");
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

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
      <form
        onSubmit={handleSubmit(loginHandler)}
        className={
          "flex w-full max-w-2xl flex-col items-center gap-7 bg-[#A2BD96] px-10 py-36"
        }
      >
        <div
          className={" top-0 w-full text-center text-2xl font-bold text-black"}
        >
          Login
        </div>
        <input
          {...register("username", { required: true })}
          type="text"
          className="mx-auto h-12 w-full border border-[#C2C2C2] bg-white px-2 py-2 text-black placeholder:text-[#9E9E9E]"
          placeholder="Username or Email Address"
        />
        <input
          {...register("password", { required: true })}
          type="password"
          className="mx-auto h-12 w-full border border-[#C2C2C2] bg-white px-2 py-2 text-black placeholder:text-[#9E9E9E]"
          placeholder="Password"
        />
        <span></span>
        <div className={"mx-auto  pt-7"}>
          <button
            type={"submit"}
            className={
              "w-32 rounded-md bg-blue-500 px-6 py-3.5 drop-shadow-2xl"
            }
          >
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
