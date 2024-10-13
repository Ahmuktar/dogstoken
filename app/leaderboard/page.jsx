import LeaderboardCard from "@/components/LeaderboardCard";
import Image from "next/image";
import React from "react";

const Leaderboard = () => {
  const fakeData = [
    {
      name: "John Doe",
      score: 100,
      image_url: "https://picsum.photos/200/300",
    },
    { name: "Jane Doe", score: 90, image_url: "https://picsum.photos/200/300" },
    { name: "Bob Smith", score: 80, image_url: "https://random" },
    { name: "Jane Doe", score: 70, image_url: "https://picsum.photos/200/300" },
    { name: "Bob Smith", score: 60, image_url: "https://random" },
    { name: "Jane Doe", score: 50, image_url: "https://picsum.photos/200/300" },
    { name: "Bob Smith", score: 40, image_url: "https://random" },
    { name: "Jane Doe", score: 30, image_url: "https://picsum.photos/200/300" },
    { name: "Bob Smith", score: 10, image_url: "https://random" },
  ];

  return (
    <div>
      <h1 className="text-center text-2xl mb-5 font-bold">
        Telegram Wall of Fame
      </h1>
      <div>
        <div className="px-4 mx-4 py-2 mb-5 rounded-xl flex justify-between bg-neutral-400/30 items-center">
          <div className="flex items-center gap-3">
            <Image src="/dogs.png" width={40} height={40} />
            <div>
              <h1 className="font-bold text-lg">You</h1>
              <p className="text-neutral-400 text-base font-medium">
                4,421 DOGS
              </p>
            </div>
          </div>
          <p className="font-semibold">#123</p>
        </div>
        {fakeData.map((user) => (
          <LeaderboardCard user={user} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
