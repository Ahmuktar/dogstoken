"use client";
import Image from "next/image";
import {
  Check,
  Twitter,
  UsersRound,
  TriangleAlert,
  Navigation,
} from "lucide-react";
import Footer from "@/components/Footer";

export default function HomePage({ addCoin }) {
  return (
    <div className="flex justify-center">
      <div className="w-full text-white  flex flex-col">
        <div className="flex flex-col items-center gap-3">
          <Image src="/dogs.png" width={150} height={150} />
          <p className="text-3xl font-extrabold">4,451 DOGS</p>
        </div>
        <div className="bg-neutral-100/10 my-6 p-4 space-y-2 rounded-xl">
          <h1 className="text-lg font-semibold">DOGS COMMUNITY</h1>
          <p className="text-base">Home for Telegram OGs</p>
          <button className="bg-white font-semibold text-black px-4 py-1.5 rounded-full">
            Join
          </button>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold mb-4">Tasks</h2>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-neutral-300/20 p-2 rounded-full h-fit w-fit">
                <Check />
              </div>
              <div>
                <h1 className="text-base font-bold">Make a Ton Transaction</h1>
                <p className="text-neutral-400 text-base font-medium">
                  +3000 DOGS
                </p>
              </div>
            </div>
            <div>
              <button className="font-semibold bg-neutral-300/20 text-white px-4 py-2 rounded-full">
                Start
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-neutral-300/20 p-2 rounded-full h-fit w-fit">
                <Navigation />
              </div>
              <div>
                <h1 className="text-base font-bold">
                  Subscribe to DOGS channel
                </h1>
                <p className="text-neutral-400 text-base font-medium">
                  +100 DOGS
                </p>
              </div>
            </div>
            <div>
              <button className="font-semibold bg-neutral-300/20 text-white px-4 py-2 rounded-full">
                Start
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-neutral-300/20 p-2 rounded-full h-fit w-fit">
                <Twitter />
              </div>
              <div>
                <h1 className="text-base font-bold">Subscribe to Dogs X.com</h1>
                <p className="text-neutral-400 text-base font-medium">
                  +1000 DOGS
                </p>
              </div>
            </div>
            <div>
              <button className="font-semibold bg-neutral-300/20 text-white px-4 py-2 rounded-full">
                Start
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-neutral-300/20 p-2 rounded-full h-fit w-fit">
                <TriangleAlert />
              </div>
              <div>
                <h1 className="text-base font-bold">
                  Subscribe to Notcoin channel
                </h1>
                <p className="text-neutral-400 text-base font-medium">
                  +50 DOGS
                </p>
              </div>
            </div>
            <div>
              <button className="font-semibold bg-neutral-300/20 text-white px-4 py-2 rounded-full">
                Start
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-4 items-center">
              <div className="bg-neutral-300/20 p-2 rounded-full h-fit w-fit">
                <UsersRound />
              </div>
              <div>
                <h1 className="text-base font-bold">
                  Invite 5 friends to DOGS
                </h1>
                <p className="text-neutral-400 text-base font-medium">
                  +20000 DOGS
                </p>
              </div>
            </div>
            <div>
              <button className="font-medium bg-white text-black px-4 py-2 rounded-full">
                Check
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
