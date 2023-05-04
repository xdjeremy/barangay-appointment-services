import React from "react";
import Layout from "@/components/layout";
import DirectoryPage from "@/components/directory.page";

const Directory = () => {
  return (
    <Layout activePage={"Directory"}>
      <DirectoryPage />
    </Layout>
  );
};

export default Directory;