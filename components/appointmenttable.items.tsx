import React, { FC, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AppointmentsResponse, UsersResponse } from "@/types";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";

type TExpand = {
  user: UsersResponse;
};

interface Props {
  data: AppointmentsResponse<TExpand>;
}

const AppointmentTableItems: FC<Props> = ({ data }) => {
  const appointment = data.appoint_type.split("_").join(" ");
  const [showDelete, setShowDelete] = useState<boolean>(false);

  const deleteRequest = async () => {
    try {
      await pocketBase.collection("appointments").delete(data.id);

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
      <tr>
        <td className={"border-2 border-black text-center capitalize"}>
          {appointment}
        </td>
        <td className={"border-2 border-black text-center"}>
          {data.expand?.user.name}
        </td>
        <td className={"border-2 border-black text-center"}>
          {data.expand?.user.email}
        </td>
        <td className={"border-2 border-black text-center"}>
          <XMarkIcon
            onClick={() => setShowDelete(true)}
            className={"mx-auto h-6 w-6 cursor-pointer text-red-500"}
          />
        </td>
      </tr>
    </>
  );
};

export default AppointmentTableItems;
