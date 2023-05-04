import React from "react";
import { NextPage } from "next";
import Layout from "@/components/layout";
import ArchivePage from "@/components/archive.page";

const Archive: NextPage = () => {
  return (
    <Layout activePage={"Archive"}>
      <ArchivePage />
    </Layout>
  );
};

export default Archive;
