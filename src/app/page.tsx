"use client";

import UserAndRoles from "./dashboard/users-and-roles/page";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/users-and-roles");
  }, []);
  return (
    <div>
      {/* <UserAndRoles /> */}
      <></>
    </div>
  );
}
