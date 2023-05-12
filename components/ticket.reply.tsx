import React, { FC } from "react";
import { TicketRepliesResponse } from "@/types";
import { classNames } from "@/utils";
import { useUser } from "@/context";

interface Props {
  data: TicketRepliesResponse;
}

const TicketReply: FC<Props> = ({ data }) => {
  const { user } = useUser();

  return (
    <div
      className={classNames(
        // @ts-ignore
        data.role === user?.role ? "justify-end items-end" : "justify-start items-start",
        "flex flex-col w-full"
      )}
    >
      <div
        className={classNames(
          // @ts-ignore
          data.role === user?.role ? "bg-blue-500" : "bg-gray-500",
          "w-fit rounded-lg px-3 py-2 text-white"
        )}
      >
        {data.message}
      </div>
    </div>
  );
};

export default TicketReply;
