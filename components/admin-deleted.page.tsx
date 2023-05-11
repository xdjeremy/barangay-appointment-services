import React, { FC } from "react";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { ListResult } from "pocketbase";
import {
  AppointmentsResponse,
  DocumentRequestsResponse,
  TicketsResponse,
  UsersResponse,
} from "@/types";
import DeletedTableItem from "@/components/deleted.table.item";

type TExpand = {
  user: UsersResponse;
};

const fetcher = async (query: any): Promise<any> => {
  const [table] = query;
  try {
    return await pocketBase.collection(table).getList(1, 30, {
      filter: "active = false",
      sort: "-created",
      expand: "user",
    });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const AdminDeletedPage: FC = () => {
  const { data: ticketsData, error: ticketsError } = useSWR<
    ListResult<TicketsResponse<TExpand>>
  >(["tickets"], fetcher);

  const { data: archiveData, error: archiveError } = useSWR<
    ListResult<DocumentRequestsResponse<TExpand>>
  >(["document_requests"], fetcher);

  const { data: appointmentData, error: appointmentError } = useSWR<
    ListResult<AppointmentsResponse<TExpand>>
  >(["document_requests"], fetcher);

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
            <th className={"border-2 border-black text-center"}>Name</th>
            <th className={"border-2 border-black text-center"}>Type</th>
            <th className={"border-2 border-black text-center"}>Date</th>
          </tr>
        </thead>
        <tbody>
          {ticketsData &&
            !ticketsError &&
            ticketsData.items.map((ticket) => (
              <DeletedTableItem
                name={ticket.expand?.user.name || ""}
                type={"Ticket"}
                date={ticket.created}
                key={ticket.id}
              />
            ))}
          {archiveData &&
            !archiveError &&
            archiveData.items.map((ticket) => (
              <DeletedTableItem
                name={ticket.expand?.user.name || ""}
                type={"Archive"}
                date={ticket.created}
                key={ticket.id}
              />
            ))}
          {appointmentData &&
            !appointmentError &&
            appointmentData.items.map((ticket) => (
              <DeletedTableItem
                name={ticket.expand?.user.name || ""}
                type={"Appointment"}
                date={ticket.created}
                key={ticket.id}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDeletedPage;
