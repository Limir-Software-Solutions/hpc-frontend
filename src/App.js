import './App.css';

// Dependencies
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

import Footer from './components/Footer';
import Header from './components/Header';

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
]);

function App() {
  return (
      <>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </>
  );
}

export default App;
