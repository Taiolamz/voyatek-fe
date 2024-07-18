"use client";

import Image from "next/image";
import React from "react";
import { Avatar, DropIcon, Logo, SearchIcon } from "../../public/assets/icons";
import { Input } from "./ui/input";
import { navbarDetails } from "@/utilities/utils";
import Link from "next/link";

const DashboardNavbar = () => {
  const [search, setSearch] = React.useState("");
  return (
    <div className="bg-white p-4 px-5 pr-7 w-screen flex justify-between items-center">
      <div className="pl-5 flex gap-5 items-center ">
        <Image src={Logo} alt="logo" />
        <div className="relative grid place-items-center">
          <Input
            id="search"
            name="search"
            value={search}
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-[629px] border-0 bg-[#F0F2F5] rounded-[6px] pl-14 placeholder:text-custom-placeholder font-light text-sm"
          />
          <Image
            src={SearchIcon}
            alt="search icon"
            className="absolute left-0 ml-5"
          />
        </div>
      </div>
      <div>
        <div className="flex gap-10">
          {navbarDetails.map((chi, idx) => {
            const { label, icon } = chi;
            return (
              <Link href="/" className="flex flex-col items-center" key={idx}>
                <Image src={icon} alt={label} />
                <p className="text-xs font-light text-custom-primary-70">
                  {label}
                </p>
              </Link>
            );
          })}
          <div className="flex gap-3 items-center cursor-pointer">
            <Image src={Avatar} alt="avatar" />
            <Image src={DropIcon} alt="drop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
