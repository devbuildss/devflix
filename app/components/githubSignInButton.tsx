"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { FiGithub } from "react-icons/fi";

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <FiGithub className="w-6 h-6" />
    </Button>
  );
}
