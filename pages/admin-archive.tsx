import React from "react";
import AdminLayoutPage from "@/components/admin.layout.page";
import AdminTable from "@/components/login/admin.table";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { UsersResponse, UsersRoleOptions } from "@/types";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  user: string;
}

const AdminArchive: NextPage<Props> = ({ user }) => {
  const { setUser } = useUser();
  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  return (
    <AdminLayoutPage activePage={"Manage Archive"}>
      <AdminTable />
    </AdminLayoutPage>
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

    const user = await pb
      .collection("users")
      .getOne<UsersResponse>(pb.authStore.model?.id);

    // if user is not admin
    if (user.role !== UsersRoleOptions.admin) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        user: JSON.stringify(user),
      },
    };
  } catch (_) {
    // 404
    return {
      notFound: true,
    };
  }
};

export default AdminArchive;
