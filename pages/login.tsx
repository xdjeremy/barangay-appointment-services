import React, { useEffect } from "react";
import LoginPage from "@/components/login/login.page";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.success) {
      router.push("/news").then(() => {});
    }
  });

  return (
    <>
      <LoginPage />
    </>
  );
};

export default Login;