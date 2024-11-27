import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateRoom from "./Components/CreateRoom"
import Room from "./Components/Room";
import { SocketProvider } from "./Context/SocketContext";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import SignIn from "./Components/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateRoom />
  },
  {
    path : "/room/:id",
    element: <SocketProvider> <Room /></SocketProvider>
  },
  {
    path: "/login",
    element: <SignIn />
  }
])
const App = () => {
  return <KindeProvider
    clientId="9f463ec9d2f243b4b6ca0f0d4c684f47"
    domain="https://andharbahar.kinde.com"
    redirectUri="http://localhost:5173"
    logoutUri="http://localhost:5173"
  ><RouterProvider router={router} /></KindeProvider>
}

export default App

