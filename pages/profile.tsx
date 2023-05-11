import React from "react";
import Layout from "@/components/layout";
import ProfilePage from "@/components/profile.page";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  user: string;
}
const Profile: NextPage<Props> = ({user}) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  return (
    <Layout activePage={"Profile"}>
      <ProfilePage />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is not logged in
    if (!pb.authStore.isValid || !pb.authStore.model) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    // get user
    const user = await pb.collection("users").getOne(pb.authStore.model?.id);

    return {
      props: {
        user: JSON.stringify(user),
      },
    };
  } catch (_) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default Profile;