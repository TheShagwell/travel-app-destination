import React from "react";
import Image from "next/image";
import womanProfile from "/public/woman.jpg";
import nigeriaFlag from "/public/nigeria.png";
import Countriesflag from "@/components/Countriesflag";
// import Welcome from "@/components/shared/Welcome";

const userProfile = () => {
  const countries = [
    { flag: "/public/nigeria.png", name: "United States" },
    { flag: "/public/nigeria.png", name: "Canada" },
  ];
  return (
    <>
      <div className="flex justify-between align-bottom">
        <div className="flex gap-2">
          <div className="w-12 h-12 rounded-full relative">
            <Image
              src={womanProfile}
              alt="Woman on vacation"
              className="w-full h-full rounded-full object-cover object-center"
              width={48}
              height={48}
            />
            <Image
              src={nigeriaFlag}
              alt="Nigeria flag"
              className="absolute bottom-0 right-0"
           width={16}
              height={16}
            />
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#232323] font-medium">Bianca Tobechukwu Adeolu</h4>
            <p className="text-[#878787]">Tourist, Food critic</p>
          </div>
        </div>

        <div className="flex">
          <p className="text-[#878787]">Countries visited</p>
          <div className="flex gap-4">
            {countries.map((country) => (
              <Countriesflag
                key={country.name}
                flag={country.flag}
                name={country.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default userProfile;
