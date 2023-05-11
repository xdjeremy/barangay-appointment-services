import React from "react";
import { GetServerSideProps, NextPage } from "next";
import AdminLayoutPage from "@/components/admin.layout.page";
import AdminDeletedPage from "@/components/admin-deleted.page";
import { initPocketBase } from "@/utils";
import { UsersResponse, UsersRoleOptions } from "@/types";

const AdminDeleted: NextPage = () => {
  return (
    <AdminLayoutPage activePage={"Admin Deleted"}>
      <AdminDeletedPage />
    </AdminLayoutPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is not logged in
    if (!pb.authStore.isValid || !pb.authStore?.model?.id) {
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

    // if user is not admin then 404
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
    return {
      notFound: true,
    };
  }
};

export default AdminDeleted;
