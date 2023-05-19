"use client"

import { useState } from "react";

const InteractiveForm = () => {

    const [uniqueId, setUniqueId] = useState<string>("");

    return (
        <div className="xl:w-2/5 lg:w-2/3 md:w-4/5 w-full flex flex-col items-center justify-center mt-10">
            <button className="btn btn-accent w-full font-quicksand text-xl">
                Generate A Unique ID
            </button>
        </div>
    )
};

export default InteractiveForm;
