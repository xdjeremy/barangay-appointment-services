import React from 'react';
import Layout from "@/components/layout";
import NewsPagePage from "@/components/news.page.page";

const NewsPage = () => {
    return (
        <Layout activePage={"News"}>
            <NewsPagePage/>
        </Layout>
    );
};

export default NewsPage;