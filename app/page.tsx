import Grid from "@/components/Grid";
import { Hero } from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          {name: "Home", link: "/", icon: <FaHome />}
        ]} />
        <Hero/>
        <Grid/>
        <RecentProjects/>
      </div>
    </main>
  );
}
