import { dashboardTableHeadData } from "@/utilities/utils";
import React from "react";
import { Checkbox } from "./ui/checkbox";
import { DoubledropIcon } from "../../public/assets/icons";
import Image from "next/image";

const DashboardTableHead = () => {
  return (
    <thead className="flex items-center px-5">
      <Checkbox
        id="terms1"
        className="border-[#CBD5E1] border rounded-[5px] h-6 w-6"
      />
      <tr className="grid grid-cols-4 w-full gap-40 items-center p-5">
        {dashboardTableHeadData.map((chi, idx) => (
          <tr className="flex gap-2 items-center" key={idx}>
            <td className="text-[#334155] text-xs font-normal">{chi}</td>
            {idx !== 3 ? <Image src={DoubledropIcon} alt="arrow icon" /> : null}
          </tr>
        ))}
      </tr>
    </thead>
  );
};

export default DashboardTableHead;
