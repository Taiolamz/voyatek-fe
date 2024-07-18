"use client";
import { AddUserModal } from "@/components/AddUserModal";
import { DashboardLayout } from "@/components/DashboardLayout";
import RemoveModal from "@/components/RemoveModal";
import { Dialog } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { deleteUser, fetchUsers } from "@/services/userService";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const DashboardTable = dynamic(() => import("@/components/DashboardTable"), {
  ssr: false,
});

const UserAndRoles = () => {
  const [openEdit, setOpenEdit] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);
  const [openCreate, setOpenCreate] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUsers = async () => {
      setIsLoading(true);
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers();
  }, []);

  const [loading, setLoading] = useState(false);

  const deleteUserData = async () => {
    const id = localStorage.getItem("user-detail");
    try {
      setLoading(true);
      const deletedUser = await deleteUser(id as string);
      console.log(deletedUser, "delete user");
      if (deletedUser.success === true) {
        toast({
          description: "User Deleted Successfully!",
          className: "bg-[#4bb543] text-white border-0",
        });
        setOpenRemove(false);
        localStorage.removeItem("user-detail");
      }
    } catch (error) {
      console.error("Failed to delete user:", error);
      toast({
        description: "Something went wrong!",
        className: "bg-[#DC143C] text-white border-0",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-3 mt-3">
        <div className="text-custom-primary-80 text-xs font-normal">
          <div className="flex gap-2 items-center">
            <p>Settings</p>
            <p>/</p>
            <p>Users & Roles Settings</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <p className="font-semibold text-xl">Users & Roles</p>
          <p className="text-custom-primary-80 font-light text-sm">
            Manage all users in your business
          </p>
        </div>

        <div className="flex gap-4 items-center pt-10">
          <p className="border-b border-primary px-4 cursor-pointer pb-3 text-primary font-medium text-sm">
            Users
          </p>
          <p className=" text-custom-primary-80 font-medium cursor-pointer text-sm pb-3">
            Roles
          </p>
        </div>
      </div>

      {/* DASHBOARD TABLE */}
      <>
        <Dialog>
          <DashboardTable
            loading={isLoading}
            data={users}
            onCreate={() => setOpenCreate(true)}
            onOpenEdit={() => setOpenEdit(true)}
            onOpenRemove={() => setOpenRemove(true)}
          />

          <AddUserModal
            open={openEdit || openCreate}
            onOpenChange={() => {
              setOpenEdit(false);
              setOpenCreate(false);
            }}
          />

          <RemoveModal
            loading={loading}
            onCancel={() => setOpenRemove(false)}
            onDelete={() => {
              deleteUserData();
              
            }}
            open={openRemove}
            onOpenChange={() => setOpenRemove(false)}
          />
        </Dialog>
      </>
    </DashboardLayout>
  );
};

export default UserAndRoles;
