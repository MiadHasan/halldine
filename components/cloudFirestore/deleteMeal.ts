import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/initFIrebase";

export default async function DeleteMeal(id: string, time: string) {
  await deleteDoc(doc(db, time, id));
}
