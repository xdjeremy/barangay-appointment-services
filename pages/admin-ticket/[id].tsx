import React from "react";
import { GetServerSideProps, NextPage } from "next";
import AdminLayoutPage from "@/components/admin.layout.page";
import AdminTicketReplyPage from "@/components/admin.ticket.reply.page";
import { initPocketBase } from "@/utils";
import { TicketsResponse, UsersResponse, UsersRoleOptions } from "@/types";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";

interface Props {
  user: string;
  ticket: string;
}

const AdminTicketReply: NextPage<Props> = ({ user, ticket }) => {
  const { setUser } = useUser();
  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  const ticketData = JSON.parse(ticket) as TicketsResponse;

  return (
    <AdminLayoutPage activePage={"View Tickets"}>
      <AdminTicketReplyPage ticket={ticketData} />
    </AdminLayoutPage>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const pb = await initPocketBase(ctx);

    // if user is not logged in
    if (!pb.authStore.isValid || !pb.authStore.model?.id) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    const user = await pb
      .collection("users")
      .getOne<UsersResponse>(pb.authStore.model.id);

    // if user is not admin
    if (user.role !== UsersRoleOptions.admin) {
      return {
        notFound: true,
      };
    }

    // get ticket id from url
    const { id } = ctx.query;
    const ticket = await pb
      .collection("tickets")
      .getOne<TicketsResponse>(id as string);

    return {
      props: {
        user: JSON.stringify(user),
        ticket: JSON.stringify(ticket),
      },
    };
  } catch (_) {
    return {
      notFound: true,
    };
  }
};

export default AdminTicketReply;
