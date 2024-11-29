const CreateRoom = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-700 to-gray-900 h-screen w-full flex flex-col items-center justify-center">
      {/* Game Name Header */}
      <header className="absolute top-20 text-8xl font-bold text-white tracking-wide ">
        ANDAR BAHAR
      </header>

      {/* Centered Box */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-80">
        {/* Heading */}
        <h1 className="text-2xl text-white font-semibold text-center mb-6">Welcome</h1>

        {/* Buttons */}
        <div className="space-y-4">
          <button
            onClick={() => (window.location.href = '/room')}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Create Room
          </button>

          <button
            onClick={() => (window.location.href = '/join-room')}
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            Join Room
          </button>

          <button
            onClick={() => (window.location.href = '/login')}
            className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition focus:outline-none focus:ring-4 focus:ring-gray-400"
          >
            Login
          </button>

          <button
            onClick={() => (window.location.href = '/signup')}
            className="w-full bg-gray-700 text-white py-3 rounded-md hover:bg-gray-600 transition focus:outline-none focus:ring-4 focus:ring-gray-400"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateRoom;
