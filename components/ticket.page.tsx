import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { TicketsRecord } from "@/types";
import { pocketBase } from "@/utils";
import { useEffectOnce } from "usehooks-ts";

interface Input {
  email: string;
  subject: string;
  message: string;
}

const TicketPage: FC = () => {
  const { register, handleSubmit, resetField, setValue } = useForm<Input>();

  useEffectOnce(() => {
    if (!pocketBase.authStore.model) return;
    setValue("email", pocketBase.authStore.model.email);
  });
  const handleTicketSubmit: SubmitHandler<Input> = async ({
    email,
    subject,
    message,
  }) => {
    try {
      // if user is not logged in
      if (!pocketBase.authStore.model) {
        toast.error("You must be logged in to submit a ticket.");
        return;
      }

      const data: TicketsRecord = {
        email,
        subject,
        body: message,
        user: pocketBase.authStore.model?.id,
      };

      await pocketBase.collection("tickets").create(data);

      toast.success("Ticket submitted successfully!");
      // reset the form
      resetField("subject");
      resetField("message");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleTicketSubmit)}>
      <h1
        className={
          "px-4 py-12 pt-3.5 text-right text-5xl font-bold text-black "
        }
      >
        SUBMIT A TICKET
      </h1>

      <div
        className={
          "mx-10 flex flex-col items-center gap-10 rounded-lg bg-gray-200 p-20"
        }
      >
        <h2 className={"text-xl font-semibold text-black"}>
          Feedback / Complaint
        </h2>

        <input
          {...register("email", {
            required: true,
          })}
          readOnly={true}
          type={"text"}
          className={"h-10 w-full px-3 text-black"}
          placeholder={"type email here..."}
        />
        <input
          {...register("subject", {
            required: true,
          })}
          type={"text"}
          className={"h-10 w-full px-3 text-black"}
          placeholder={"[Type Subject]"}
        />
        <textarea
          {...register("message", {
            required: true,
          })}
          rows={10}
          className={"w-full text-black"}
        />

        <button
          type={"submit"}
          className={"bg-green-500 px-10 py-5 font-semibold text-white"}
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default TicketPage;
