import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCoYH-FqpvavDLr3amjXOR8A-6AbUMVG8o",
  authDomain: "fir-57b91.firebaseapp.com",
  projectId: "fir-57b91",
  storageBucket: "fir-57b91.appspot.com",
  messagingSenderId: "506101500215",
  appId: "1:506101500215:web:df2a24950e937c336b32b2",
  measurementId: "G-S910QXQQGD"
};
export const Firebase = () => {
  initializeApp(firebaseConfig)
}
export default Firebase;