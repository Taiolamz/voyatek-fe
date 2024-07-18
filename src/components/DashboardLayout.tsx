import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="relative min-h-screen">
      <DashboardNavbar />
      <div className="flex">
        <DashboardSidebar />
        <div className="absolute top-[120px] left-[320px] right-0 bottom-0 h-screen overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
