import React from "react";
import { GetServerSideProps, NextPage } from "next";
import { initPocketBase } from "@/utils";
import { useUser } from "@/context";
import { useEffectOnce } from "usehooks-ts";
import Layout from "@/components/layout";
import AdminTicketReplyPage from "@/components/admin.ticket.reply.page";

interface Props {
  user: string;
  ticket: string;
}

const UserTicket: NextPage<Props> = ({ user, ticket }) => {
  const { setUser } = useUser();
  useEffectOnce(() => {
    setUser(JSON.parse(user));
  });

  const ticketData = JSON.parse(ticket);

  return (
    <Layout activePage={"Ticket List"}>
      <AdminTicketReplyPage ticket={ticketData} />
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

    // get ticket by id
    const { id } = ctx.query;
    const ticket = await pb.collection("tickets").getOne(id as string);

    return {
      props: {
        user: JSON.stringify(user),
        ticket: JSON.stringify(ticket),
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

export default UserTicket;
