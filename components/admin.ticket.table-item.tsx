import React, { FC, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { TicketsResponse } from "@/types";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

interface Props {
  data: TicketsResponse;
}

const AdminTicketTableItem: FC<Props> = ({ data }) => {
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const router = useRouter();

  const deleteRequest = async () => {
    try {
      await pocketBase.collection("tickets").update(data.id, {
        active: false,
      });

      toast.success("Request deleted successfully");
      setShowDelete(false);
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <>
      {showDelete && (
        <div className={"absolute rounded-2xl bg-[#D9D9D9] px-24 py-16"}>
          <h3 className={"text-center text-2xl font-semibold"}>
            Delete Notice
          </h3>
          <p className={"mt-12 text-center text-2xl font-light"}>
            Are you sure you want to delete this request?
          </p>
          <div className={"mt-64 flex flex-row gap-40"}>
            <button
              onClick={() => deleteRequest()}
              className={"bg-[#039500] px-16 py-2.5 font-semibold text-white"}
            >
              Confirm
            </button>
            <button
              onClick={() => setShowDelete(false)}
              className={"bg-[#A50028] px-16 py-2.5 font-semibold text-white"}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <tr key={data.id}>
        <td className={"border-2 border-black text-center"}>{data.email}</td>
        <td className={"border-2 border-black text-center"}>{data.subject}</td>
        <td className={"border-2 border-black text-center"}>{data.body}</td>
        <td className={"border-2 border-black text-center"}>
          <span className={"flex flex-row"}>
            <XMarkIcon
              onClick={() => setShowDelete(true)}
              className={"mx-auto h-6 w-6 cursor-pointer text-red-500"}
            />
            <ChatBubbleLeftIcon
              className={"mx-auto h-6 w-6 cursor-pointer text-blue-500"}
              onClick={() => router.push(`/admin-ticket/${data.id}`)}
            />
          </span>
        </td>
      </tr>
    </>
  );
};

export default AdminTicketTableItem;
