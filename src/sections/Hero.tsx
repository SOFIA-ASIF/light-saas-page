import ArrowRight from "@/assets/arrow-right.svg";
import cogImage from '@/assets/cog.png'
import Image from "next/image";
export const Hero = () => {
  return (
    <section>
      <div className="container">
        <div className="text-sm inline-flex bordeer-[#222]/10 px-3 py-1 rounded-lg tracking-tight">
          Version 2.0 is here
        </div>
        <h1 className="text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text mt-6">Path way to productivity</h1>
        <p className="text-xl text-[##010D3E] tracking-tight mt-6">Celebrate the joy of accomplishment with an app designed to train your progress, motivate your efforts, and celebrate your success</p>
      <div className="flex gap-1 items-center mt-[30px]">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1"><span>Learn more</span><ArrowRight className="h-5 w-5" /></button>
      </div>
      <div>
        <Image src={cogImage} alt="cogImage" />
      </div>
      </div>
    </section>
  );
};
// 37 minutes
