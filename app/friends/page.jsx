import Image from "next/image";
import React from "react";

const Friends = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-3">
        <p className="text-3xl text-center font-extrabold">
          Invite friends <br />
          and get more DOGS
        </p>
        <Image src="/dogs.png" width={150} height={150} />
      </div>
      <div className="space-y-4 h-full">
        <h2 className="text-lg font-bold mb-4">1 friend</h2>
        <div className="flex justify-between items-center w-full">
          <div className="py-2 rounded-xl w-full flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src="/dogs.png" width={40} height={40} />
              <h1 className="font-bold text-lg">dayyy662</h1>
            </div>
            <p className="font-semibold">+43 DOGS</p>
          </div>
        </div>
      </div>
      <button className="bg-white w-full mt-5 font-semibold text-black px-4 py-4 rounded-xl">
        Invite friends
      </button>
    </div>
  );
};

export default Friends;
