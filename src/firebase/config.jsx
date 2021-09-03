
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCGUfhqeJ2SGYVOdrDinbLPUHAZQYLLjIA",
  authDomain: "twitter-3e7b8.firebaseapp.com",
  projectId: "twitter-3e7b8",
  storageBucket: "twitter-3e7b8.appspot.com",
  messagingSenderId: "512946504422",
  appId: "1:512946504422:web:f050ee9b541afe53073127",
  measurementId: "G-5H2MBQQ62T"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default db 