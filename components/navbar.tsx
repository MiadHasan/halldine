import Link from "next/link";
import { auth } from "@/lib/firebase/initFIrebase";
// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect } from "react";

// more navbar items will be added

export default function Navbar() {
  // useEffect(() => {
    
  // }, [])
  

  let navLinks: any = {
    Home: "/",
    Notice: "/notice",
    "Register Token": "/register-token",
    Review: "/review",
    Login: "/login",
  };

  const user = auth.currentUser;

  if(user) {
    navLinks = {
      Home: "/",
      Notice: "/notice",
      Review: "/review",
      Request: "/request",
      Logout: "/logout",
    };
  }

  return (
    <div className="flex flex-row justify-around items-center bg-[#ddeceb] h-16">
      {Object.keys(navLinks).map((item: string) => (
        <Link
          className="no-underline cursor-pointer text-black text-2xl"
          href={`${navLinks[item as keyof Object]}`}
          key={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
