"use client";

import { sidebar } from "@/utilities/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebar = () => {
  const router = usePathname();

  return (
    <div className=" p-10">
      <div className="w-[224px] bg-white flex flex-col h-[710px] gap-3 p-5">
        <p className="font-bold text-xs">Settings</p>
        <div className="flex flex-col gap-1">
          {sidebar.map((chi, idx) => {
            const { label, icon: Icon, path } = chi;
            const isHighlighted = router === path;
            return (
              <Link
                key={idx}
                href={path}
                className={`p-3 hover:bg-custom-primary-50 rounded-[6px] transition-all duration-300 ${
                  isHighlighted ? "bg-custom-primary-50" : ""
                }`}
              >
                <div className="flex gap-3 items-center">
                  <Icon className={isHighlighted ? "fill-primary" : ""} />
                  <p
                    className={`text-custom-neutral font-light text-sm ${
                      isHighlighted ? "text-primary font-medium" : ""
                    }`}
                  >
                    {label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
