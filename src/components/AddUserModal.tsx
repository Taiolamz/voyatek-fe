import Image from "next/image";
import { UserIcon } from "../../public/assets/icons";
import { DialogContent } from "./ui/dialog";
import AddUserForm from "./AddUserForm";
import { Dialog } from "@radix-ui/react-dialog";
import { useState } from "react";

interface Iprops {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddUserModal({ open, onOpenChange }: Iprops) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col bg-white p-5 pb-10  border-0 sm:rounded-[10px]">
        <div className="flex flex-col gap-3 items-center justify-center">
          <Image src={UserIcon} alt="user icon" />
          <p className="text-[#1D2739] font-semibold text-xl">New User</p>
        </div>
        {/* FORM */}
        <AddUserForm />
      </DialogContent>
    </Dialog>
  );
}
