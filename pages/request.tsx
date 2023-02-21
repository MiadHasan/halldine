import Head from "next/head";
import Layout from "@/components/layout";
import { useEffect, useState } from "react";
import { requestType } from "@/lib/types/types";
import { GetData } from "@/components/cloudFirestore/getData";
import UploadData from "@/components/cloudFirestore/uploadData";
import ShowRequest from "@/components/showRequest";
import DeleteData from "@/components/cloudFirestore/deleteData";
import { useRouter } from "next/router";
import { useAuthContext } from "@/context/authContext";

const getRequestData = async () => {
  const querySnapshotLunch = await GetData("request");
  let reviewData: requestType[] = [];
  querySnapshotLunch.forEach((doc) => {
    const item: requestType = {
      hallName: doc.data().hallName,
      itemName: doc.data().itemName,
      quantity: doc.data().quantity,
      requestId: doc.id,
    };
    reviewData.push(item);
  });
  return reviewData;
};

export async function getServerSideProps() {
  const requestData: requestType[] = await getRequestData();
  return {
    props: {
      requestData,
    },
  };
}

export default function Request({
  requestData,
}: {
  requestData: requestType[];
}) {
  const router = useRouter();
  const { user }: any = useAuthContext();
  useEffect(() => {
    if (!user) router.push('/');
  }, [user, router])
  const [formEl, setformEl] = useState({
    hallName: "",
    itemName: "",
    quantity: "",
  });
  const [requests, setRequests] = useState(requestData);

  const handleDelete = async (id: string) => {
    await DeleteData("request", id);
    setRequests(await getRequestData());
  };

  const onSubmitButtonClick = async (e: any) => {
    e.preventDefault();
    UploadData("request", formEl);
    setformEl({
      hallName: "",
      itemName: "",
      quantity: "",
    });
    setRequests(await getRequestData());
  };

  return (user &&
    <>
      <Head>
        <title id="title">Request</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 flex flex-col flex-1 justify-start items-center">
            <p className="text-4xl font-medium">Food Requests</p>
            <>
              {requests.map((item, index) => (
                <ShowRequest
                  key={index}
                  hallName={item.hallName}
                  itemName={item.itemName}
                  quantity={item.quantity}
                  id={String(item.requestId)}
                  onAcknowledge={handleDelete}
                />
              ))}
            </>
          </div>
          {/* form */}
          <div className="mt-8 flex flex-col flex-1 max-w-md justify-start">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <p className="flex justify-center mb-8 text-4xl font-sans">
                Request for food
              </p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="hall-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Hall Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="hall-name"
                      value={formEl.hallName}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, hallName: e.target.value })
                      }
                      name="hall-name"
                      type="text"
                      autoComplete="hall-name"
                      required
                      className=""
                    />
                  </div>
                </div>
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
                    htmlFor="quantity"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Quantity
                  </label>
                  <div className="mt-1">
                    <input
                      id="quantity"
                      value={formEl.quantity}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, quantity: e.target.value })
                      }
                      name="quantity"
                      type="text"
                      autoComplete="quantity"
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
        </div>
      </Layout>
    </>
  );
}
