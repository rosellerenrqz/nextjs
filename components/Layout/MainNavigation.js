import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const MainNavigation = () => {
  const router = useRouter();

  return (
    <>
      <header className="mb-10 flex w-full justify-between border-b border-gray-500 bg-[#272829] px-[10%] py-4 text-black">
        <div>
          <div className="list-sty rounded-md px-3 py-1 text-lg font-semibold text-gray-300 hover:bg-[#EEEDED] hover:text-gray-700">
            Meetup Logo
          </div>
        </div>
        <nav>
          <div>
            <Link
              href="/"
              className={
                router.pathname === "/"
                  ? "border-b-2 border-blue-400 px-6 py-6 text-lg font-semibold text-blue-400"
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
                ? "border-b-2 border-blue-400 px-6 py-6 text-lg font-semibold text-blue-400"
                : "rounded-md px-3 py-1 text-lg font-semibold text-gray-300 hover:bg-[#EEEDED] hover:text-gray-700"
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
