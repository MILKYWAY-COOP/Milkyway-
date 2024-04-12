import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/index';
import Logo from '@/assets/logo';
import Github from '@/assets/github';
import Linkedin from '@/assets/linkedin';
import Stackoverflow from '@/assets/stackoverflow';
import Upwork from '@/assets/upwork';
import Link from 'next/link';

export default function Footer() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { bg, screen } = context;

  const date = new Date().getFullYear();

  return (
    <div className="w-[100%] h-[500px] md:h-[500px] relative pt-[80px] overflow-hidden md:rounded-[40px] ">
      <div
        className={`${bg === 'custom-bg' ? 'bg-custom-bg' : ''} ${
          bg === 'custom-bg2' ? 'bg-custom-bg2' : ''
        } w-full h-full bg-cover bg-center absolute inset-0 flex align-start md:flex-row flex-col`}
      >
        <div className="flex-1 w-full h-full flex flex-col md:gap-[24px] align-center p-[10px] md:p-[40px]">
          <Logo width={100} height={90} />
          <p className="text-grey text-[16px] font-comfota">
            © {date} MilkyWay. All rights reserved.
          </p>
        </div>
        <div className="flex-1 w-full h-full flex flex-col gap-[7px] md:gap-[24px] align-center p-[10px] md:p-[40px]">
          <h2 className="text-grey text-[18px] font-comfota mb-[5text-[12px] md:px] md:mb-[24px]">
            Menu
          </h2>
          <span className="text-white text-[12px] md:text-[16px] font-comfota">
            Services
          </span>
          <span className="text-white text-[12px] md:text-[16px] font-comfota">
            Work
          </span>
          <span className="text-white text-[12px] md:text-[16px] font-comfota">
            Blog
          </span>
          <span className="text-white text-[12px] md:text-[16px] font-comfota">
            Giving Back
          </span>
          <span className="text-white text-[16px] font-comfota">
            Contact us
          </span>
        </div>
        <div className="flex-1 w-full h-full flex md:flex-col gap-[14px] md:gap-[24px] align-center p-[7px]  md:p-[40px]">
          <Link href="/">
            <Upwork width={screen === 'sm' ? 30 : 50} height={50} />
          </Link>
          <Link href="/">
            <Github width={screen === 'sm' ? 30 : 50} height={50} />
          </Link>
          <Link href="/">
            <Linkedin width={screen === 'sm' ? 30 : 50} height={50} />
          </Link>
          <Link href="/">
            <Stackoverflow width={screen === 'sm' ? 30 : 50} height={50} />
          </Link>
        </div>
      </div>
    </div>
  );
}
