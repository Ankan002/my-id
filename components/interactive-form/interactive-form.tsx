"use client"

import { fetchUUID } from "@/helpers";
import { useQuery } from "react-query";

const InteractiveForm = () => {

    const { data: uuidData, refetch: getUUID, isLoading } = useQuery("getUUID", fetchUUID, {
        enabled: false,
    });

    const onGenerateUUIDClick = async () => {
        getUUID();
    }

    return (
        <div className="xl:w-2/5 lg:w-2/3 md:w-4/5 w-full flex flex-col items-center justify-center mt-10">
            <button className="btn btn-accent w-full font-quicksand text-xl" onClick={onGenerateUUIDClick}>
                Generate A Unique ID
            </button>

            {
                isLoading && (
                    <progress className="w-full mt-5 progress progress-accent" />
                )
            }

            {
                uuidData?.data?.id && (
                    <></>
                )
            }
        </div>
    )
};

export default InteractiveForm;
