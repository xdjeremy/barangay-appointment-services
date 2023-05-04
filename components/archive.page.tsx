import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Input {
  email: string;
  document: string;
}

const ArchivePage: FC = () => {
  const { register, handleSubmit } = useForm<Input>();

  const handleArchiveSubmit: SubmitHandler<Input> = async ({
    email,
    document,
  }) => {
    try {
      const res = await fetch("/api/archive", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          document,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        return toast.error(data.message);
      }

      toast.success("Document requested successfully!");
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleArchiveSubmit)}>
      <h1
        className={
          "px-4 py-12 pt-3.5 text-right text-5xl font-bold text-black "
        }
      >
        DOCUMENTS
      </h1>

      <div
        className={
          "mx-10 flex flex-col items-center gap-10 rounded-lg bg-gray-200 p-20"
        }
      >
        <h2 className={"text-xl font-semibold"}>Request a Document</h2>

        <select
          {...register("document", {
            required: true,
          })}
          className={"h-10 w-full bg-white px-3 text-black"}
        >
          <option value="barangay_clearance">Barangay Clearance</option>
          <option value="police_clearance">Police Clearance</option>
          <option value="barangay_id">Barangay ID</option>
        </select>
        <input
          {...register("email", {
            required: true,
          })}
          type={"text"}
          className={"h-10 w-full px-3 text-black"}
          placeholder={"type email here..."}
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

export default ArchivePage;
