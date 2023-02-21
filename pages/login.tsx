import Head from "next/head";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import LoginUser from "@/components/auth/authLogin";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/authContext";

export default function Login() {
  const router = useRouter();
  const [formEl, setformEl] = useState({
    email: "",
    password: "",
  });

  const { user }: any = useAuthContext();
  
  useEffect(() => {
    if (user) router.push('/');
  }, [user, router]);
  

  const onSubmitButtonClick = async (e: any) => {
    e.preventDefault();
    await LoginUser(formEl.email, formEl.password);
    setformEl({
      email: "",
      password: "",
    });
  };

  return ( !user &&
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Layout>
        <div className="mt-8 flex flex-row justify-center items-center">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <p className="flex justify-center mb-8 text-4xl font-sans">Login</p>
            <form className="mb-0 space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="manager-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="manager-email"
                    value={formEl.email}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, email: e.target.value })
                    }
                    placeholder="Ex. manager@gmail.com"
                    name="manager-email"
                    type="email"
                    autoComplete="manager-email"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    value={formEl.password}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, password: e.target.value })
                    }
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={(e) => onSubmitButtonClick(e)}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
