import Image from "next/image";
import HOUSE_IMAGE from "@/public/assets/house.png";
import STAR_IMAGE from "@/public/assets/star.png";
import React from "react";
import Pill from "./Pill";

const Card: React.FC = () => {
  return (
    <div className="h-[422px] w-[378.56px] cursor-pointer hover:shadow-md hover:rounded-lg">
      <Image
        className="rounded-lg"
        src={HOUSE_IMAGE}
        width={378.56}
        height={299.37}
        alt="house image"
      />

      <div className="p-2 flex gap-2 mt-2">
        <Pill title="Top Villa" />
        <Pill title="Self CheckIn" />
        <Pill title="Free Reschedule" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-[22px]">
            Villa Arrecife Beach House
          </h3>

          {/* FIXED HERE */}
          <p className="font-medium text-[17px] text-[#929292]">
            Sideman, Bali, Indonesia
          </p>
        </div>

        <div className="flex items-center">
          {/* FIXED: width & height added */}
          <Image src={STAR_IMAGE} width={18} height={18} alt="star" />
          <p className="font-medium text-[17px] ml-2">4.76</p>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div className="grid grid-cols-3 border w-[156px] rounded-full px-2 py-1">
          {/* … your SVGs remain unchanged */}
        </div>
      </div>
    </div>
  );
};

export default Card;
