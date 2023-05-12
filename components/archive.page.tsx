import React, {FC, ReactNode, useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {pocketBase} from "@/utils";
import {
    DocumentRequestsDocumentTypeOptions,
    DocumentRequestsRecord,
} from "@/types";
import {useEffectOnce} from "usehooks-ts";

import Image from "next/image";
import {sample} from "rxjs";


interface Input {
    email: string;
    document: DocumentRequestsDocumentTypeOptions;
}

const ArchivePage: FC = () => {
    const {register, handleSubmit, setValue, getValues} = useForm<Input>();

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
            };
            await pocketBase.collection("document_requests").create(data);

            toast.success("Document requested successfully!");
        } catch (err: any) {
            toast.error(err.data.message);
        }
    };
    const [sampleImage, setSampleImage] = useState("/pic11")
    const handleOnChange = () => {
        switch (getValues("document")) {
            case DocumentRequestsDocumentTypeOptions.barangay_clearance:
                setSampleImage("/pic11")
                break;
            case DocumentRequestsDocumentTypeOptions.police_clearance:
                setSampleImage("/pic13")
                break;
            case DocumentRequestsDocumentTypeOptions.barangay_id:
                setSampleImage("/pic12")
                break;
            case DocumentRequestsDocumentTypeOptions.potsal_id:
                setSampleImage("/pic14")
                break;
        }
    }

    return (
        <form onSubmit={handleSubmit(handleArchiveSubmit)}>
            <h1
                className={
                    "px-4 py-12 pt-3.5 text-right text-5xl font-bold text-black "
                }
            >
                DOCUMENTS
            </h1>
            <div className={"flex flex-row justify-between"}>
                <div
                    className={
                        " mx-auto mt-12 h-[800px] w-2/5 flex flex-col justify-center rounded-2xl bg-[#D9D9D9]"
                    }
                >
                    <h2 className={"pt-8 text-center text-4xl font-bold text-black"}>
                        REQUEST A DOCUMENT
                    </h2>

                    <div className={"ml-20 pt-8 drop-shadow-lg"}>
                        <select
                            {...register("document", {
                                required: true,
                            })}
                            className={"mt-6 h-14 w-5/6 bg-white px-8 text-xl text-black"}
                            onChange={() => handleOnChange()}


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
                    <div className={"ml-20 pt-32 drop-shadow-lg"}>
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
                    <div className={"mx-auto pt-28"}>
                        <button
                            type={"submit"}
                            className={"bg-green-500 px-14 py-3 font-semibold text-white"}
                        >
                            Confirm
                        </button>
                    </div>
                </div>
                <img src={sampleImage} alt={"sample doc"} width={208} height={208} className={"mx-auto"}/>
            </div>
        </form>
    );
};

export default ArchivePage;
