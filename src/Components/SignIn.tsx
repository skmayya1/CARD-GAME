import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { FaGoogle } from 'react-icons/fa'; // Import Google icon from react-icons

const SignIn = () => {
    const { login, register } = useKindeAuth();

    return (
        <div className="h-screen w-full bg-black flex items-center justify-center">
            <div className="bg-zinc-900 p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
                <h2 className="text-white text-3xl font-semibold mb-4">Sign In</h2>
                <button
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center space-x-3 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => login()}
                    type="button"
                >
                    <FaGoogle className="text-white text-xl" />
                    <span>Log in with Google</span>
                </button>
                <button
                    className="w-full px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-full transition duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-600"
                    onClick={() => register()}
                    type="button"
                >
                    Register
                </button>
                <p className="text-gray-400 text-sm mt-4">Don't have an account? <a href="#" className="text-blue-400 hover:underline">Sign up</a></p>
            </div>
        </div>
    );
};

export default SignIn;
