import React from "react";
import DashboardTableNav from "./DashboardTableNav";
import DashboardTableHead from "./DashboardTableHead";
import dynamic from "next/dynamic";

const DashboardTableBody = dynamic(() => import("./DashboardTableBody"), {
  ssr: false,
});

interface Iprops {
  onOpenEdit: () => void;
  onOpenRemove: () => void;
  onCreate: () => void;
  data: User[];
  loading: boolean;
}

const DashboardTable = ({
  onOpenEdit,
  onOpenRemove,
  onCreate,
  data,
  loading,
}: Iprops) => {
  return (
    <table className="w-[calc(100%-50px)] pr-7">
      <DashboardTableNav onCreate={onCreate} />
      <DashboardTableHead />
      <DashboardTableBody
        loading={loading}
        data={data}
        onOpenEdit={onOpenEdit}
        onOpenRemove={onOpenRemove}
      />
    </table>
  );
};

export default DashboardTable;
