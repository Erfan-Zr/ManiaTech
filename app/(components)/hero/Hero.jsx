import Image from "next/image";
import React from "react";
import hero from "@/public/images/hero-4.jpg";
import hero3 from "@/public/images/hero-3.jpg";
import "./hero.css";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src={hero}
        alt="hero"
        width={"100%"}
        height={"auto"}
        className="z-[-1] relative max-xl:hidden scaling-image"
      />
      <Image
        src={hero3}
        alt="hero"
        width={"100%"}
        height={"auto"}
        className="z-[-1] relative max-xl:block hidden"
      />
      <div
        className={
          "absolute top-1/3  transform -translate-x-1/2 -translate-y-1/2 z-10 max-xl:-translate-x-1 max-xl:top-1/2 "
        }
      >
        <h1 className="xl:text-5xl max-xl:text-2xl font-semibold text-[#007a9f] max-md:text-lg slideRight">
          {" "}
          مانیاتک، ادغام تکنولوژی و هنر
        </h1>
        <p className="mt-9  text-[#007a9f] xl:text-2xl max-xl:text-xl max-md:text-sm slideLeft">
          کیفیت را با قیمتی متفاوت تجربه کنید
        </p>
        {/* <h2> کیفیت بالا با قیمت بهتر </h2>
      <p>کیفیت را با قیمتی متفاوت تجربه کنید</p> */}
      </div>
    </div>
  );
};

export default Hero;
