import Link from "next/link";

const navLinks: Object = {'Home': '/', 'Notice': '/notice', 'Register Token': '/register-token', 'Review': '/review'};
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