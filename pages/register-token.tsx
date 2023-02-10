import Head from "next/head";
import Layout from "@/components/layout";

export default function RegisterToken() {
  return (
    <>
      <Head>
        <title>Register Token</title>
      </Head>
      <Layout>
        <div className="mt-8 flex flex-row justify-center items-center">
          <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <p className="flex justify-center mb-8 text-4xl font-sans">
              Register For Token
            </p>
            <form className="mb-0 space-y-6" action="#" method="POST">
              <div>
                <label
                  htmlFor="student-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Id
                </label>
                <div className="mt-1">
                  <input
                    id="student-id"
                    placeholder="Ex. 1704118"
                    name="student-id"
                    type="number"
                    autoComplete="student-id"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="student-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    id="student-name"
                    placeholder="Ex. Miad Hasan"
                    name="student-name"
                    type="text"
                    autoComplete="student-name"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="student-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="student-email"
                    placeholder="Ex. student@gmail.com"
                    name="student-email"
                    type="email"
                    autoComplete="student-email"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="start-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  Start Date
                </label>
                <div className="mt-1">
                  <input
                    id="start-date"
                    name="start-date"
                    type="date"
                    autoComplete="start-date"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="end-date"
                  className="block text-sm font-medium text-gray-700"
                >
                  End Date
                </label>
                <div className="mt-1">
                  <input
                    id="end-date"
                    name="end-date"
                    type="date"
                    autoComplete="end-date"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="transaction-id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Transaction ID
                </label>
                <div className="mt-1">
                  <input
                    id="transaction-id"
                    name="transaction-id"
                    type="text"
                    autoComplete="transaction-id"
                    required
                    className=""
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
