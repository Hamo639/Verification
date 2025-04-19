


import Header from '../comp/header';
import Footer from '../comp/Footer';
import MainContent from '../comp/MainContent';
import { Helmet  } from 'react-helmet-async';
import {useEffect  } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../pages/firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Html = () => {
  const [user, loading, error] = useAuthState(auth);
const navigate=useNavigate()
  useEffect(() => {
  if (!user) {
    navigate("/")
  }
  })
  return (
    <>
         <Helmet>
        <title>HTML Page</title>
        <meta name="description" content="HTMLLLLLLLLLLLLLLLL" />
      </Helmet>
    <Header />
    <MainContent pageName="HTML Page"  />   
    <Footer />
  </>
  );
}

export default Html;
