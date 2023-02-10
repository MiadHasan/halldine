import Head from "next/head";
import Layout from "@/components/layout";
import { useState, useRef } from "react";
import UploadFile from "@/components/storage/uploadFile";
import { noticeType } from "@/lib/types/types";
import UploadData from "@/components/cloudFirestore/uploadData";
import { GetData } from "@/components/cloudFirestore/getData";
import ShowNotice from "@/components/showNotice";

const getNoticeData = async () => {
  const querySnapshotLunch = await GetData("notice");
  let noticeData: noticeType[] = [];
  querySnapshotLunch.forEach((doc) => {
    const item: noticeType = {
      title: doc.data().title,
      imageUrl: doc.data().imageUrl,
      description: doc.data().description,
    };
    noticeData.push(item);
  });
  return noticeData;
};

export async function getServerSideProps() {
  const noticeData: noticeType[] = await getNoticeData();
  return {
    props: {
      noticeData,
    },
  };
}

export default function Notice({ noticeData }: { noticeData: noticeType[] }) {
  const [formEl, setformEl] = useState({
    noticeTitle: "",
    file: "",
    description: "",
  });
  const [notices, setNotices] = useState(noticeData);
  const inputEl = useRef<HTMLInputElement>(null);

  const setNoticeInfo = async (imageUrl: string) => {
    const noticeInfo: noticeType = {
      title: formEl.noticeTitle,
      description: formEl.description,
      imageUrl: imageUrl,
    };
    await UploadData("notice", noticeInfo);
    setNotices(await getNoticeData());
  };

  const onSubmitButtonClick = (e: any) => {
    e.preventDefault();
    if (!inputEl.current || !inputEl.current.files) return;

    if (!inputEl.current.files[0]) {
      setNoticeInfo("");
    } else {
      UploadFile("notice_images/", inputEl.current.files[0], setNoticeInfo);
    }
    setformEl({ ...formEl, noticeTitle: "", file: "", description: "" });
  };

  const title = "Notice Title ";
  const src =
    "https://img.freepik.com/free-vector/hand-drawn-food-elements_1411-48.jpg";
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
  return (
    <>
      <Head>
        <title>Notice</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 flex flex-col flex-1 justify-start items-center">
            <p className="text-4xl font-medium">Notices</p>
            <>
              {notices.map((item, index) => (
                <ShowNotice
                  key={index}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  description={item.description}
                />
              ))}
            </>
          </div>
          <div className="mt-8 flex flex-col flex-1 max-w-md justify-start">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <p className="flex justify-center mb-8 text-4xl font-sans">
                Add Notice
              </p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="notice-title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Notice Title
                  </label>
                  <div className="mt-1">
                    <input
                      id="notice-title"
                      value={formEl.noticeTitle}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, noticeTitle: e.target.value })
                      }
                      name="notice-title"
                      type="text"
                      autoComplete="notice-title"
                      required
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="notice-description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Notice Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="notice-description"
                      value={formEl.description}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, description: e.target.value })
                      }
                      name="notice-description"
                      autoComplete="notice-description"
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
                    Notice Image
                  </label>
                  <div className="mt-1">
                    <input
                      id="notice-file"
                      value={formEl.file}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, file: e.target.value })
                      }
                      ref={inputEl}
                      name="notice-file"
                      type="file"
                      autoComplete="notice-file"
                      required
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={onSubmitButtonClick}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
