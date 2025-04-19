import React from 'react';
import Header from '../comp/header';
import Footer from '../comp/Footer';
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase/config'
import { useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import ReactLoading from 'react-loading';

const Signin = () => {
  const [user, loading, error] = useAuthState(auth);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
    const [errorr, seterrorr] = useState(false);
  const [errorfirebase, seterrorfirebase] = useState("");
  const navigate=useNavigate();
  useEffect(() => {
    if (user) {
      if (user.emailVerified) {
        return(
          navigate("/")
        )
      }
      
    }
    }, )
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
  if (!user) {
    return (
      <div>
      <Header/>
      <main className='signin'>
    <input onChange={(eo) => {
      setemail(eo.target.value)
    }
    } required placeholder='e-mail' type="e-mail" />
    <input onChange={(eo) => {
      setpassword(eo.target.value)
    }
    } required placeholder='password' type="password" />
    <button onClick={(eo) => {
      eo.preventDefault()
      const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // navigate("/")
  
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorr(true)
      seterrorfirebase(errorCode)
    });
    }
    }>Sign In</button>
    <p>Dont have an account <Link style={{color:"brown",textDecoration:"underline"}} to="/signup">Sign up</Link></p>
  
  
    {errorr&&<h1>{errorfirebase}</h1>}
  
      </main>
      <Footer/>
      </div>
    );
  }

}

export default Signin;
