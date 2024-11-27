import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateRoom from "./Components/CreateRoom"
<<<<<<< HEAD
import "./Utils/Socket"
=======
import Room from "./Components/Room";
>>>>>>> refs/remotes/origin/master

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />
  },
  {
    path : "/room",
    element:<Room />
  }
])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App

