import { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
    socketID: string | null;
    connected: boolean;
    JoinRoom: (roomID: string, socketID: string) => void;
    roomUsers: string[];
}

interface SocketProviderProps {
    children: React.ReactNode;
}

const SocketContext = createContext<SocketContextType | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const [socketID, setSocketID] = useState<string | null>(null);
    const [connected, setConnected] = useState<boolean>(false);
    const socketRef = useRef<Socket | null>(null);
    const [roomUsers, setRoomUsers] = useState<string[]>([]);

    const JoinRoom = (roomID: string, socketID: string) => {
        const data = { roomID: roomID, socketID: socketID };
        console.log(`Joining room: ${roomID}`);
        socketRef.current?.emit("join-room", data);
    };

    useEffect(() => {
        const socket = io("http://localhost:3000");
        socketRef.current = socket;

        socket.on("connect", () => {
            console.log("Connected to server");
            setSocketID(socket.id as string);
            setConnected(true);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from server");
            setSocketID(null);
            setConnected(false);
        });

        socket.on("connect_error", (error) => {
            console.error("Connection error:", error);
        });

        socket.on("user-connected", () => {
            console.log("A user joined the room");
        });

        // Subscribe to 'room-users' only once
        socket.on('room-users', (data) => {
            console.log(`Room Users: ${data}`);
            setRoomUsers((prevRoomUsers) => {
                const newUsers = data.users || [];
                // Only update state if the users list has actually changed
                if (JSON.stringify(newUsers) !== JSON.stringify(prevRoomUsers)) {
                    return newUsers;
                }
                return prevRoomUsers; // No update if the users list is the same
            });
        });

        return () => {
            socket.off('room-users'); // Unsubscribe on unmount
            socket.disconnect(); // Disconnect the socket
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <SocketContext.Provider value={{ socketID, connected, JoinRoom, roomUsers }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;
