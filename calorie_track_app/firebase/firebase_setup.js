import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// To import a Firebase service, use this pattern: import {} from 'firebase/<service>'
//Your web app's Firebase configuration.
// Copy this object from Firebase console
import {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
} from "@env";

// const firebaseConfig = {
    // apiKey: "AIzaSyAPs5xzjieXf8mm3TIzd-8KPzgvBGSZ2nU",
    // authDomain: "calories-6ebb2.firebaseapp.com",
    // projectId: "calories-6ebb2",
    // storageBucket: "calories-6ebb2.appspot.com",
    // messagingSenderId: "300438393839",
    // appId: "1:300438393839:web:b2c71aad66e5e9832c5c1a"

// }

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
};

const myApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(myApp);
