import Head from "next/head";
import Layout from "@/components/layout";
import { GetData } from "@/components/cloudFirestore/getData";
import { studentType } from "@/lib/types/types";
import { useState } from "react";
import DeleteData from "@/components/cloudFirestore/deleteData";
import UpdateData from "@/components/cloudFirestore/updateData";

const getUnverifiedStudents = async () => {
  const querySnapshotLunch = await GetData("token-registration-request");
  let unverifiedStudents: studentType[] = [];
  querySnapshotLunch.forEach((doc) => {
    if (doc.data().verified == false) {
      const item: studentType = {
        studentId: doc.data().id,
        name: doc.data().name,
        email: doc.data().email,
        startDate: doc.data().start,
        endDate: doc.data().end,
        transactionId: doc.data().transactionId,
        id: doc.id,
      };
      unverifiedStudents.push(item);
    }
  });
  return unverifiedStudents;
};

export async function getServerSideProps() {
  const unverifiedStudents: studentType[] = await getUnverifiedStudents();
  return {
    props: {
      unverifiedStudents,
    },
  };
}

export default function VerifyStudents({
  unverifiedStudents,
}: {
  unverifiedStudents: studentType[];
}) {
  const [verifyRequest, setVerifyRequest] = useState(unverifiedStudents);

  const handleDelete = async (id: string) => {
    await DeleteData("token-registration-request", id);
    setVerifyRequest(await getUnverifiedStudents());
  };

  const handleAccept = async (id: string) => {
    const newData = {
      verified: true,
    };
    await UpdateData("token-registration-request", id, newData);
    setVerifyRequest(await getUnverifiedStudents());
  }

  return (
    <>
      <Head>
        <title id="title">Student List</title>
        {/* <script src="https://kit.fontawesome.com/75e4a8e305.js" crossorigin='anonymous'></script> */}
      </Head>
      <Layout>
        <div className="p-5 h-screen bg-gray-100">
          <h1 className="text-xl mb-2">Your orders</h1>

          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">
                    Id
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Name
                  </th>
                  <th className="p-3 text-sm font-semibold tracking-wide text-left">
                    Email
                  </th>
                  <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                    Start Date
                  </th>
                  <th className="w-28 p-3 text-sm font-semibold tracking-wide text-left">
                    End Date
                  </th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                    TRX Id
                  </th>
                  <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">
                    Verify
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {verifyRequest.map((item) => (
                  <tr key={item.id} className="bg-white">
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      <p className="font-bold text-blue-500">
                        {item.studentId}
                      </p>
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.email}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.startDate}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.endDate}
                    </td>
                    <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                      {item.transactionId}
                    </td>
                    <td className="flex p-3 text-sm text-gray-700 whitespace-nowrap">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => handleAccept(item.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2 cursor-pointer"
                        onClick={() => handleDelete(item.id)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </>
  );
}
