import React from "react";
import AdminLayoutPage from "@/components/admin.layout.page";
import AdminTable from "@/components/login/admin.table";

const AdminArchive = () => {
  return (
    <AdminLayoutPage activePage={"Manage Archive"}>
      <AdminTable />
    </AdminLayoutPage>
  );
};

export default AdminArchive;