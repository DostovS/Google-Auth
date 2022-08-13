import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCI7miCFWkpu7jwKGYq2XVDzTrAm10RS9g",
  authDomain: "test-b21fc.firebaseapp.com",
  projectId: "test-b21fc",
  storageBucket: "test-b21fc.appspot.com",
  messagingSenderId: "583336534549",
  appId: "1:583336534549:web:2c90680a878a782039a41c",
  measurementId: "G-5YKLT1PTGR"
};
export const Firebase = () => {
  initializeApp(firebaseConfig)
}
export default Firebase;