import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase_setup";

export async function writeToDB(goal) {
    try {
      const docRef = await addDoc(collection(firestore, "calories"), goal);
      console.log("ID: ", docRef.id);
    } catch (err) {
      console.log(err);
    }
  }
  