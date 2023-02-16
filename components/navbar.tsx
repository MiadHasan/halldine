import Link from "next/link";
import { auth } from "@/lib/firebase/initFIrebase";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  let navLinks: any = {
    Home: "/",
    Notice: "/notice",
    "Register Token": "/register-token",
    Review: "/review",
    Login: "/login",
  };

  const user = auth.currentUser;

  if (user) {
    navLinks = {
      Home: "/",
      Students: "/studentList",
      Verify: "/verifyStudents",
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
          className={`no-underline hover:bg-[#d4f8f0] border border-transparent rounded-md p-3 cursor-pointer ${
            router.pathname == navLinks[item] ? "bg-teal-50" : ""
          } text-black text-2xl`}
          href={`${navLinks[item as keyof Object]}`}
          key={item}
        >
          {item}
        </Link>
      ))}
    </div>
  );
}
