import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import SocketContext from "../Context/SocketContext";

const Room = () => {
  const socketContext = useContext(SocketContext);
  const params = useParams();
  const roomId = params.id;

  const { socketID, joinRoom, connected, roomUsers } = socketContext || {};

  useEffect(() => {
    if (roomId && socketID) {
      joinRoom?.(roomId);
    }
  }, [roomId, socketID, joinRoom]);

  return (
    <div className="h-screen font-mono w-full flex flex-col justify-center items-center bg-zinc-800">
      <h2 className="text-white text-lg font-bold mb-4">Room ID: {roomId}</h2>
      <div className="px-4 py-2 text-white font-semibold border border-zinc-700 rounded-lg">
        <h3 className="mb-2">Participants:</h3>
        {roomUsers && roomUsers.length > 0 ? (
          <ul>
            {roomUsers.map((user, index) => (
              <li key={index} className="font-thin">
                {user}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-400">No participants yet.</p>
        )}
      </div>
      <div className="mt-4 text-white">
        <p>Socket ID: {socketID || "Not connected"}</p>
        <p>Connected: {connected ? "Yes" : "No"}</p>
      </div>
    </div>
  );
};

export default Room;
