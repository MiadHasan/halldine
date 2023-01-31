import Head from "next/head";
import Layout from "@/components/layout";
import { initFirebase } from "../lib/firebase/initFIrebase";
import { useRef, useState } from "react";
import UploadFile from '@/components/storage/uploadFile';

initFirebase()

export default function Home() {
  const inputEl = useRef<HTMLInputElement>(null);
  const [formEl, setformEl]  = useState({itemName: '', file: '', mealTime: ''});
  
  //unloading on submit
  const onButtonClick = (e: any) => {
    e.preventDefault();
    console.log('click', inputEl.current);
    if (!inputEl.current || !inputEl.current.files) return;
    console.log('reached')
    UploadFile(inputEl.current.files[0]);
    setformEl({...formEl, itemName: '', file: '', mealTime: ''});
  }
  return (
    <>
      <Head>
        <title>Next Day Meal</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 mx-auto flex justify-center">
            <p className="text-4xl font-medium">Next Day Meal</p>
            {/* Images will be added here. */}
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
            <p className="flex justify-center mb-8 text-4xl font-sans">Add Meal Item</p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="item-name" className="block text-sm font-medium text-gray-700">Item Name</label>
                  <div className="mt-1">
                    <input id="item-name" value={formEl.itemName} onChange={(e: any) => setformEl({...formEl, itemName: e.target.value})} name="item-name" type="text" autoComplete="item-name" required className="" />
                  </div>
                </div>

                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-gray-700">Upload Image</label>
                  <div className="mt-1">
                    <input id="file" value={formEl.file} onChange={(e: any) => setformEl({...formEl, file: e.target.value})} ref={inputEl} name="file" type="file" autoComplete="file" required className="" />
                  </div>
                </div>

                <div>
                  <label htmlFor="meal-time" className="block text-sm font-medium text-gray-700">Meal Time</label>
                  <div className="mt-1">
                    <select name="meal-time" value={formEl.mealTime} onChange={(e: any) => setformEl({...formEl, mealTime: e.target.value})} id="meal-time" className="">
                      <option value=''>Please select time</option>
                      <option value='lunch'>Lunch</option>
                      <option value='dinner'>Dinner</option>
                    </select>
                  </div>
                </div>

                <div>
                  <button type="submit" onClick={onButtonClick} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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