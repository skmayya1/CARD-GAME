import { useContext, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SocketContext from '../Context/SocketContext';
import { useParams } from 'react-router-dom';

const Room = () => {
  const socketContext = useContext(SocketContext);
  const params = useParams();
  const roomId = params.id;
  console.log(`Room ID: ${roomId}`);

  const { socketID, JoinRoom, connected, roomUsers } = socketContext || {};

  useEffect(() => {
    if (roomId && socketID) {
      JoinRoom?.(roomId, socketID);
    }
  }, [roomId, socketID, JoinRoom]);

  console.log(`Socket ID: ${socketID}`);
  console.log(`Connected: ${connected}`);

  return (
    <div className="h-screen w-full flex flex-col justify-between">
      <Header />
      <ul>
        {roomUsers?.map((user, index) => (
          <ul>
            <li>user:</li>
            <li key={index}>{user}</li>
          </ul>
        ))}
      </ul>
      <Footer />
    </div>
  );
};

export default Room;
