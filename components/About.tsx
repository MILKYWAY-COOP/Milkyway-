import FadeInWhenVisible from '@/utils/fadeInWhenVisible';
import TopRatedIcon from '@/assets/topRated';
import SatisfactionIcon from '@/assets/satisfaction';
import DiscountIcon from '@/assets/discount';
import DownloadIcon from '@/assets/download';

const data = [
  {
    text: 'Top Rated',
    icon: TopRatedIcon,
  },
  {
    text: '100% Satisfaction',
    icon: SatisfactionIcon,
  },
  {
    text: 'Best Price & Quality',
    icon: DiscountIcon,
  },
];

export default function About() {
  return (
    <div className="w-full h-full flex gap-[60px] align-center justify-center">
      <div className="w-[50%] pt-[40px]">
        <h1 className="text-white text-[44px] mb-[24px] font-comfota">
          About Us
        </h1>
        <span className="text-greyB font-comfota">
          We are software development company solely focused on creating
          cutting-edge software solutions, we are is driven by a profound
          passion and motivation for technological innovation. We are committed
          to prioritizing efficient project delivery, ensuring that each project
          is completed within the agreed-upon budget constraints. Our goal is to
          set new standards in software development, by consistently delivering
          exceptional and timely solutions that meet and exceed our
          clients&apos; expectations. Our approach combines a blend of
          expertise, innovation, and a deep understanding of the latest
          technological trends to deliver unparalleled value.{' '}
        </span>
        <div className="flex gap-[32px] mt-[32px]">
          {data.map((item, index) => (
            <FadeInWhenVisible key={index}>
              <div className="flex flex-col gap-[12px] items-center">
                <item.icon width={24} height={24} />
                <span className="text-white text-[20px] font-comfota">
                  {item.text}
                </span>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
        <h1 className="text-[24px] text-white mt-[44px]">
          Stephen Muchendu - Founder
        </h1>
        <div className="mt-[40px] flex gap-[20px]">
          <button className="border-[1px] rounded-[24px] border-contrast1 px-[24px] py-[12px] text-white text-[18px]">
            Contact Us
          </button>
          <button className="border-[1px] rounded-[24px] border-contrast1 px-[24px] py-[12px] text-white text-[18px] flex gap-[10px]">
            <DownloadIcon width={24} height={24} />
            Download CV
          </button>
        </div>
      </div>
      <div className="">
        <video
          autoPlay
          loop
          muted
          className="w-[555px] aspect-square"
          src="/blackhol.mp4"
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
