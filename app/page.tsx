import HeroImage from "@/assets/my-id-hero.png";
import { InteractiveForm } from "@/components";
import Image from "next/image";

const Home = () => {
    return (
        <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center w-full p-5">
            <Image
                src={HeroImage.src}
                width={400}
                height={400}
                alt=""
                className="w-96 h-96 object-contain"
            />

            <h1 className="mt-3 text-4xl text-black font-quicksand font-bold tracking-widest text-center lg:w-2/3 md:w-4/5 w-full">
                The Online Unique ID Generator
            </h1>

            <InteractiveForm />
        </main>
    );
};

export default Home;
