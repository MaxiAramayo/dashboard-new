import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCghAK2BUTQ089yj7WzESytt1-dHu3P4ec",
  authDomain: "ract-firebase-tc.firebaseapp.com",
  projectId: "ract-firebase-tc",
  storageBucket: "ract-firebase-tc.appspot.com",
  messagingSenderId: "241606466471",
  appId: "1:241606466471:web:c4125da2dc924f6d9e3482",
  // apiKey: "AIzaSyCghAK2BUTQ089yj7WzESytt1-dHu3P4ec",
  // authDomain: "ract-firebase-tc.firebaseapp.com",
  // projectId: "ract-firebase-tc",
  // storageBucket: "ract-firebase-tc.appspot.com",
  // messagingSenderId: "241606466471",
  // appId: "1:241606466471:web:c4125da2dc924f6d9e3482",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
