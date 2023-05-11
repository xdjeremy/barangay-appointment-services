import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { pocketBase } from "@/utils";
import { RegisterValidation } from "@/utils/validations";
import { UsersRoleOptions } from "@/types";

interface RegisterInputs {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm<RegisterInputs>();

  const router = useRouter();
  const onSubmit: SubmitHandler<RegisterInputs> = async ({
    name,
    username,
    email,
    password,
    confirmPassword,
  }) => {
    try {
      // check if password and confirm password are the same
      if (password !== confirmPassword) {
        setError("confirmPassword", {
          type: "manual",
          message: "Passwords do not match",
        });

        return;
      }

      await pocketBase.collection("users").create({
        username,
        email,
        emailVisibility: true,
        password,
        passwordConfirm: confirmPassword,
        name,
        role: UsersRoleOptions.user,
      });

      toast.success("Account created successfully");
      await router.push("/login");
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        "flex min-h-screen flex-col items-center justify-center bg-[#A2BD96]"
      }
    >
      <div
        className={
          "pb-12 text-center text-5xl font-bold text-black drop-shadow-2xl"
        }
      >
        B.A.S
      </div>
      <div
        className={
          "flex w-full max-w-2xl flex-col items-center gap-3 bg-white px-10 py-8"
        }
      >
        <div
          className={" top-0 w-full text-center text-4xl font-bold text-black"}
        >
          Register your account
        </div>
        <div
          className={"w-full pt-5 text-left text-2xl font-medium text-black"}
        >
          Name
        </div>
        <div className={"w-full text-left text-red-700"}>
          <input
            {...register("name", { required: true })}
            type="text"
            className="mx-auto h-12 w-full border border-slate-300 bg-gray-200 px-5 py-4 pt-3 text-black placeholder:text-[#9E9E9E]"
            placeholder="Enter your full name..."
          />
          <div className={"pt-3"}>{errors.name?.message}</div>
        </div>
        <div
          className={"w-full pt-3 text-left text-2xl font-medium text-black"}
        >
          Username
        </div>
        <div className={"w-full text-left text-red-700"}>
          <input
            {...register("username", { required: true })}
            type="text"
            className="mx-auto h-12 w-full border border-slate-300 bg-gray-200 px-5 py-4 pt-3 text-black placeholder:text-[#9E9E9E]"
            placeholder="Enter your username..."
          />
          <div className={"pt-3"}>{errors.username?.message}</div>
        </div>
        <div
          className={"w-full pt-3 text-left text-2xl font-medium text-black"}
        >
          Email address
        </div>
        <div className={"w-full text-left text-red-700"}>
          <input
            {...register("email", { required: true })}
            type="email"
            className="mx-auto h-12 w-full border border-slate-300 bg-gray-200 px-10 py-4 pt-3 text-black placeholder:text-[#9E9E9E]"
            placeholder="Enter your Email address..."
          />
          <div className={"pt-3"}>{errors.email?.message}</div>
        </div>
        <div
          className={"w-full pt-3 text-left text-2xl font-medium text-black"}
        >
          Password
        </div>
        <div className={"w-full text-left text-red-700"}>
          <input
            {...register("password", RegisterValidation.password)}
            type="password"
            className="mx-auto h-12 w-full border border-slate-300 bg-gray-200 px-10 py-4 pt-3 text-black placeholder:text-[#9E9E9E]"
            placeholder="Enter your password..."
          />
          <div className={"pt-3"}>{errors.password?.message}</div>
        </div>
        <div
          className={"w-full pt-3 text-left text-2xl font-medium text-black"}
        >
          Confirm password
        </div>
        <div className={"w-full text-left text-red-700"}>
          <input
            {...register("confirmPassword", RegisterValidation.confirmPassword)}
            type="password"
            className="mx-auto h-12 w-full border border-slate-300 bg-gray-200 px-10 py-4 pt-3 text-black placeholder:text-[#9E9E9E]"
            placeholder="Enter your password again..."
          />
          <div className={"pt-3"}>{errors.confirmPassword?.message}</div>
        </div>
        <div className={"mx-auto  pt-3"}>
          <button
            type={"submit"}
            className={
              "w-60 rounded-md bg-blue-500 px-6 py-3.5 drop-shadow-2xl"
            }
          >
            Sign up
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
