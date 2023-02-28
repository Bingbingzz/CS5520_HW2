import { collection, addDoc } from "firebase/firestore";
import { doc, setDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "./firebase_setup";

export async function writeToDB(entry) {
    try {
      const docRef = await addDoc(collection(firestore, "calories"), entry);
      console.log("ID: ", docRef.id);
    } catch (err) {
      console.log(err);
    }
  }


export async function deleteFromDB(entryId) {
    try {
        await deleteDoc(doc(firestore, "calories", entryId));
    } catch (err) {
        console.log(err);
    }
}

export async function updateInDB(entryId, updatedEntry) {
    try {
        const entryRef = doc(firestore, 'calories', entryId);
        await updateDoc(entryRef, updatedEntry);
        console.log('updated');
    } catch (err) {
        console.log(err);
    }
}
  