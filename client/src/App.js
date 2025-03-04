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
import ForgetPassword from "./pages/forgetPassword/forgetPassword"
import UpdatePassword from "./pages/updatePassword/updatePassword"
import About  from "./pages/About/about"
import Services from "./pages/services/services"
import Terms from "./pages/terms/terms"
import Dashboard from './pages/Dashboard/dashboard'
import UserInfo from "./pages/userInfo/newsLetter"
import AdminPanel from "./pages/userInfo/userInfo"
import PrivateRoute from './components/privateRoutes';


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
      ,
      {
        path: "/dashboard",
        element: <PrivateRoute component={Dashboard} />
      }
      ,
      {
        path: "/admin",
        element: <PrivateRoute component={AdminPanel}  adminOnly/>
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

  {
    path: "/forget_password",
    element: <ForgetPassword />,
  },
  {
    path: "/update-password",
    element: <UpdatePassword />,
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
