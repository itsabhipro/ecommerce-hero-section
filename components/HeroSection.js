"use client";
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="hero h-screen overflow-hidden">
      <div className="z-10 pt-[10%] px-10 md:pt-[15%]">
        <h1 className='text-4xl md:text-6xl text-white font-bold'>Welcome to Our 
        <br/>Online Store</h1>
        <p className='text-base text-slate-400 font-bold mt-4'>Discover the best deals on our wide range of products.</p>
        <button className="btn-primary mt-4">Shop Now</button>
      </div>
      <div className='absolute top-0 left-0 -z-10 w-full'>
        <Image
          src="/images/bghero.jpg" // Replace with the path to your hero image
          alt="Hero Image"
          width={window.screen.width}
          height={window.screen.height}    
          className='w-full'
          objectFit='contain'
        />
      </div>
    </section>
  );
};

export default HeroSection;
