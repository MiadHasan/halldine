import Head from "next/head";
import Layout from "@/components/layout";
import ShowCardMeal from "@/components/showCardMeal";
import { useRef, useState } from "react";
import UploadFile from "@/components/storage/uploadFile";
import UploadData from "@/components/cloudFirestore/uploadData";
import { mealUploadType, allMealType } from "@/lib/types/types";
import DeleteData from "@/components/cloudFirestore/deleteData";
import { GetData } from "@/components/cloudFirestore/getData";
import { useAuthContext } from "@/context/authContext";

const getMealData = async (mealTime: string) => {
  const querySnapshotLunch = await GetData(mealTime);
  let mealItems: allMealType[] = [];
  querySnapshotLunch.forEach((doc) => {
    const item: allMealType = {
      name: doc.data().name,
      imageUrl: doc.data().imageUrl,
      id: doc.id,
    };
    mealItems.push(item);
  });
  return mealItems;
};

export async function getServerSideProps() {
  const lunchItems = await getMealData("lunch");
  const dinnerItems = await getMealData("dinner");

  return {
    props: {
      lunchItems,
      dinnerItems,
    },
  };
}

export default function Home({
  lunchItems,
  dinnerItems,
}: {
  lunchItems: allMealType[];
  dinnerItems: allMealType[];
}) {
  const inputEl = useRef<HTMLInputElement>(null);
  const [formEl, setformEl] = useState({
    itemName: "",
    file: "",
    mealTime: "",
  });
  const [lunchMenu, setLunchMenu] = useState(lunchItems);
  const [dinnerMenu, setDinnerMenu] = useState(dinnerItems);

  const setMealInfo = async (imageUrl: string) => {
    const mealInfo: mealUploadType = {
      name: formEl.itemName,
      imageUrl: imageUrl,
    };

    await UploadData(formEl.mealTime, mealInfo);
    if (formEl.mealTime == "lunch") {
      setLunchMenu(await getMealData("lunch"));
    } else if (formEl.mealTime == "dinner") {
      setDinnerMenu(await getMealData("dinner"));
    }
  };

  const handleDelete = async (collectionName: string, id: string) => {
    await DeleteData(collectionName, id);
    if (collectionName == "lunch") {
      setLunchMenu(await getMealData("lunch"));
    } else if (collectionName == "dinner") {
      setDinnerMenu(await getMealData("dinner"));
    }
  };

  //unloading on submit
  const onSubmitButtonClick = (e: any) => {
    e.preventDefault();
    if (!inputEl.current || !inputEl.current.files) return;

    if (!inputEl.current.files[0]) {
      setMealInfo("");
    } else {
      UploadFile("food_images/", inputEl.current.files[0], setMealInfo);
    }
    setformEl({ ...formEl, itemName: "", file: "", mealTime: "" });
  };

  const {user}:any = useAuthContext();
  //const user = auth.currentUser;
  return (
    <>
      <Head>
        <title>Next Day Meal</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          {/* items showing start */}
          <div className="nexDayMeal m-5 flex flex-col flex-1 justify-center items-center">
            <p className="text-4xl font-medium">Next Day Meal</p>
            {/* meal time showing cards */}
            <div className="flex flex-1 flex-col justify-evenly items-center">
              <p className="text-2xl p-4">Lunch</p>
              <div className="flex">
                {lunchMenu.map((item) => (
                  <ShowCardMeal
                    key={item.id}
                    onDelete={handleDelete}
                    id={item.id}
                    time={"lunch"}
                    name={item.name}
                    imageUrl={item.imageUrl}
                  />
                ))}
              </div>
            </div>
            {/* meal time showing cards end*/}
            <div className="flex flex-1 flex-col justify-evenly items-center mt-8">
              <p className="text-2xl p-4">Dinner</p>
              <div className="flex">
                {dinnerMenu.map((item) => (
                  <ShowCardMeal
                    key={item.id}
                    onDelete={handleDelete}
                    id={item.id}
                    time={"dinner"}
                    name={item.name}
                    imageUrl={item.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* items showing end */}
          {user && (
            <div className="mt-4 flex flex-col flex-2 justify-start">
              <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
                <p className="flex justify-center mb-8 text-4xl font-sans">
                  Add Meal Item
                </p>
                <form className="mb-0 space-y-6" action="#" method="POST">
                  <div>
                    <label
                      htmlFor="item-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Item Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="item-name"
                        value={formEl.itemName}
                        onChange={(e: any) =>
                          setformEl({ ...formEl, itemName: e.target.value })
                        }
                        name="item-name"
                        type="text"
                        autoComplete="item-name"
                        required
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="file"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Upload Image
                    </label>
                    <div className="mt-1">
                      <input
                        id="file"
                        value={formEl.file}
                        onChange={(e: any) =>
                          setformEl({ ...formEl, file: e.target.value })
                        }
                        ref={inputEl}
                        name="file"
                        type="file"
                        autoComplete="file"
                        required
                        className=""
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="meal-time"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Meal Time
                    </label>
                    <div className="mt-1">
                      <select
                        name="meal-time"
                        value={formEl.mealTime}
                        onChange={(e: any) =>
                          setformEl({ ...formEl, mealTime: e.target.value })
                        }
                        id="meal-time"
                        className=""
                      >
                        <option value="">Please select time</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      onClick={onSubmitButtonClick}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
}
