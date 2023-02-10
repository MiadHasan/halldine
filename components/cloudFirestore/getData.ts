import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/initFIrebase";

export async function GetData(collectionName: string) {
    return await getDocs(collection(db, collectionName));
  }