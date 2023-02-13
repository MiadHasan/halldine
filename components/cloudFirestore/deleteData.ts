import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/initFIrebase";

export default async function DeleteData(collectionName: string, id: string) {
  await deleteDoc(doc(db, collectionName, id));
}
