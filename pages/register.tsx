import React, { useEffect } from "react";
import RegisterPage from "@/components/register.page";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.success) {
      router.push("/news").then(() => {});
    }
  });

  return <RegisterPage />;
};

export default Register;
