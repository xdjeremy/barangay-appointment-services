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

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//     try {
//         const user = await fetch(`/api/users/${ctx.}`)
//     } catch (err: any) {
//         return {
//             props: {}
//         }
//     }
// }

export default Profile;