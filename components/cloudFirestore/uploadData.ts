//upload meal info to firebase
import { db } from "@/lib/firebase/initFIrebase";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import {
  mealUploadType,
  noticeType,
  requestType,
  reviewType,
  tokenRegistrationType,
} from "@/lib/types/types";

export default async function UploadData(
  collectionName: string,
  data:
    | mealUploadType
    | noticeType
    | tokenRegistrationType
    | reviewType
    | requestType
) {
  try {
    await addDoc(collection(db, collectionName), {
      ...data,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    console.log(e);
  }
}
