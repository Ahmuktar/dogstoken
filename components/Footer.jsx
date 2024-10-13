"use client";

import Link from "next/link";
import React from "react";
import { Home, Trophy, Users, CheckSquare } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="py-4 bg-opacity-50 backdrop-blur-lg">
      <nav className="grid w-full grid-cols-3 gap-2">
        <Link
          href="/"
          className={`flex flex-col justify-center items-center rounded-md ${
            pathname === "/" ? "text-white" : "text-stone-400"
          }`}
        >
          <Home size={24} />
          <span>Home</span>
        </Link>
        <Link
          href="/leaderboard"
          className={`flex flex-col justify-center items-center rounded-md ${
            pathname === "/leaderboard" ? "text-white" : "text-stone-400"
          }`}
        >
          <Trophy size={24} />
          <span>Leaderboard</span>
        </Link>
        <Link
          href="/friends"
          className={`flex flex-col justify-center items-center rounded-md ${
            pathname === "/friends" ? "text-white" : "text-stone-400"
          }`}
        >
          <Users size={24} />
          <span>Friends</span>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
