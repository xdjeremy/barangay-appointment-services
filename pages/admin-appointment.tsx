import React from "react";
import AdminLayoutPage from "@/components/admin.layout.page";
import AppointmentTable from "@/components/appointment.table";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { UsersResponse, UsersRoleOptions } from "@/types";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  user: string;
}

const AdminAppointment: NextPage<Props> = ({ user }) => {
  const { setUser } = useUser();

  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  return (
    <AdminLayoutPage activePage={"View Appointments"}>
      <AppointmentTable />
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

    // get user
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
    return {
      notFound: true,
    };
  }
};

export default AdminAppointment;
