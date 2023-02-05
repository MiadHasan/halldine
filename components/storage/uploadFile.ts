//upload image to filebase
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";

const storage = getStorage()

export default async function UploadFile(file: any, setMealInfo:(url: string) => void) {
    
    try {
        // create a storage ref
        const storageRef = ref(storage, "food_images/" + file.name)
        // upload file
        const task = uploadBytesResumable(storageRef, file)
        task.on('state_changed', null, null,
            function onComplete() {
                getDownloadURL(task.snapshot.ref).then((url: string) => {
                    setMealInfo(url);
                });
            }
        )
    } catch (e) {
        console.log(e)
    }
    
    

}