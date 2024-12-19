import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

 const firebaseConfig = {
    apiKey: "AIzaSyDrXrfejKBW2t1V_WO18S7H0TV9DXb6jQg",
    authDomain: "knot-store.firebaseapp.com",
    projectId: "knot-store",
    storageBucket: "knot-store.appspot.com",
    messagingSenderId: "849967450516",
    appId: "1:849967450516:web:b1663bd3f53686b349e781",
    measurementId: "G-H826L431WY"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);