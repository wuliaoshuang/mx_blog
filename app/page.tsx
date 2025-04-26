import Nav from "@/components/nav";
import Content from "@/components/content";
import Module from "@/components/moduel";
import NextPage from "@/components/nextpage";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between">
      <Nav />
      <div className="flex w-full h-[100vh] bg-[#FFD2D2]">
        <Content />
        <Module />
      </div>
      <NextPage />
    </main>
  );
}
