import React from "react";
import Image from "next/image";
import womanProfile from 'Woman-on-yellow.jpg'
import nigeriaFlag from "Nigeria.png"


const userProfile = () => {
  return (
    <>
      <div className="flex justify-between align-bottom">
        <div className="flex">
            <div className="w-12 h-12 rounded-full relative">
                <Image src={womanProfile} alt="Woman on vacation" className="w-full h-full object-cover object-center"/>
                <Image src={nigeriaFlag} alt="Nigeria flag" className="absolute bottom-0 right-0"/>
            </div>
            <div className="flex flex-col">
                <h4 className="text-[#232323]">Bianca Tobechukwu Adeolu</h4>
                <p className="text-[#878787]">Tourist, Food critic</p>
            </div>
        </div>

      </div>
    </>
  );
};

export default userProfile;
