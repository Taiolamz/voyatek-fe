"use client";

import React, { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { useAddUserForm } from "@/utilities/useAddUserForm";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import Image from "next/image";
import { EyeCloseIcon, EyeOpenIcon } from "../../public/assets/icons";
import { Loader2 } from "lucide-react";
import { fetchUser } from "@/services/userService";
import { useSearchParams } from "next/navigation";
import { toast } from "./ui/use-toast";

const AddUserForm = () => {
  const { form, roles, handleSubmit, isLoading } = useAddUserForm();
  const { setValue } = form;
  const labelClass = "text-[#475367] font-medium text-xs flex -mb-1";
  const inputClass =
    "border border-[#D0D5DD] text-[#475367]  rounded-[6px] p-5 placeholder:text-[#98A2B3] font-light text-xs";
  const [showPassword, setShowPassword] = React.useState(false);
  const errorClass = "text-[#D42620] font-medium text-xs ";

  const [user, setUser] = React.useState<User | null>(null);
  const [isUpdateLoading, setIsUpdateLoading] = React.useState<boolean>(false);

  const id = localStorage.getItem("user-detail");

  const param = useSearchParams;


  useEffect(() => {
    if (id) {
      const getUser = async () => {
        setIsUpdateLoading(true);
        try {
          const fetchedUser = await fetchUser(id as string);
          console.log(fetchedUser, "user fetch");
          setUser(fetchedUser);
        } catch (err) {
          toast({
            description: "Something went wrong",
            className: "bg-[#DC143C] text-white border-0",
            variant: "destructive",
          });
        } finally {
          setIsUpdateLoading(false);
        }
      };
      getUser();
    }
  }, [id]);

  useEffect(() => {
    if (user) {
      const { email_address, full_name, role, create_password } = user;
      setValue("email_address", email_address);
      setValue("full_name", full_name);
      setValue("role", role);
      setValue("create_password", create_password);
    }
  }, [user, setValue]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-7 "
        onSubmit={form.handleSubmit(handleSubmit)}
      >
        <FormField
          control={form.control}
          name="email_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Email Address</FormLabel>
              <FormControl>
                <Input
                  placeholder="New User's Email Address"
                  {...field}
                  className={inputClass}
                />
              </FormControl>
              <FormMessage className={errorClass} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Full Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="New User's Full Name"
                  {...field}
                  className={inputClass}
                />
              </FormControl>
              <FormMessage className={errorClass} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Role</FormLabel>
              <Select {...field} onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger className={inputClass}>
                    <SelectValue
                      placeholder="Select Role"
                      className={inputClass}
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white sm:p-0">
                  {roles.map((chi, idx) => {
                    const { label, value } = chi;
                    return (
                      <div key={idx}>
                        <SelectItem
                          value={value}
                          onChange={() => setValue("role", value)}
                          className="border-b font-light text-xs p-3 cursor-pointer"
                        >
                          {label}
                        </SelectItem>
                      </div>
                    );
                  })}
                </SelectContent>
              </Select>
              <FormMessage className={errorClass} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="create_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>Create Password</FormLabel>
              <FormControl>
                <div className="relative grid place-items-center">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a Password for New User"
                    {...field}
                    className={inputClass}
                  />
                  <Image
                    className="absolute right-0 mr-5 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                    src={!showPassword ? EyeOpenIcon : EyeCloseIcon}
                    alt="password"
                  />
                </div>
              </FormControl>
              <FormMessage className={errorClass} />
            </FormItem>
          )}
        />
        <Button
          className={`border rounded-[6px] p-6 text-white font-medium ${
            isLoading ? "cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          {isLoading ? " loading..." : "Add User"}
        </Button>
      </form>
    </Form>
  );
};

export default AddUserForm;
