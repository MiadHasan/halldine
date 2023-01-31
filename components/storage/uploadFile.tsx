// to learn how to download a file, get/use file metadata, delete files, and list files see https://firebase.google.com/docs/storage/web/start
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";

const storage = getStorage()

export default function UploadFile(file: any) {
    console.log('file reached')
    // create a storage ref
    const storageRef = ref(storage, "food_images/" + file.name)

    // upload file
    const task = uploadBytesResumable(storageRef, file)
    task.on('state_changed', null, null,
        function onComplete() {
            getDownloadURL(task.snapshot.ref).then((url: string) => {
                console.log(url);
                return url;
            });
        }
    )
}