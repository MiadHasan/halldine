import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/initFIrebase";

export default async function UpdateData(collectionName: string, id: string, data: any) {
    await updateDoc(doc(db, collectionName, id), data);
}
