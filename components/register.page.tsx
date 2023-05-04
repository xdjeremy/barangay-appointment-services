import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface Inputs {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterPage: FC = () => {
    const {register, formState: {errors}, handleSubmit, setError} = useForm<Inputs>()

    const router = useRouter()
    const onSubmit: SubmitHandler<Inputs> = async ({name, username, email, password, confirmPassword}) => {
        try {
            // check if password and confirm password are the same
            if (password !== confirmPassword) {
                setError('confirmPassword', {
                    type: 'manual',
                    message: 'Passwords do not match'
                })

                return;
            }

            const res = await fetch('/api/users/register', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, username, email, password, confirmPassword})
            })

            const data = await res.json()

            if (!data.success) {
                toast.error(data.message)
                return
            }

            toast.success(data.message)
            await router.push('/login')
        } catch (err: any) {
            toast.error(err.message)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}
              className={"bg-[#A2BD96] min-h-screen flex flex-col items-center justify-center"}>
            <div className={"text-center font-bold text-5xl text-black pb-12 drop-shadow-2xl"}>
                B.A.S
            </div>
            <div className={"bg-white flex flex-col w-full max-w-2xl items-center py-8 px-10 gap-3"}>
                <div className={" text-black font-bold text-4xl text-center w-full top-0"}>
                    Register your account
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-5"}>
                    Name
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        {...register("name", {required: true})}
                        type="text"
                        className="h-12 border text-black border-slate-300 bg-gray-200 px-5 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your full name..."
                    />
                    <div className={"pt-3"}>
                        {
                            errors.name?.message
                        }
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Username
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        {...register("username", {required: true})}
                        type="text"
                        className="h-12 border text-black border-slate-300 bg-gray-200 px-5 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your username..."
                    />
                    <div className={"pt-3"}>
                        {errors.username?.message}
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Email address
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        {...register("email", {required: true})}
                        type="email"
                        className="h-12 border border-slate-300 bg-gray-200 px-10 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your Email address..."
                    />
                    <div className={"pt-3"}>
                        {errors.email?.message}
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Password
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        {...register("password", {required: true})}
                        type="password"
                        className="h-12 border text-black border-slate-300 bg-gray-200 px-10 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your password..."
                    />
                    <div className={"pt-3"}>
                        {errors.password?.message}
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Confirm password
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        {...register("confirmPassword", {required: true})}
                        type="password"
                        className="h-12 border text-black border-slate-300 bg-gray-200 px-10 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your password again..."
                    />
                    <div className={"pt-3"}>
                        {errors.confirmPassword?.message}
                    </div>
                </div>
                <div className={"pt-3  mx-auto"}>
                    <button type={'submit'} className={"bg-blue-500 rounded-md w-60 px-6 py-3.5 drop-shadow-2xl"}>
                        Sign up
                    </button>
                </div>
            </div>
        </form>
    );
};

export default RegisterPage;