import React from "react";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { AppointmentsResponse, UsersResponse } from "@/types";
import AppointmentTableItems from "@/components/appointmenttable.items";

type TExpand = {
  user: UsersResponse;
};
const fetcher = async (table: string) => {
  try {
    return await pocketBase
      .collection(table)
      .getList<AppointmentsResponse<TExpand>>(1, 30, {
        sort: "-created",
        expand: "user",
      });
  } catch (err: any) {
    throw Error(err.data.message);
  }
};
const AppointmentTable = () => {
  const { data, error } = useSWR("appointments", fetcher);

  return (
    <div>
      <h1
        className={"px-4 pb-20 pt-3.5 text-right text-5xl font-bold text-black"}
      >
        DOCUMENTS
      </h1>
      <table
        className={
          "w-full table-fixed justify-items-center px-6 py-6 text-2xl text-black "
        }
      >
        <thead>
          <tr>
            <th className={"border-2 border-black text-center"}>
              Barangay Official Appointment
            </th>
            <th className={"border-2 border-black text-center"}>
              Citizen Name
            </th>
            <th className={"border-2 border-black text-center"}>Email</th>
            <th className={"border-2 border-black text-center"}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            !error &&
            data.items.map((items: any) => (
              <AppointmentTableItems data={items} key={items.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentTable;
