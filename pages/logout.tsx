import React from "react";
import { GetServerSideProps, NextPage } from "next";
import Layout from "@/components/layout";
import { initPocketBase } from "@/utils";

const Logout: NextPage = () => {
  return (
    <Layout activePage={"News"}>
      <span>Logging out...</span>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const pb = await initPocketBase(ctx);
  pb.authStore.clear();

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default Logout;
