import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebaseConfig from './firebaseConfig';


// Initialize Firebase
 const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);

const db = getFirestore(app);


export default db


