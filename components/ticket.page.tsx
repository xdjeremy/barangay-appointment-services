import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Input {
  email: string;
  subject: string;
  message: string;
}

const TicketPage: FC = () => {
  const { register, handleSubmit, resetField } = useForm<Input>();

  const handleTicketSubmit: SubmitHandler<Input> = async ({
    email,
    subject,
    message,
  }) => {
    try {
      const res = await fetch("/api/ticket", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        return toast.error(data.message);
      }

      toast.success("Ticket submitted successfully!");
      // reset the form
      resetField("email");
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
        <h2 className={"text-xl font-semibold"}>Feedback / Complaint</h2>

        <input
          {...register("email", {
            required: true,
          })}
          type={"text"}
          className={"h-10 w-full px-3"}
          placeholder={"type email here..."}
        />
        <input
          {...register("subject", {
            required: true,
          })}
          type={"text"}
          className={"h-10 w-full px-3"}
          placeholder={"[Type Subject]"}
        />
        <textarea
          {...register("message", {
            required: true,
          })}
          rows={10}
          className={"w-full"}
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
