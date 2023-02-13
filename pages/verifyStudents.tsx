import Head from "next/head";
import Layout from "@/components/layout";

export default function Home() {

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
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Id</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Email</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Start Date</th>
          <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">End Date</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">TRX Id</th>
          <th className="w-32 p-3 text-sm font-semibold tracking-wide text-left">Verify</th>
        </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
        <tr className="bg-white">
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            <a href="#" className="font-bold text-blue-500 hover:underline">17xxxx0</a>
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
            Name1
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">dummy@dumdum.com</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">16/10/2021</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">AJHFAJSF</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap"><button className="p-1">yes</button><button className="p-1">no</button></td>
          
        </tr>
        </tbody>
      </table>
    </div>
  </div>
            </Layout>
        </>
    );
}