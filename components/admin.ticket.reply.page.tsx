import React, { FC, useState } from "react";
import {
  TicketRepliesRecord,
  TicketRepliesResponse,
  TicketsResponse,
} from "@/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { pocketBase } from "@/utils";
import { useEffectOnce } from "usehooks-ts";
import TicketReply from "@/components/ticket.reply";
import toast from "react-hot-toast";
import { useUser } from "@/context";

interface Props {
  ticket: TicketsResponse;
}

interface InputProps {
  message: string;
}

const AdminTicketReplyPage: FC<Props> = ({ ticket }) => {
  const { register, handleSubmit, resetField } = useForm<InputProps>();
  const [messages, setMessages] = useState<TicketRepliesResponse[]>([]);
  const { user } = useUser();
  const getMessages = async () => {
    const ticketReplies = await pocketBase
      .collection("ticket_replies")
      .getFullList<TicketRepliesResponse>({
        filter: `ticket = '${ticket.id}'`,
        sort: "created",
        $autoCancel: false,
      });

    setMessages(ticketReplies);
  };

  pocketBase
    .collection("ticket_replies")
    .subscribe("*", async (_) => {
      await getMessages();
    })
    .then();

  useEffectOnce(() => {
    getMessages().then();
  });

  const handleSendMessage: SubmitHandler<InputProps> = async ({ message }) => {
    try {
      const data: TicketRepliesRecord = {
        ticket: ticket.id,
        message,
        // @ts-ignore
        role: user?.role,
      };

      await pocketBase.collection("ticket_replies").create(data);
      resetField("message");
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  return (
    <div className={"bg-white"}>
      <h1
        className={
          "px-4 pb-20 pt-3.5 text-right text-5xl font-bold uppercase text-black"
        }
      >
        {ticket.subject}
      </h1>

      <div
        className={
          "mx-10 flex h-96 flex-col justify-between rounded-lg bg-neutral-300 p-10 text-black"
        }
      >
        <div className={"flex h-full flex-col gap-2 overflow-auto p-5"}>
          {messages.map((message) => (
            <TicketReply key={message.id} data={message} />
          ))}
        </div>
        <form
          onSubmit={handleSubmit(handleSendMessage)}
          className={"flex flex-row items-center"}
        >
          <input
            {...register("message", { required: true })}
            className={"w-full rounded-l-lg px-3 py-2"}
          />
          <button
            type={"submit"}
            className={"rounded-r-lg bg-blue-500 px-5 py-2 text-white"}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminTicketReplyPage;
