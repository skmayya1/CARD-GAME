import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SocketContext from "../Context/SocketContext";

const CreateRoom = () => {
  const navigate = useNavigate();
  const { getUser } = useKindeAuth();
  const user = getUser();

  const createRoomHandler = () => {
    const generateRoomId = () => Math.random().toString(36).substring(2, 7).toUpperCase();
    const roomId = generateRoomId();
    navigate(`/room/${roomId}`);
  };
  const socketContext = useContext(SocketContext);

  const { AuthHandler } = socketContext || {};

  useEffect(() => {
    if (user) {
      const data = {
        name: user.given_name,
        email: user.email,
        picture: user.picture,
      }
      if (AuthHandler) {
        AuthHandler(data);
      }
    }
  }, [user, AuthHandler]);

  return (
    <div className="bg-[#191818] h-screen w-full flex items-center justify-center">
      <button
        onClick={createRoomHandler}
        className="bg-[#33312E] font-mono text-center px-6 py-3 w-[40vh] text-3xl text-white rounded-lg"
      >
        Create Room
      </button>
    </div>
  );
};

export default CreateRoom;
