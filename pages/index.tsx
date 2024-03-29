import Background from '@/assets/milkyway';
import Nav from '@/components/Nav';
import "./globals.css";

export default function Page() {
  return (
    <main
      className={`w-full flex min-h-screen flex-col items-start relative px-[80px] py-[40px]`}
    >
      <Background />
      <div className="w-full h-full bg-gradient-to-r from-[#04091eb3] to-[#04091eb3] absolute opacity-[0.1] left-0 top-0" />
      <Nav />
    </main>
  );
}
