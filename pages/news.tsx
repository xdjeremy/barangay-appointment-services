import React, { useEffect } from "react";
import Layout from "@/components/layout";
import NewsPage from "@/components/news.page";
import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.success) {
      router.push("/login").then(() => {});
    }
  });

  return (
    <Layout activePage={"News"}>
      <NewsPage />
    </Layout>
  );
};

export default News;
