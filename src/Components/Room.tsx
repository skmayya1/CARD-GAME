import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Room: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between bg-gray-800">
      {/* Header*/}
      <Header />

      {/* Main Content Section */}
      <div className="flex flex-col justify-between  items-center p-6 w-full max-w-7xl mx-auto bg-gray-900 rounded-lg h-[80%]">
        {/* Top Section - Card Sec */}
        <div className="flex flex-col gap-12 h-[50%] w-full">
          {/*Andar bahar section */}
          <div className="gap-6 h-[40vh] flex flex-row justify-between items-center p-6 max-w-7xl mx-auto bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg">
            {/* Andar Section */}
            <div className="border-2 border-red-600 w-40 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-red-800 to-black shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-bold tracking-wide">
                ANDAR
              </span>
            </div>

            {/* Pool Section */}
            <div className="border-2 border-gray-500 w-40 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-semibold tracking-wide">
                //POOL
              </span>
            </div>

            {/* Bahar Section */}
            <div className="border-2 border-green-400 w-40 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-green-800 to-black shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-bold tracking-wide">
                BAHAR
              </span>
            </div>
          </div>

          {/*Card section */}
          <div className="flex justify-between items-center gap-4 p-4 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg">
            {/* Cards Section */}
            <div className="border-2 border-gray-300 w-64 h-80 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-bold">CARDS</span>
            </div>

            {/* Andar Section */}
            <div className="border-2 border-red-600 w-64 h-80 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-red-800 to-black shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-bold">ANDAR</span>
            </div>

            {/* Bahar Section */}
            <div className="border-2 border-green-400 w-64 h-80 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-green-800 to-black shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-bold">BAHAR</span>
            </div>

            {/* Selected Card Section */}
            <div className="border-2 border-gray-300 w-64 h-80 rounded-lg p-4 flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:scale-105 transition-transform duration-300">
              <span className="text-white text-xl font-bold">
                SELECTED CARD
              </span>
            </div>
          </div>
        </div>

        {/* Player Section and bet*/}
        <div className="flex justify-center gap-20  px-5 bg-gradient-to-b from-gray-900 to-black rounded-lg shadow-lg mt-4">
          {/* Player Section */}
          <div className="flex flex-wrap justify-between items-center w-full gap-6">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="flex flex-col w-52 items-center space-y-4 p-6 border border-gray-700 rounded-lg bg-gradient-to-b from-gray-800 to-gray-900 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-md w-40 h-14 hover:bg-red-700 shadow-sm">
                  ANDAR
                </button>
                <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-md w-40 h-14 hover:bg-green-700 shadow-sm">
                  BAHAR
                </button>
                <span className="text-white text-sm font-semibold">
                  PLAYER {i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Betting Section */}
          <div className="flex flex-col items-center gap-4 justify-between">
            {/* Balance Display */}
            <div className="flex items-center space-x-2 bg-gray-800 p-3 rounded-lg shadow-md">
              <span className="text-gray-300 text-lg">Balance:</span>
              <span className="font-bold text-lg text-white">$100.00</span>
            </div>

            {/* Bet Adjustment */}
            <div className="flex items-center space-x-4 bg-gray-900 p-4 rounded-lg border-2 border-gray-700 shadow-md">
              <button className="text-white font-bold text-lg px-3 hover:text-gray-400 transition-all duration-200">
                -
              </button>
              <span className="text-white text-lg font-semibold">10.00</span>
              <button className="text-white font-bold text-lg px-3 hover:text-gray-400 transition-all duration-200">
                +
              </button>
            </div>

            {/* Bet Button */}
            <button className="bg-green-600 text-white w-48 h-16 font-bold py-2 px-6 rounded-lg hover:bg-green-700 shadow-lg transition-all duration-300">
              PLACE BET
            </button>
          </div>
        </div>
      </div>

      {/* Footer*/}
      <Footer />
    </div>
  );
};

export default Room;
