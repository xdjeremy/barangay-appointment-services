import React from "react";
import AdminLayoutPage from "@/components/admin.layout.page";
import AppointmentTable from "@/components/appointment.table";

const AdminAppointment = () => {
  return (
    <AdminLayoutPage activePage={"View Appointments"}>
      <AppointmentTable />
    </AdminLayoutPage>
  );
};

export default AdminAppointment;
