import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import {useEffect  } from 'react'
import { useAuthState } from "react-firebase-hooks/auth";
import ReactLoading from 'react-loading';

import { auth } from "../pages/firebase/config";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
const Css = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate=useNavigate()
    useEffect(() => {
    if (!user &&!loading) {
      navigate("/")
    }
    })
    useEffect(() => {
      if (user) {
      if (!user.emailVerified) {
        return(
          navigate("/")
        )
      }  
      }
    }
    )
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
      if (user.emailVerified) {
        return (
          <>
            <Helmet>
              <title>CSS Page</title>
              <meta name="description" content="csssssssssssssssssssss" />
            </Helmet>
      
            <Header />
      
            <MainContent pageName="CSS Page" />
      
            <Footer />
          </>
        );
      }
      
    }

};

export default Css;
