import React, { FC } from "react";
import AdminTableItems from "@/components/admin.table.items";
import useSWR from "swr";
import { pocketBase } from "@/utils";
import { DocumentRequestsResponse, UsersResponse } from "@/types";

type TExpand = {
  user: UsersResponse;
};
const fetcher = async (query: any) => {
  const [document_requests] = query;
  try {
    return pocketBase
      .collection(document_requests)
      .getList<DocumentRequestsResponse<TExpand>>(1, 30, {
        sort: "-created",
        filter: "active = true",
        expand: "user",
      });
  } catch (err: any) {
    throw new Error(err.data.message);
  }
};
const AdminTable: FC = () => {
  const { data, error } = useSWR(["document_requests"], fetcher);

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
              Requested Document
            </th>
            <th className={"border-2 border-black text-center"}>Name</th>
            <th className={"border-2 border-black text-center"}>Email</th>
            <th className={"border-2 border-black text-center"}>Validate</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            !error &&
            data.items.map((items) => (
              <AdminTableItems key={items.id} data={items} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
