//upload meal info to firebase
import { db } from '@/lib/firebase/initFIrebase';
import { doc, setDoc, serverTimestamp, addDoc, collection } from "firebase/firestore";
import { mealType } from '@/lib/types/types';

export default async function UploadMealInfo(mealInfo: mealType) {
    try {
        await addDoc(collection(db, mealInfo.mealTime), {
            name: mealInfo.name,
            imageUrl: mealInfo.imageUrl,
            timestamp: serverTimestamp()
        })
    } catch(e) {
        console.log(e)
    }
}