"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { authOption } from "../utils/auth";

export default async function UserNav() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 rounded-sm">
          <Avatar className="h-10 w-10 rounded-sm">
            <AvatarImage src="https://cwahnapyqamzrphfdaxo.supabase.co/storage/v1/object/public/avtar%20bucket/Netflix-avatar.png" />
            <AvatarFallback className="rounded-sm">Dev</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {/* {session?.user?.name} */}Ramdev
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              ramdevsarswat1@gmail.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuLabel
          onClick={() => {
            signOut();
          }}
        >
          Sign out
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
