import logo from './logo.svg';
import './App.scss';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet

} from "react-router";
import Navbar  from "./components/navbar/navbar"
import Footer  from "./components/footer/footer"
import Home  from "./pages/home/home"
import Contact  from "./pages/contact/contact"
import Register  from "./pages/register/register"
import Login  from "./pages/login/login"
import About  from "./pages/About/about"
import Services from "./pages/services/services"
import Terms from "./pages/terms/terms"
import UserInfo from "./pages/userInfo/newsLetter"


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      }
      ,
       {
        path: "/about",
        element: <About/>
      }
      ,
      {
        path: "/services",
        element: <Services />
      }

       ,
      {
        path: "/user-info",
        element: <UserInfo />
      }
      ,
      {
        path: "/terms",
        element: <Terms />
      }
    ]
  },
      {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

    
  ])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
