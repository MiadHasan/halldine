import Head from "next/head";
import Layout from "@/components/layout";
import { auth } from "@/lib/firebase/initFIrebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <div className="flex flex-col mt-6 p-4 justify-center items-center">
			<p className="text-4xl">Want to logout?</p>
			<button
			type="submit"
			onClick={() => logout()}
			className="flex justify-center mt-3 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-red-200 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
			>
			Logout
			</button>
		</div>
      </Layout>
    </>
  );
}
