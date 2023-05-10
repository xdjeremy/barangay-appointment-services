import React, { useEffect } from "react";
import Layout from "@/components/layout";
import NewsPagePage from "@/components/news.page.page";
import { useRouter } from "next/router";

const News = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JS.parse(localStorage.getItem("user") || "{}");
    if (!user.success) {
      router.push("/login").then(() => {});
    }
  });

  return (
    <Layout activePage={"News"}>
      <NewsPagePage />
    </Layout>
  );
};

export default News;
