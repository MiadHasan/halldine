import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/initFIrebase";
import { allMealType } from "@/lib/types/types";


export async function GetLunchItems () {
    const querySnapshotLunch = await getDocs(collection(db, "lunch"));
    let lunchItems: allMealType[] = [];
    querySnapshotLunch.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        const item: allMealType = {
            name: doc.data().name,
            imageUrl: doc.data().imageUrl
        }
        lunchItems.push(item);
    });
    console.log(lunchItems)
    return lunchItems;
}

export async function GetDinnerItems () {
    const querySnapshotDinner = await getDocs(collection(db, "dinner"));
    let dinnerItems: allMealType[] = [];
    querySnapshotDinner.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
        const item: allMealType = {
            name: doc.data().name,
            imageUrl: doc.data().imageUrl
        }
        dinnerItems.push(item);
    });
    return dinnerItems;
}