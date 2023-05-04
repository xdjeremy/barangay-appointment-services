import React from 'react';
import Layout from "@/components/layout";
import ProfilePage from "@/components/profile.page";

const Profile = () => {
    return (
        <Layout activePage={'Profile'}>
            <ProfilePage/>
        </Layout>
    );
};

export default Profile;