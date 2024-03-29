import Nav from '@/components/Nav';
import './globals.css';

export default function Page() {
  return (
    <main className={`w-full flex flex-col items-start relative`}>
      <div className="w-full flex min-h-screen flex-col items-start relative bg-gradient-overlay px-[80px]">
        <Nav />
        <div>
          <p className="text-white">
            Tech is our business and business is good
          </p>
        </div>
      </div>
    </main>
  );
}
