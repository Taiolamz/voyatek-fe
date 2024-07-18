"use client";

import React, { useState } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import { FilterIcon, PlusIcon, SearchIcon } from "../../public/assets/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DialogTrigger } from "./ui/dialog";

interface Iprops {
  onCreate: () => void;
}

const DashboardTableNav = ({ onCreate }: Iprops) => {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white p-5 border-0 rounded-t-[6px] mt-6">
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="relative grid place-items-center">
            <Input
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border border-custom-primary-60 rounded-[6px] p-3 pl-10 w-[291px]  placeholder:text-custom-neutral"
            />
            <Image
              src={SearchIcon}
              alt="search"
              className=" absolute left-0 ml-3"
            />
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className=" p-[.4rem] flex gap-3 items-center border border-custom-primary-60 rounded-[6px] px-5 text-[#334155] font-semibold">
                <Image src={FilterIcon} alt="filter" />
                Filter
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white">
                <DropdownMenuLabel>Name</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Email Address</DropdownMenuItem>
                <DropdownMenuItem>Role</DropdownMenuItem>
                <DropdownMenuItem>Actions</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <DialogTrigger>
          <Button
            className="flex gap-3 items-center rounded-[6px] text-white text-sm font-bold"
            onClick={() => {
              localStorage.removeItem("user-detail");
              onCreate();
            }}
          >
            <Image src={PlusIcon} alt="plus icon" />
            New Users
          </Button>
        </DialogTrigger>
      </div>
    </div>
  );
};

export default DashboardTableNav;
