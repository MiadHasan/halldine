import Image from "next/image";

export default function ShowCardMeal({
  name,
  imageUrl,
  id,
  onDelete,
  time,
}: {
  name: string;
  imageUrl: string;
  id: string;
  time: string;
  onDelete: (time: string, id: string) => void;
}) {
  return (
    <div className="flex flex-col w-60 h-60 justify-between items-center m-4 p-2 shadow rounded-lg">
      <p className="text-2xl">{name}</p>
      <Image
        alt={name}
        className="w-9/12 h-9/12 rounded-md"
        width={100}
        height={100}
        src={imageUrl}
        priority
      />
      <button
        type="submit"
        onClick={() => onDelete(time, id)}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        Delete
      </button>
    </div>
  );
}
