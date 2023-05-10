import React, { useEffect } from "react";
import LoginPage from "@/components/login/login.page";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { initPocketBase } from "@/utils";

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is already logged in then redirect to news plage
    if (pb.authStore.isValid) {
      return {
        redirect: {
          destination: "/news",
          permanent: false,
        },
      };
    }

    return {
      props: {},
    };
  } catch (_) {
    return {
      props: {},
    };
  }
};

export default Login;