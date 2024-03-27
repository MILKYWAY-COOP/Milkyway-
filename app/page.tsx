import Background from '@/assets/milkyway';

export default function Home() {
  return (
    <main
      className={`w-full flex min-h-screen flex-col items-center justify-between relative`}
    >
      <Background />
      <div className="w-full h-full bg-gradient-to-r from-[#04091eb3] to-[#04091eb3] absolute opacity-[0.1] left-0 top-0" />
    </main>
  );
}
