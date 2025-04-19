import Header from "../comp/header";
import Footer from "../comp/Footer";
import MainContent from "../comp/MainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import ReactLoading from 'react-loading';
import { auth } from "../pages/firebase/config";
const Home = () => {
  const [user, loading, error] = useAuthState(auth);
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
      return(
        <>
        <Header/>
        <main>
          <h2>احلي مسا عليكوا</h2>
        </main>
        <Footer/>
        </>
      )
    }
  }
  if (user) {
    if (!user.emailVerified) {
      return (
        <>
          <Header />

          <main>
            <h4 style={{color:"brown"}}>welcome:{user.displayName}<span>🧡</span></h4>
            <h5 style={{color:"teal"}}>Please verify your e-mail to continue</h5>
            <button className="delet">Send email</button>
          </main>

          <Footer />
        </>
      );
    }
  }
  if (!user&&!loading) {
    return (
      <>
        <Helmet>
          <title>HOME Page</title>
          <meta name="description" content="HOMEEEEEEEEEEEE" />
        </Helmet>

        <Header />
        <main>
          <p>
            Please{" "}
            <Link
              style={{ color: "teal", textDecoration: "underline" }}
              to="/signin"
            >
              Sign in
            </Link>{" "}
            to continue.....
          </p>
        </main>

        <Footer />
      </>
    );
  }
};

export default Home;
