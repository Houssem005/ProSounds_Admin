import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA53hG4c-8_BUC0FrlXyWhM35im7_V0P_8",
  authDomain: "pro-sounds-23dde.firebaseapp.com",
  projectId: "pro-sounds-23dde",
  storageBucket: "pro-sounds-23dde.appspot.com",
  messagingSenderId: "457963374055",
  appId: "1:457963374055:web:44790babdd6a3d69992942",
  measurementId: "G-EE2VPYZ1CQ",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export default storage;
