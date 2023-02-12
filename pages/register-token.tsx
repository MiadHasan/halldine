import Head from "next/head";
import Layout from "@/components/layout";
import UploadData from "@/components/cloudFirestore/uploadData";
import { useState } from "react";

export default function RegisterToken() {
  const [formEl, setformEl] = useState({
    id: '',
    name: '',
    email: '',
    start: '',
    end: '',
    transactionId: '',
    varified: false
  });

  const onSubmitButtonClick = (e: any) => {
    e.preventDefault();
    UploadData("token-registration-request", formEl);
    setformEl({
      id: '',
      name: '',
      email: '',
      start: '',
      end: '',
      transactionId: '',
      varified: false
    });
  }

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
                  ID
                </label>
                <div className="mt-1">
                  <input
                    id="student-id"
                    value={formEl.id}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, id: e.target.value })
                    }
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
                    value={formEl.name}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, name: e.target.value })
                    }
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
                    value={formEl.email}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, email: e.target.value })
                    }
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
                    value={formEl.start}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, start: e.target.value })
                    }
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
                    value={formEl.end}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, end: e.target.value })
                    }
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
                    value={formEl.transactionId}
                    onChange={(e: any) =>
                      setformEl({ ...formEl, transactionId: e.target.value })
                    }
                    placeholder="Ex. R23010.2211.2200b2"
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
                  onClick={(e) => onSubmitButtonClick(e)}
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
