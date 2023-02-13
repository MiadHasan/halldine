import Link from "next/link";

// more navbar items will be added
const navLinks: Object = { 'Home': '/', 'Notice': '/notice', 'Register Token': '/register-token', 'Review': '/review', 'Request': '/request','Students': '/studentList', 'Verify': '/verifyStudents' };
export default function Navbar() {
	return (
		<div className="flex flex-row justify-around items-center bg-[#ddeceb] h-16">
			{Object.keys(navLinks).map((item: string) => (
				<Link className="no-underline cursor-pointer text-black text-2xl"
					href={`${navLinks[item as keyof Object]}`} key={item}>{item}</Link>
			))}
		</div>
	);
}