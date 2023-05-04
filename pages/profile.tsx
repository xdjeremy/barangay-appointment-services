import React, { useEffect } from "react";
import Layout from "@/components/layout";
import ProfilePage from "@/components/profile.page";
import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.success) {
      router.push("/login").then(() => {});
    }
  });

  return (
    <Layout activePage={"Profile"}>
      <ProfilePage />
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