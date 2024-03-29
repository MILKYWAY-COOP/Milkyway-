export default function Nav() {
  return (
    <div className="w-full flex flex-col ">
      <div className="border-b-[1px] py-[20px] flex gap-4">
        <p className="text-white pr-4 border-r-[1px]">
          Need help ? Talk to an expert
        </p>
        <p className="text-white">+254 799 710693</p>
      </div>
      <div className="w-full flex flex-row justify-between py-[30px]">
        <h2 className="text-white ">MilkyWay Cooperation</h2>
        <ul className="flex gap-5">
          <li className="text-white">Cases</li>
          <li className="text-white">Blog</li>
        </ul>
      </div>
    </div>
  );
}
