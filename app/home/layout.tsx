import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOption } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/navBar";

export default async function ({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOption);
  if (!session) {
    return redirect("/login");
  }
  return (
    <div>
      {" "}
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
