import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <>
      <header className="mb-10 flex w-full justify-between border-b border-gray-500 bg-[#272829] py-4 text-black md:px-[5%] lg:px-[10%]">
        <div>
          <div className="list-sty rounded-md px-3 py-1 text-2xl font-bold text-[--light-color]">
            Meetups
          </div>
        </div>
        <nav>
          <div>
            <Link
              href="/"
              className={
                router.pathname === "/"
                  ? "border-b-2 border-blue-400 px-6 py-8 text-sm font-semibold text-blue-400 md:py-7 md:text-lg lg:py-7 lg:text-lg"
                  : "rounded-md px-3 py-1 text-lg font-semibold text-gray-300 hover:bg-[#EEEDED] hover:text-gray-700"
              }
            >
              Home
            </Link>
          </div>
        </nav>
        <div>
          <Link
            href="/new-meetup"
            className={
              router.pathname === "/new-meetup"
                ? "border-b-2 border-blue-400 px-6 py-8 text-sm font-semibold text-blue-400 md:py-7 md:text-lg lg:py-7 lg:text-lg"
                : "rounded-md px-3 py-1 text-sm font-semibold text-gray-300 hover:bg-[#EEEDED] hover:text-gray-700 md:text-lg lg:text-lg"
            }
          >
            Add New Meetup
          </Link>
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
