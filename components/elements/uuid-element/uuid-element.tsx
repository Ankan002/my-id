"use client";

import { useState } from "react";
import { TbCopy } from "react-icons/tb";
import { FiCheckCircle } from "react-icons/fi";

interface Props {
    id: string;
}

const UUIDElement = (props: Props) => {
    const { id } = props;

    const [copyClicked, setCopyClicked] = useState<boolean>(false);

    const onCopyClick = () => {
        if (window === undefined) return;

        setTimeout(() => {
            setCopyClicked(false);
        }, 1000);

        window.navigator.clipboard.writeText(id);
        setCopyClicked(true);
    };

    return (
        <div className="w-full p-3 border-2 border-accent rounded-lg mt-5 flex">
            <p className="flex-grow flex-nowrap font-quicksand text-lg text-black font-medium tracking-wider">
                {id}
            </p>

            <button onClick={onCopyClick}>
                {!copyClicked ? (
                    <TbCopy className="text-2xl text-accent" />
                ) : (
                    <FiCheckCircle className="text-2xl text-accent" />
                )}
            </button>
        </div>
    );
};

export default UUIDElement;
