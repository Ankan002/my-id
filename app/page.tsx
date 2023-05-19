import HeroImage from "@/assets/my-id-hero.png";
import Image from "next/image";

const Home = () => {
    return (
        <main className="min-h-screen bg-gray-200 flex flex-col items-center justify-center w-full">
            <Image src={HeroImage.src} width={400} height={400} alt="" className="w-96 h-96 object-contain"/>
        </main>
    );
};

export default Home;
