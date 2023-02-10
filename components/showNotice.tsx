import Image from "next/image";
import { noticeType } from "@/lib/types/types";

export default function ShowNotice({
  title,
  description,
  imageUrl,
}: noticeType) {
  return (
    <div className="flex flex-col justify-center items-center m-4 p-4 shadow rounded-lg max-w-screen-sm overflow-hidden">
      <h1 className="text-2xl mb-2">{title}</h1>
      {imageUrl && <Image
        alt="notice-image"
        width={400}
        height={300}
        className="mb-2 min-w-full w-auto h-auto"
        src={imageUrl}
        priority
      />}
      <p className=" text-justify">{description}</p>
    </div>
  );
}
