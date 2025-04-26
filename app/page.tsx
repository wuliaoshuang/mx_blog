import Nav from "@/components/nav";
import Content from "@/components/content";
import Module from "@/components/moduel";
import NextPage from "@/components/nextpage";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-between">
      <Nav />
      <div className="flex max-md:flex-col-reverse w-full h-[100vh] max-md:h-auto bg-[#FFD2D2]">
        <Content />
        <Module />
      </div>
      <div className="h-[100vh]">XXXXX</div>
      <NextPage />
    </main>
  );
}
