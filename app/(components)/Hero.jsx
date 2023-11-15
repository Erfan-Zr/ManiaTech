import Image from "next/image";
import React from "react";
import hero from "@/public/images/hero-4.jpg";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={hero}
        alt="hero"
        width={"100%"}
        height={"auto"}
        className="z-[-1] relative "
      />
      <div className="absolute top-1/3  transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1 className="text-5xl font-semibold text-[#007a9f]">
          {" "}
          مانیاتک، ادغام تکنولوژی و هنر
        </h1>
        <p className="mt-9 text-2xl text-[#007a9f]">
          کیفیت را با قیمتی متفاوت تجربه کنید
        </p>
        {/* <h2> کیفیت بالا با قیمت بهتر </h2>
      <p>کیفیت را با قیمتی متفاوت تجربه کنید</p> */}
      </div>
    </div>
  );
};

export default Hero;
