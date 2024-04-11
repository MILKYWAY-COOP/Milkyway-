import Image from 'next/image';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/context/index';
import MilkySky from '@/assets/milkysky.webp';

export default function Footer() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('AppContext must be used within an Application');
  }

  const { bg } = context;

  return (
    <div className="w-[100%] h-[500px] relative pt-[80px] overflow-hidden rounded-[40px]">
      <div
        className={`${bg === 'custom-bg' ? 'bg-custom-bg' : ''} ${
          bg === 'custom-bg2' ? 'bg-custom-bg2' : ''
        } w-full h-full bg-cover bg-center absolute inset-0`}
      ></div>
    </div>
  );
}
