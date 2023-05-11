import React from "react";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { TicketsResponse } from "@/types";
import AdminTicketTableItem from "@/components/admin.ticket.table-item";

const fetcher = async (query: any) => {
  const [table] = query;
  try {
    return pocketBase.collection(table).getList<TicketsResponse>(1, 30, {
      sort: "-created",
      filter: `active = true`,
    });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const AdminTicketTable = () => {
  const { data, error } = useSWR(["tickets"], fetcher);
  console.log(data);

  return (
    <div>
      <h1
        className={"px-4 pb-20 pt-3.5 text-right text-5xl font-bold text-black"}
      >
        VIEW TICKETS
      </h1>
      <table
        className={
          "w-full table-fixed justify-items-center px-6 py-6 text-2xl text-black "
        }
      >
        <thead>
          <tr>
            <th className={"border-2 border-black text-center"}>Email</th>
            <th className={"border-2 border-black text-center"}> Subject</th>
            <th className={"border-2 border-black text-center"}> Message</th>
            <th className={"border-2 border-black text-center"}> Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            !error &&
            data.items.map((items) => (
              <AdminTicketTableItem data={items} key={items.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTicketTable;
