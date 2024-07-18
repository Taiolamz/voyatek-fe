import React from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { DeleteIcon } from "../../public/assets/icons";
import { deleteUser } from "@/services/userService";
import { Loader2 } from "lucide-react";

interface Iprops {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onDelete: () => void;
  onCancel: () => void;
  loading: boolean;
}

const RemoveModal = ({
  open,
  onOpenChange,
  onDelete,
  onCancel,
  loading,
}: Iprops) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white p-3 sm:rounded-[10px] pb-10">
        <p className="text-center text-[#1D2739] mt-3 font-bold text-xl">
          Delete this User
        </p>
        <p className="text-center text-[#667185] font-light text-sm flex justify-center">
          This user and all associated data will be <br /> permanently removed.
          Do you wish to continue
        </p>
        <div
          className="flex gap-3 items-center justify-center mt-5"
          onClick={onCancel}
        >
          <Button className="border bg-[#F7F9FC] hover:bg-[#F7F9FC] text-[#475367] font-bold rounded-[6px]">
            Cancel action
          </Button>
          <Button
            className="flex gap-3 items-center border-[#EB9B98] border-[1px] hover:bg-[#FBEAE9] bg-[#FBEAE9] tfont-bold rounded-[6px] text-[#D42620]"
            onClick={onDelete}
          >
            {!loading ? <Image src={DeleteIcon} alt="delete" /> : null}
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
            {loading ? "loading..." : "Yes, Delete"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RemoveModal;
