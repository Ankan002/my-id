"use client";

import { fetchUUID } from "@/helpers";
import { useQuery } from "react-query";
import { UUIDElement } from "@/components/elements";
import { useEffect } from "react";

const InteractiveForm = () => {
    const {
        data: uuidData,
        refetch: getUUID,
        isLoading,
        error: uuidError,
    } = useQuery("getUUID", fetchUUID, {
        enabled: false,
    });

    const onGenerateUUIDClick = () => {
        getUUID();
    };

    useEffect(() => {
        if (uuidError && window !== undefined) {
            if (uuidError instanceof Error) {
                console.log(uuidError.message);
            } else {
                console.log(uuidError);
            }
        }
    }, [uuidError]);

    return (
        <div className="xl:w-2/5 lg:w-2/3 md:w-4/5 w-full flex flex-col items-center justify-center mt-10">
            <button
                className="btn btn-accent w-full font-quicksand text-xl"
                onClick={onGenerateUUIDClick}
            >
                Generate A Unique ID
            </button>

            {isLoading && (
                <progress className="w-full mt-5 progress progress-accent" />
            )}

            {uuidData?.data?.id && <UUIDElement id={uuidData.data.id} />}
        </div>
    );
};

export default InteractiveForm;
