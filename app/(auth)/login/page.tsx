import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import GithubSignInButton from "@/app/components/githubSignInButton";
import GoogleSignInButton from "@/app/components/googleSignInButton";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/utils/auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOption);
  if (session) {
    return redirect("/home");
  }

  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
      <form method="post" action="/api/auth/signin">
        <p className="text-3xl font-semibold text-white ">Login</p>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            name="email"
            placeholder="email"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block "
          />
          <Input
            type="password"
            name="password"
            placeholder="password"
            className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
          />
          <Button
            type="submit"
            variant="destructive"
            className="w-full bg-[#e50914]"
          >
            Login
          </Button>
        </div>
      </form>
      <div className="text-gray-500 text-sm mt-2">
        Don't have an Account?{" "}
        <Link className="text-white hover:underline" href="sign-up">
          Sign Up!
        </Link>
      </div>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
        <GithubSignInButton />
        <GoogleSignInButton />
      </div>
    </div>
  );
}
