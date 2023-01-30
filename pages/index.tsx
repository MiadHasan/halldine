import Head from "next/head";
import Layout from "@/components/layout";
import { initFirebase } from "../lib/firebase/initFIrebase";

initFirebase()

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Day Meal</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 mx-auto flex justify-center">
            <p className="text-4xl font-medium">Next Day Meal</p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <p className="flex justify-center mb-8 text-4xl font-sans">Add Meal Item</p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Item Name</label>
                  <div className="mt-1">
                    <input id="item-name" name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Image</label>
                  <div className="mt-1">
                    <input id="file" name="file" type="file" autoComplete="file" required className="" />
                  </div>
                </div>

                <div>
                  <label htmlFor="company-size" className="block text-sm font-medium text-gray-700">Company size</label>
                  <div className="mt-1">
                    <select name="company-size" id="company-size" className="">
                      <option value="">Please select time</option>
                      <option value="small">Lunch</option>
                      <option value="medium">Dinner</option>
                    </select>
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