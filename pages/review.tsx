import Head from "next/head";
import Layout from "@/components/layout";
import ShowReview from "@/components/showReview";
import { useState } from "react";
import UploadData from "@/components/cloudFirestore/uploadData";
import { reviewType } from "@/lib/types/types";
import { GetData } from "@/components/cloudFirestore/getData";

const getReviewData = async () => {
  const querySnapshotLunch = await GetData("review");
  let reviewData: reviewType[] = [];
  querySnapshotLunch.forEach((doc) => {
    const item: reviewType = {
      id: doc.data().id,
      name: doc.data().name,
      title: doc.data().title,
      description: doc.data().description,
    };
    reviewData.push(item);
  });
  return reviewData;
};

export async function getServerSideProps() {
  const reviewData: reviewType[] = await getReviewData();
  return {
    props: {
      reviewData,
    },
  };
}

export default function Review({ reviewData }: { reviewData: reviewType[] }) {
  const [formEl, setformEl] = useState({
    id: "",
    name: "",
    title: "",
    description: "",
  });

  const [reviews, setReviews] = useState(reviewData);

  const onSubmitButtonClick = async (e: any) => {
    e.preventDefault();
    UploadData("review", formEl);
    setformEl({
      id: "",
      name: "",
      title: "",
      description: "",
    });
    setReviews(await getReviewData())
  };

  return (
    <>
      <Head>
        <title>Review</title>
      </Head>
      <Layout>
        <div className="flex flex-row justify-around">
          <div className="mt-5 flex flex-col flex-1 justify-start items-center">
            <p className="text-4xl font-medium">Reviews</p>
            <>
              {reviews.map((item, index) => (
                <ShowReview
                  key={index}
                  id={item.id}
                  title={item.title}
                  name={item.name}
                  description={item.description}
                />
              ))}
            </>
          </div>
          {/* form */}
          <div className="mt-8 flex flex-col flex-1 max-w-md justify-start">
            <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
              <p className="flex justify-center mb-8 text-4xl font-sans">
                Add Review
              </p>
              <form className="mb-0 space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="student-id"
                    className="block text-sm font-medium text-gray-700"
                  >
                    ID
                  </label>
                  <div className="mt-1">
                    <input
                      id="student-id"
                      value={formEl.id}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, id: e.target.value })
                      }
                      name="student-id"
                      type="text"
                      autoComplete="student-id"
                      required
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="student-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="student-name"
                      value={formEl.name}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, name: e.target.value })
                      }
                      name="student-name"
                      type="text"
                      autoComplete="student-name"
                      required
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="review-title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Review Title
                  </label>
                  <div className="mt-1">
                    <input
                      id="review-title"
                      value={formEl.title}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, title: e.target.value })
                      }
                      name="review-title"
                      type="text"
                      autoComplete="review-title"
                      required
                      className=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="description"
                      value={formEl.description}
                      onChange={(e: any) =>
                        setformEl({ ...formEl, description: e.target.value })
                      }
                      name="description"
                      autoComplete="description"
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
