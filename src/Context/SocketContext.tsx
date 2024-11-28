// SocketContext.tsx
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { createContext, useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

interface SocketContextType {
    socketID: string | undefined;
    connected: boolean;
    joinRoom: (roomID: string) => void;
    roomUsers: string[];
    Data: JoinRoomData[];
    AuthHandler: (data: authData) => void;
}

interface SocketProviderProps {
    children: React.ReactNode;
}

interface JoinRoomData {
    roomID: string;
    socketID: string | undefined;
    user: string;
    picture: string;
}
interface authData  {
    name: string | null,
    picture: string | null,
    email: string | null,
}

const SocketContext = createContext<SocketContextType | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
    const { getToken, getUser } = useKindeAuth();
    const [socketID, setSocketID] = useState<string | undefined>(undefined);
    const [connected, setConnected] = useState<boolean>(false);
    const [roomUsers, setRoomUsers] = useState<string[]>([]);
    const [Data, setData] = useState<JoinRoomData[]| []>([])
    const socketRef = useRef<Socket | null>(null);
    const user = getUser();
    
    const joinRoom = (roomID: string) => {
        if (socketRef.current) {
            const data: JoinRoomData = {
                roomID,
                socketID: socketRef.current.id,
                user: user?.given_name || "Anonymous",
                picture: user?.picture || "",
            };
            socketRef.current.emit("join-room", data);
        }
    };
    const AuthHandler = (data: authData) => {
        if (socketRef.current) {
            const authData: authData = {
                name: data.name,
                picture: data.picture,
                email: data.email
            };
            socketRef.current.emit("auth", authData);
        }
    }

    useEffect(() => {
        const socket = io("http://localhost:3000");
        socketRef.current = socket;

        const fetchToken = async () => {
            if (getToken) {
                const token = await getToken();
                console.log(`Token: ${token}`);
            }
        };
        fetchToken();

        socket.on("connect", () => {
            console.log("Connected to server");
            setSocketID(socket.id);
            setConnected(true);
        });

        socket.on("disconnect", () => {
            console.log("Disconnected from server");
            setSocketID(undefined);
            setConnected(false);
        });

        socket.on("room-users", (data) => {
            console.log("Room users:", data.users);
            setRoomUsers(data.users);
        });

        return () => {
            socket.disconnect();
        };
    }, [getToken]);

    return (
        <SocketContext.Provider value={{ socketID, connected, joinRoom, roomUsers ,AuthHandler,Data}}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketContext;
