import React, { FC, useEffect, useState } from "react";
import AdminTableItems from "@/components/admin.table.items";

const AdminTable: FC = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getTable = async () => {
      const res = await fetch("/api/archive", {
        method: "get",
      });

      const tableData = await res.json();

      setData(tableData);
    };

    getTable().then(() => {});
  });

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
            <th className={"border-2 border-black text-center"}> Name</th>
            <th className={"border-2 border-black text-center"}> Validate</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((items: any) => (
              <AdminTableItems
                key={items._id}
                docs={items.document}
                email={items.email}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
