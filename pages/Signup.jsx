import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import "./Signin.css"
import { useAuthState } from "react-firebase-hooks/auth";

import { Link, useNavigate } from 'react-router-dom';
import {auth} from "./firebase/config"
import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,updateProfile  } from "firebase/auth";
import { useState } from 'react';
import ReactLoading from 'react-loading';

const Signup = () => {
  const [user, loading, error] = useAuthState(auth);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("");
  const navigate=useNavigate()
  if (loading) {
    return(
      <>
      <Header/>
      <main>
      <ReactLoading className="loading"  type="spin" color="red" height={667} width={100} />
      </main>
      <Footer/>
      </>
    )
  }

  if (user) {
    if (!user.emailVerified) {
return(
  <>
  <Header/>
  <main>
<h5 style={{color:"black"}}>we send you an email to verify your account</h5>
<button className='delet'>
  send email
</button>
  </main>
  
  <Footer/>
  </>
)
    
    }
  }
  if (!user&& !loading) {
    return (
      <div>
      <Header/>
      <main className='signin'>
        <p style={{marginBottom:"15px"}}>Create anew account</p>
        <input value={username} onChange={(eo) => {
      setusername(eo.target.value)
    }
    } required placeholder='user-Name' type="text" />
    <input value={email} onChange={(eo) => {
      setemail(eo.target.value)
    }
    } required placeholder='e-mail' type="e-mail" />
    <input value={password} onChange={(eo) => {
      setpassword(eo.target.value)
    }
    } required placeholder='password' type="password" />
    <button onClick={(eo) => {
      eo.preventDefault()
      const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
  
      // Signed up 
      console.log("doneeee")
      const user = userCredential.user;
      console.log(user)
      sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("send")
      // Email verification sent!
      // ...
    });
      
      updateProfile(auth.currentUser, {
        displayName: username, 
      }).then(() => {
        console.log("doneee")
        
        // Profile updated!
        // ...
      }).catch((error) => {
        console.log("error")
        // An error occurred
        // ...
      });console.log(user)
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    setemail("")
    setpassword("")
    }
    }>Sign up</button>
    <p>Already have an account <Link to="/signin">Sign in</Link></p>
  
      </main>
      <Footer/>
      </div>
    );
  }
  
}

export default Signup;
