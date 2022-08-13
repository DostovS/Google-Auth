import React, { useState } from "react";
import Firebase from "../Firebase/Firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from "@mui/material/Button";
Firebase();
export default function GoogleSign() {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const handleGoogleSign = () => {
    signInWithPopup(auth, provider).then((res) => setUser(res.user));
  };
  return (
    <div className="container">
      <Button 
        variant="contained" 
        color="success" 
        onClick={handleGoogleSign}
        style={{display: "block", margin: "0 0 40px 0"}}>
        Continue with Google
      </Button>
      <img 
        src={user.photoURL} 
        alt="" />
      <h2>
        Your name:  
        <code>
          {user.displayName}
        </code>
      </h2>
      <h2>
        Your email:
        <code>
          {user.email}
        </code>
      </h2>
    </div>
  );
}
