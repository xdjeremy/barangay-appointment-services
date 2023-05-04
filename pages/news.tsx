import React from 'react';
import Layout from "@/components/layout";
import NewsPage from "@/components/news.page";

const News = () => {
    return (
        <Layout activePage={'News'}>
            <NewsPage/>
        </Layout>
    );
};

export default News;