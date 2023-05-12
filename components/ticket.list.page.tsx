import React, { FC } from "react";
import { pocketBase } from "@/utils";
import useSWR from "swr";
import { TicketsResponse } from "@/types";
import TicketListItem from "@/components/ticket.list.item";

const fetcher = async (query: any) => {
  const [table] = query;
  try {
    return await pocketBase.collection(table).getList<TicketsResponse>(1, 30, {
      sort: "-created",
      filter: `active = true && user = "${pocketBase.authStore.model?.id}"`,
    });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const TicketListPage: FC = () => {
  const { data, error } = useSWR(["tickets"], fetcher);

  return (
    <div>
      <h1
        className={
          "px-4 py-12 pt-3.5 text-right text-5xl font-bold text-black "
        }
      >
        TICKET LIST
      </h1>

      <table
        className={
          "w-full table-fixed justify-items-center px-6 py-6 text-2xl text-black "
        }
      >
        <thead>
          <tr>
            <th className={"border-2 border-black text-center"}> Subject</th>
            <th className={"border-2 border-black text-center"}> Message</th>
            <th className={"border-2 border-black text-center"}> Action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            !error &&
            data.items.map((item) => (
              <TicketListItem data={item} key={item.id} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketListPage;
