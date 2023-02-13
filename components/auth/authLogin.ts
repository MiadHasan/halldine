import { signInWithEmailAndPassword, browserSessionPersistence, setPersistence } from "firebase/auth";
import { auth } from "@/lib/firebase/initFIrebase";

export default async function LoginUser(email: string, password: string) {
  setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    return signInWithEmailAndPassword(auth, email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
}
