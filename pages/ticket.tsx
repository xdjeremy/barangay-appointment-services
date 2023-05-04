import React, { useEffect } from "react";
import { NextPage } from "next";
import Layout from "@/components/layout";
import TicketPage from "@/components/ticket.page";
import { useRouter } from "next/router";

const Ticket: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (!user.success) {
      router.push("/login").then(() => {});
    }
  });

  return (
    <Layout activePage={"Submit a Ticket"}>
      <TicketPage />
    </Layout>
  );
};

export default Ticket;
