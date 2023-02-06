import { getDocs, collection } from "firebase/firestore";
import { db } from "@/lib/firebase/initFIrebase";
import { allMealType } from "@/lib/types/types";

export async function GetLunchItems() {
  const querySnapshotLunch = await getDocs(collection(db, "lunch"));
  let lunchItems: allMealType[] = [];
  querySnapshotLunch.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const item: allMealType = {
      name: doc.data().name,
      imageUrl: doc.data().imageUrl,
      id: doc.id
    };
    lunchItems.push(item);
  });
  return lunchItems;
}

export async function GetDinnerItems() {
  const querySnapshotDinner = await getDocs(collection(db, "dinner"));
  let dinnerItems: allMealType[] = [];
  querySnapshotDinner.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const item: allMealType = {
      name: doc.data().name,
      imageUrl: doc.data().imageUrl,
      id: doc.id
    };
    dinnerItems.push(item);
  });
  return dinnerItems;
}
