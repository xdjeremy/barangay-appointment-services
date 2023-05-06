import React from "react";
import AdminLayoutPage from "@/components/admin.layout.page";
import AdminTicketTable from "@/components/admin.ticket.table";

const AdminTicket = () => {
  return (
    <AdminLayoutPage activePage={"View Tickets"}>
      <AdminTicketTable />
    </AdminLayoutPage>
  );
};

export default AdminTicket;
