"use client";

import React from "react";
import { Checkbox } from "./ui/checkbox";
import { DialogTrigger } from "./ui/dialog";
import { Skeleton } from "./ui/skeleton";

interface Iprops {
  onOpenEdit: () => void;
  onOpenRemove: () => void;
  data: User[];
  loading: boolean;
}

const DashboardTableBody = ({
  onOpenEdit,
  onOpenRemove,
  data,
  loading,
}: Iprops) => {
  const handleRoute = (id: string) => {
    localStorage.setItem("user-detail", id);
  };
  return (
    <div className="bg-white border-0 rounded-[6px] pb-5 overflow-hidden w-full ">
      {data?.length > 0 ? (
        data?.map((chi, idx) => {
          const { full_name, email_address, role, id } = chi;
          return (
            <td
              className="flex gap-2 items-center border border-b-custom-primary-50 border-r-0 border-l-0 w-full px-5"
              key={idx}
            >
              <Checkbox
                id="terms1"
                className="border-[#CBD5E1]  border rounded-[5px] h-6 w-6"
              />
              <td className="grid grid-cols-4 w-full gap-40 items-center p-5">
                <tr className="text-[#101928] font-normal text-sm">
                  {loading ? <Skeleton className="h-4 w-[200px]" /> : full_name}
                </tr>
                <tr className="text-[#344054] text-sm font-normal  ...">
                  {loading ? (
                    <Skeleton className="h-4 w-[200px]" />
                  ) : (
                    email_address
                  )}
                </tr>
                <tr
                  className={`text-sm font-normal p-1 rounded-[12px] text-center px-3 border-0 ${
                    role === "Administrator"
                      ? "text-primary bg-[#F0F6FE]"
                      : role === "Sales Manager"
                      ? "text-[#0F973D] bg-[#E7F6EC]"
                      : "text-[#F58A07] bg-[#FEF4E6]"
                  }`}
                >
                  {loading ? <Skeleton className="h-4 w-[200px]" /> : role}
                </tr>
                <td className="flex gap-5 items-center">
                  <DialogTrigger asChild>
                    <tr
                      className="font-medium text-sm text-primary cursor-pointer"
                      onClick={() => {
                        handleRoute(id as string);
                        if (id) {
                          onOpenEdit();
                        }
                      }}
                    >
                      Edit
                    </tr>
                  </DialogTrigger>
                  <DialogTrigger asChild>
                    <tr
                      className="font-medium text-sm text-[#98A2B3] cursor-pointer"
                      onClick={() => {
                        handleRoute(id as string);
                        if (id) {
                          onOpenRemove();
                        }
                      }}
                    >
                      Remove
                    </tr>
                  </DialogTrigger>
                </td>
              </td>
            </td>
          );
        })
      ) : (
        <p className="text-center font-medium text-sm p-3 mt-5">No data found!</p>
      )}
    </div>
  );
};

export default DashboardTableBody;
