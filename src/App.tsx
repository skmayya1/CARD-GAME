import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateRoom from "./Components/CreateRoom"
import "./Utils/Socket"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />
  }
])
const App = () => {
  return <RouterProvider router={router} />;
}

export default App

