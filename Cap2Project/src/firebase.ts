import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCV3ub5wuqR1SgDT-EoEcPZig-2kkN86qo",
  authDomain: "my-capstone-project-c0c32.firebaseapp.com",
  projectId: "my-capstone-project-c0c32",
  storageBucket: "my-capstone-project-c0c32.appspot.com",
  messagingSenderId: "899713742781",
  appId: "1:899713742781:web:e239024127ceaee21b84d4",
  measurementId: "G-10VRFD0W23",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics, logEvent };
