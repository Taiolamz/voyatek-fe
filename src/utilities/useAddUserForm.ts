"use client";

import { useToast } from "@/components/ui/use-toast";
import { createUsers, fetchUsers } from "@/services/userService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

interface RoleType {
  label: string;
  value: string;
}

const roles: RoleType[] = [
  {
    label: "Administator",
    value: "Administator",
  },
  {
    label: "Sales Manager",
    value: "Sales Manager",
  },
  {
    label: "Sales Representative",
    value: "Sales Representative",
  },
];

const rolesLabels = roles.map((chi) => chi.label);
const formSchema = z.object({
  email_address: z.string().email("Invalid email address"),
  full_name: z.string().min(1, "Full name is required"),
  role: z.string().refine((val) => rolesLabels.includes(val), {
    message: "Role is required",
  }),
  create_password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be no more than 32 characters long")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(
      /[^a-zA-Z0-9]/,
      "Password must contain at least one special character"
    ),
});

export const useAddUserForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await createUsers(values);
      console.log(response, "res");
      if (response.status === 200) {
        toast({
          description: "User Added Successfully!",
          className: "bg-[#4bb543] text-white border-0",
        });
        fetchUsers()
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        description: "Something went wrong!",
        className: "bg-[#DC143C] text-white border-0",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email_address: "",
      full_name: "",
      role: "",
      create_password: "",
    },
  });
  return {
    form,
    roles,
    handleSubmit,
    isLoading,
  };
};
