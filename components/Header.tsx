"use client";
import Image from "next/image";
import { cn, getInitials } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Session } from "next-auth";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>
      <ul>
        <li>
          <Link
            href="library"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/library" ? "text-light-200" : "text-light-100",
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link
            href="/my-profile"
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname === "/my-profile" ? "text-light-200" : "text-light-100",
            )}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback className="bg-amber-100">
                {getInitials(session?.user?.name || "N/A")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
