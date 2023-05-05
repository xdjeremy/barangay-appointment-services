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
            "bg-gray-100 flex flex-col mx-52 mt-12 rounded-2xl h-[850px] justify-items-center"
        }
      >
        <h2 className={"text-black font-medium text-4xl text-center pt-8"}>Request a Document</h2>

        <div className={"ml-56 pt-8"}>
          <select
              {...register("document", {
                required: true,
              })}
              className={"h-14 w-5/6 bg-white px-8 text-black text-xl mt-6"}
          >
            <option value="barangay_clearance">Barangay Clearance</option>
            <option value="police_clearance">Police Clearance</option>
            <option value="barangay_id">Barangay ID</option>
            <option value="postal_id">Postal ID</option>
          </select>
        </div>
        <div className={"ml-56 pt-64"}>
          <input
              {...register("email", {
                required: true,
              })}
              type={"text"}
              className={"h-14 w-5/6 px-3 text-black"}
              placeholder={"type email here..."}
          />
        </div>
        <div className={"pt-28 pl-[530px]"}>
          <button
              type={"submit"}
              className={"bg-green-500 px-14 py-3 font-semibold text-white"}
          >
            Confirm
          </button>
        </div>
      </div>
    </form>
  );
};

export default ArchivePage;
