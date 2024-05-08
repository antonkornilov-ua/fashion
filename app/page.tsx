import { HeroSection } from "./../components/index";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full max-w-[1440px] flex flex-col justify-center mx-auto">
    <HeroSection/>
    </main>
  );
}
