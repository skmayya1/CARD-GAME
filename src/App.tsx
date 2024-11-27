import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateRoom from "./Components/CreateRoom"
import Room from "./Components/Room";

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

