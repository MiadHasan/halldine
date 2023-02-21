import Head from "next/head";
import Layout from "@/components/layout";
import { GetData } from "@/components/cloudFirestore/getData";
import { studentType } from "@/lib/types/types";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/authContext";

const getVerifiedStudents = async () => {
  const querySnapshotLunch = await GetData("token-registration-request");
  let verifiedStudents: studentType[] = [];
  querySnapshotLunch.forEach((doc) => {
    if (doc.data().verified == true) {
      const item: studentType = {
        studentId: doc.data().id,
        name: doc.data().name,
        email: doc.data().email,
        startDate: doc.data().start,
        endDate: doc.data().end,
        transactionId: doc.data().transactionId,
        id: doc.id,
      };
      verifiedStudents.push(item);
    }
  });
  return verifiedStudents;
};

export async function getServerSideProps() {
  const verifiedStudents: studentType[] = await getVerifiedStudents();
  return {
    props: {
      verifiedStudents,
    },
  };
}

export default function StudentList({
  verifiedStudents,
}: {
  verifiedStudents: studentType[];
}) {
  const router = useRouter();
  const { user }: any = useAuthContext();
  useEffect(() => {
    if (!user) router.push('/');
  }, [user, router]);

  const today = new Date();
  const totalNdm = verifiedStudents.filter(
    (item) => new Date(item.endDate) > today
  ).length;
  return (user &&
    <>
      <Head>
        <title id="title">Student List</title>
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
                    NDM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {verifiedStudents.map((item) => (
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
                      {new Date(item.endDate) < new Date() ? "NO" : "YES"}
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
