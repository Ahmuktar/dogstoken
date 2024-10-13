import Image from "next/image";
import React from "react";

const LeaderboardCard = ({ user }) => {
  return (
    <div className="px-4 py-2 rounded-xl flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Image src="/dogs.png" width={40} height={40} />
        <div>
          <h1 className="font-medium text-base">{user.name}</h1>
          <p className="text-neutral-400 text-base font-medium">
            {user.score} DOGS
          </p>
        </div>
      </div>
      <p className="font-semibold text-lg">#123</p>
    </div>
  );
};

export default LeaderboardCard;
