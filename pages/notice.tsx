import Head from "next/head";
import Layout from "@/components/layout";
import showNotice from "@/components/showNotice";
import { initFirebase } from "../lib/firebase/initFIrebase";

export default function Home() {
  const title = "Notice Title "
  const src = "https://img.freepik.com/free-vector/hand-drawn-food-elements_1411-48.jpg"
  const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <>
      <Head>
        <title>Review </title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 flex flex-col flex-1 justify-start items-center">
            <p className="text-4xl font-medium">Notices</p>
            {showNotice(title,description,'')}
            {showNotice(title,description,src)}
            {showNotice(title,description,src)}
            {showNotice(title,description,src)}
            {showNotice(title,description,src)}
          </div>
          <div className="mt-8 flex flex-col flex-1 max-w-md justify-start">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <p className="flex justify-center mb-8 text-4xl font-sans">Add Notice</p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Notice Title</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Notice Description</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">Notice Image</label>
                  <div className="mt-1">
                    <input id="file" name="file" type="file" autoComplete="file" required className="" />
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}