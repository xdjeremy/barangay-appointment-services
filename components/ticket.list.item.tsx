import React, { FC } from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import { TicketsResponse } from "@/types";
import { useRouter } from "next/router";

interface Props {
  data: TicketsResponse;
}

const TicketListItem: FC<Props> = ({ data }) => {
  const router = useRouter();

  return (
    <tr>
      <td className={"border-2 border-black text-center"}>{data.subject}</td>
      <td className={"border-2 border-black text-center"}>{data.body}</td>
      <td className={"border-2 border-black text-center"}>
        <span className={"flex flex-row"}>
          <ChatBubbleLeftIcon
            className={"mx-auto h-6 w-6 cursor-pointer text-blue-500"}
            onClick={() => router.push(`/ticket/${data.id}`)}
          />
        </span>
      </td>
    </tr>
  );
};

export default TicketListItem;
