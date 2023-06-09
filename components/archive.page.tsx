import React, { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { pocketBase } from "@/utils";
import {
  DocumentRequestsDocumentTypeOptions,
  DocumentRequestsRecord,
} from "@/types";
import { useEffectOnce } from "usehooks-ts";
import Image from "next/image";

interface Input {
  email: string;
  document: DocumentRequestsDocumentTypeOptions;
}

const ArchivePage: FC = () => {
  const { register, handleSubmit, setValue, watch } =
    useForm<Input>();
  const [preview, setPreview] = useState<string>("/img11.png");

  useEffectOnce(() => {
    setValue("email", pocketBase.authStore.model?.email);
  });
  const handleArchiveSubmit: SubmitHandler<Input> = async ({
    email,
    document,
  }) => {
    try {
      if (!pocketBase.authStore.model) {
        return toast.error("You must be logged in to request a document");
      }

      const data: DocumentRequestsRecord = {
        user: pocketBase.authStore.model?.id,
        document_type: document,
        email,
        active: true,
      };
      await pocketBase.collection("document_requests").create(data);

      toast.success("Document requested successfully!");
    } catch (err: any) {
      toast.error(err.data.message);
    }
  };

  useEffect(() => {
    const subscription = watch((value) => {
      switch (value.document) {
        case DocumentRequestsDocumentTypeOptions.barangay_id:
          setPreview("/img12.jpg");
          break;
        case DocumentRequestsDocumentTypeOptions.police_clearance:
          setPreview("/img13.jpg");
          break;
        case DocumentRequestsDocumentTypeOptions.barangay_clearance:
          setPreview("/img11.png");
          break;
        case DocumentRequestsDocumentTypeOptions.potsal_id:
          setPreview("/img15.png");
          break;
      }
    });

    return () => subscription.unsubscribe();
  }, [watch]);

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
          "mx-52 mt-12 flex h-[850px] flex-row items-center rounded-2xl bg-gray-100"
        }
      >
        <div className={"flex flex-col justify-center"}>
          <h2 className={"pt-8 text-center text-4xl font-medium text-black"}>
            Request a Document
          </h2>

          <div className={"ml-56 pt-8"}>
            <select
              {...register("document", {
                required: true,
              })}
              className={"mt-6 h-14 w-5/6 bg-white px-8 text-xl text-black"}
            >
              <option
                value={DocumentRequestsDocumentTypeOptions.barangay_clearance}
              >
                Barangay Clearance
              </option>
              <option
                value={DocumentRequestsDocumentTypeOptions.police_clearance}
              >
                Police Clearance
              </option>
              <option value={DocumentRequestsDocumentTypeOptions.barangay_id}>
                Barangay ID
              </option>
              <option value={DocumentRequestsDocumentTypeOptions.potsal_id}>
                Postal ID
              </option>
            </select>
          </div>
          <div className={"ml-56 pt-64"}>
            <input
              readOnly={true}
              {...register("email", {
                required: true,
              })}
              type={"text"}
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
        <Image
          src={preview}
          className={""}
          alt={"image"}
          width={400}
          height={400}
        />
      </div>
    </form>
  );
};

export default ArchivePage;
