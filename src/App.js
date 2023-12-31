// Dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from "./pages/Signup";
import ConfirmAccount from "./pages/ConfirmAccount";
import NewPassword from "./pages/NewPassword";
import Infraestructura from "./pages/Infraestructura";
import Contact from "./pages/Contact";
import AcercaDe from "./pages/AcercaDe";
import Equipo from "./pages/Equipo";
import Noticias from "./pages/Noticias";
import NewsDetail from "./pages/NewsDetail";
import Papers from "./pages/Papers";

// Layout
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "confirmar-cuenta/:id",
    element: <ConfirmAccount />,
  },
  {
    path: "olvide-contrasena",
    element: <ForgotPassword/>,
  },
  {
    path: "nueva-contrasena/:token",
    element: <NewPassword />,
  },
  {
    path: "infraestructura",
    element: <Infraestructura/>,
  },
  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "AcercaDe",
    element: <AcercaDe />,
  },
  {
    path: "Equipo",
    element: <Equipo />,
  },
  {
    path:"Noticias",
    element: <Noticias />,
  },
  {
    path:"detail/:id",
    element: <NewsDetail />,
  },
  {
    path:"Papers",
    element: <Papers />,
  },
]);

function App() {
  return (
      <AuthProvider>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </AuthProvider>
  );
}

export default App;
