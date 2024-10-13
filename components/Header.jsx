import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-4 z-10 flex items-center my-5 gap-3">
      <Image src="/dogs.png" width={40} height={40} />
      <p className="text-md font-bold">Ahmad</p>
    </div>
  );
};

export default Header;
