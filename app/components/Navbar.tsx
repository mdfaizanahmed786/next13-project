import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="bg-blue-500 text-white h-[58px] w-full flex items-center justify-between px-10 drop-shadow-md sticky top-0 z-10">
      <Link href="/">
        <div className="font-bold text-lg">TodoApp</div>
      </Link>
      <div className="md:flex gap-5 hidden">
        <Link href="/about">
          <p className="font-semibold ">About</p>
        </Link>

        <Link href="/contact">
          <p className="font-semibold">Contact</p>
        </Link>
        <Link href="/feedback">
          <p className="font-semibold">Feedback</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
