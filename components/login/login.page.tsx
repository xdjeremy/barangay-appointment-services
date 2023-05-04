import React from 'react';

const LoginPage = () => {
    return (
        <div className={"bg-white min-h-screen flex flex-col items-center justify-center"}>
            <div className={"text-center font-bold text-5xl text-black pb-28 drop-shadow-2xl"}>
                B.A.S
            </div>
            <div className={"bg-[#A2BD96] flex flex-col w-full max-w-2xl items-center py-36 px-10 gap-7"}>
                <div className={" text-black font-bold text-2xl text-center w-full top-0"}>
                    Login
                </div>
                <input
                    type="username"
                    name="username"
                    className="h-12 border border-[#C2C2C2] bg-white px-10 py-4 placeholder:text-[#9E9E9E] pt-7 w-full mx-auto"
                    placeholder="Username or Email Address"
                />
                <input
                    type="password"
                    name="password"
                    className="h-12 border border-[#C2C2C2] bg-white px-10 py-4 placeholder:text-[#9E9E9E] pt-7 w-full mx-auto"
                    placeholder="Password"
                />
                <div className={"pt-7  mx-auto"}>
                    <button type={'submit'} className={"bg-blue-500 rounded-md w-32 px-6 py-3.5 drop-shadow-2xl"}>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;