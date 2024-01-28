import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./views/auth/Login";
import Signup from "./views/auth/Signup";
import Dashboard from "./views/dashboard/Dashboard";
import Account from "./views/account/Account";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/account/:accountId",
    element: <Account />,
  },
  {
    path: "*",
    element: <>Error</>
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
