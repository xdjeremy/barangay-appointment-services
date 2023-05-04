import React, {FC} from 'react';

const RegisterPage: FC = () => {
    return (
        <div className={"bg-[#A2BD96] min-h-screen flex flex-col items-center justify-center"}>
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
                        type="name"
                        name="name"
                        className="h-12 border border-slate-300 bg-gray-200 px-5 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your full name..."
                    />
                    <div className={"pt-3"}>
                        Enter details
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Username
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        type="user"
                        name="user"
                        className="h-12 border border-slate-300 bg-gray-200 px-5 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your username..."
                    />
                    <div className={"pt-3"}>
                        Enter details
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Email address
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        type="email"
                        name="email"
                        className="h-12 border border-slate-300 bg-gray-200 px-10 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your Email address..."
                    />
                    <div className={"pt-3"}>
                        Enter details
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Password
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        type="password"
                        name="password"
                        className="h-12 border border-slate-300 bg-gray-200 px-10 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your password..."
                    />
                    <div className={"pt-3"}>
                        Enter details
                    </div>
                </div>
                <div className={"text-black font-medium text-2xl text-left w-full pt-3"}>
                    Confirm password
                </div>
                <div className={"text-red-700 text-left w-full"}>
                    <input
                        type="pass"
                        name="pass"
                        className="h-12 border border-slate-300 bg-gray-200 px-10 py-4 placeholder:text-[#9E9E9E] pt-3 w-full mx-auto"
                        placeholder="Enter your password again..."
                    />
                    <div className={"pt-3"}>
                        Enter details
                    </div>
                </div>
                <div className={"pt-3  mx-auto"}>
                    <button type={'submit'} className={"bg-blue-500 rounded-md w-60 px-6 py-3.5 drop-shadow-2xl"}>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;