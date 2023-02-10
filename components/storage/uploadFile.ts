//upload image to filebase
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import { storage } from "@/lib/firebase/initFIrebase";

export default async function UploadFile(
  dir: string,
  file: any,
  sendImageUrl: (url: string) => void
) {
  try {
    // create a storage ref
    const storageRef = ref(storage, dir + file.name);
    // upload file
    const task = uploadBytesResumable(storageRef, file);
    task.on("state_changed", null, null, function onComplete() {
      getDownloadURL(task.snapshot.ref).then((url: string) => {
        sendImageUrl(url);
      });
    });
  } catch (e) {
    console.log(e);
  }
}
