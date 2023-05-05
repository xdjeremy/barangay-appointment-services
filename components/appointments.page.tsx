import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

interface Input {
  email: string;
  appointment: string;
}

const AppointmentsPage: FC = () => {
  const { register, handleSubmit, resetField } = useForm<Input>();

  const onAppointmentSubmit: SubmitHandler<Input> = async ({
    email,
    appointment,
  }) => {
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        body: JSON.stringify({
          email,
          appointment,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!data.success) {
        return toast.error(data.message);
      }
      toast.success("Appointment request sent!");
      resetField("appointment");
      resetField("email");
    } catch (err: any) {
      toast.error(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onAppointmentSubmit)}>
      <h1
        className={
          "px-4 py-12 pt-3.5 text-right text-5xl font-bold text-black "
        }
      >
        APPOINTMENTS
      </h1>
      <div
        className={
          "mx-52 mt-12 flex h-[850px] flex-col justify-items-center rounded-2xl bg-gray-100"
        }
      >
        <div className={"pt-8 text-center text-4xl font-medium text-black"}>
          Request an appointment
        </div>
        <div className={"text-xl text-black"}>
          <div className={"px-56 pt-14 text-3xl"}>Select Barangay Official</div>
          <div className={"ml-56"}>
            <select
              className={"text-black- mt-6 h-14 w-5/6 bg-white px-8"}
              {...register("appointment", {
                required: true,
              })}
            >
              <option value="barangay_captain">Barangay Captain</option>
              <option value="barangay_secretary">Barangay Secretary</option>
              <option value="barangay_treasurer">Barangay Treasurer</option>
              <option value="barangay_councilor">Barangay Councilor</option>
              <option value="sk_chairman">SK Chairman</option>
            </select>
          </div>
          <div className={"ml-56 pt-64"}>
            <input
              type={"text"}
              {...register("email", {
                required: true,
              })}
              className={"h-14 w-5/6 px-3 text-black"}
              placeholder={"type email here..."}
            />
          </div>
          <div className={"pl-[530px] pt-28"}>
            <button
              type={"submit"}
              className={"bg-green-500 px-14 py-3 font-semibold text-white"}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AppointmentsPage;
