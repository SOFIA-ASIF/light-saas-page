import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'

import Image from 'next/image';
export const ProductShowcase = () => {
  return(
   <section className='bg-gradient-to-b from-[#ffffff] to-[#d2dcff] py-24 overflow-x-clip'>
    <div className="container">
      <div className='max-w-[540px] mx-auto'>
      <div className='flex justify-center'>
      <div className='text-sm inline-flex bordeer-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>Boost your productivity</div>

      </div>
      <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] mt-5 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001e80] text-transparent bg-clip-text'>A more effective way to track progress</h2>
      <p className='text-center text-[22px] leading-[30px] tracking-tight mt-5 text-[#010d3e'>
        Effortlessly turn your ideas onto fully functional, responsive, Saas Landing website in just minutes with this templates
      </p>
      </div>
      <div className='relative'>
      <Image src={productImage} alt='Product Image' className='mt-10'/>
      <Image src={pyramidImage} alt='Pyramid Image' height={262} width={262} className='hidden md:block absolute -right-36 -top-32'/>
      <Image src={tubeImage} alt='Tube Image' height={248} className=' hidden md:block absolute bottom-24 -left-36'/>

    </div>
    </div>
    </section>
  )
};
