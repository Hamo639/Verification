 import { createBrowserRouter, RouterProvider } from "react-router-dom";
 import Home from "./pages/home";
 import HTML from "./pages/html";
 import Css from "./pages/css";
 import {useContext } from "react";
 import ThemeContext from "./comp/Themecontext";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Profile from "./pages/Profile";
 const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>SORROY.........</h1>,
  },

  {
    path: "/html",
    element: <HTML />,
  },

  {
    path: "/css",
    element: <Css />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
function App() {
  const {theme} = useContext(ThemeContext);


  return (
    <div className={`${theme}`}>
    <RouterProvider router={router} />
    </div>

  );
}

export default App;
