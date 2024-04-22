import Image from "next/image";
import { ReactNode } from "react";
import MoviePoster from "../../public/image.png";
import Logo from "../../public/Logo.png";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={MoviePoster}
        alt="background image"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        src={Logo}
        width={120}
        height={120}
        alt="Logo"
        className="absolute left-3 top-4 object-contain md:left-10 md:top-6 "
        priority
      />
      {children}
    </div>
  );
}
