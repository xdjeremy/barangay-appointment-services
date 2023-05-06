import React, { useEffect, useState } from "react";

const AdminTicketTable = () => {
  const [data, setData] = useState<any>();

  useEffect(() => {
    const getTable = async () => {
      const res = await fetch("/api/ticket", {
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
            data.data.map((items: any) => (
              <tr key={items._id}>
                <td className={"border-2 border-black text-center"}>
                  {items.email}
                </td>
                <td className={"border-2 border-black text-center"}>
                  {items.subject}
                </td>
                <td className={"border-2 border-black text-center"}>
                  {items.message}
                </td>
                <td className={"border-2 border-black text-center"}>
                  <input type={"checkbox"} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTicketTable;
