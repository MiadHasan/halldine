import Head from "next/head";
import Layout from "@/components/layout";
import showReview from "@/components/showReview";
import { initFirebase } from "../lib/firebase/initFIrebase";

export default function Home() {
  const id = "1704xxx"
  const name = "bob"
  const title = "title "
  const review = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  return (
    <>
      <Head>
        <title>Review </title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 flex flex-col flex-1 justify-start items-center">
            <p className="text-4xl font-medium">Reviews</p>
            {showReview(id,name,title,review)}
            {showReview(id,name,title,review)}
            {showReview(id,name,title,review)}
            {showReview(id,name,title,review)}
            {showReview(id,name,title,review)}
          </div>
          {/* form */}
          <div className="mt-8 flex flex-col flex-1 max-w-md justify-start">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <p className="flex justify-center mb-8 text-4xl font-sans">Add Review</p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Id</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Name</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Review Title</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Review Detail</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>

                {/* <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Image</label>
                  <div className="mt-1">
                    <input id="file" name="file" type="file" autoComplete="file" required className="" />
                  </div>
                </div> */}
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