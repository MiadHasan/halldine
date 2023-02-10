//upload meal info to firebase
import { db } from '@/lib/firebase/initFIrebase';
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { mealUploadType, noticeType } from '@/lib/types/types';

export default async function UploadData(collectionName: string, data: mealUploadType | noticeType) {
    try {
        await addDoc(collection(db, collectionName), {...data, timestamp: serverTimestamp()})
    } catch(e) {
        console.log(e)
    }
}