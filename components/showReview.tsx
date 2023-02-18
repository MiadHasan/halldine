import { reviewType } from "@/lib/types/types";

export default function ShowReview({
  id,
  name,
  title,
  description,
}: reviewType) {
  return (
    <div className="flex flex-col text-justify justify-center items-center max-w-screen-md my-4 p-4 shadow rounded-lg overflow-hidden">
      <h2>
        {name} ({id})
      </h2>
      <h3>
        <b>{title}</b>
      </h3>
      <p>{description}</p>
    </div>
  );
}
