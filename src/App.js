// Dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Signup from "./pages/Signup";
import ConfirmAccount from "./pages/ConfirmAccount";
import NewPassword from "./pages/NewPassword";

import Footer from './components/Footer';
import Header from './components/Header';
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
      path: "login",
      element: <Login />,
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "confirmar-cuenta/:id",
    element: <ConfirmAccount />,
  },
  {
    path: "nueva-contrasena/:token",
    element: <NewPassword />,
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
