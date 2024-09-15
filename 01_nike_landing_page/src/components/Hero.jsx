import flipcart from '../assets/flipkart.png';
import amazon from '../assets/amazon.png';
import heroImage from '../assets/hero-image.png';
function Hero() {
  return (
    <>
        <div className='px-28 py-8 flex flex-row justify-between overflow-hidden'>
            <div className=''>
                <h1 className='text-[90px] tracking-normal leading-[78px] mb-8 font-extrabold'>YOUR FEET DESERVE <br /> THE BEST</h1>
                <p className='text-slate-500 mb-6 w-[400px] font-semibold'>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className='mb-6'>
                    <button className='text-white border-[1px] border-red-600 bg-red-600 px-3 py-1 hover:bg-red-700'>Shop Now</button>
                    <button className='border-[1px] text-slate-500 font-semibold border-black px-3 py-1 ml-8 hover:bg-red-600 hover:text-white hover:border-none hover:font-normal'>Category</button>
                </div>

                <p className='text-slate-400 mb-4'>Also Available on</p>
                <div className='flex flex-row gap-4'>
                    <img src={flipcart} alt="flipcart logo" className='w-[25px] h-[25px] cursor-pointer'/>
                    <img src={amazon} alt="amazon logo" className='w-[25px] h-[25px] cursor-pointer'/>
                </div>
            </div>
            
            <img src={heroImage} className='h-[480px] mt-16 mb-12' alt="hero image" />
        </div>
    </>
  )
}

export default Hero