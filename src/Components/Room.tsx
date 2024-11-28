import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Room: React.FC = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-between bg-gray-800">
      {/* Header*/}
      <Header />

      {/* Main Content Section */}
      <div className="flex flex-col justify-between items-center p-6 w-full max-w-7xl mx-auto bg-gray-900 rounded-lg h-[80%]">
        {/* Top Section - Card Sec */}
        <div className="flex flex-col gap-12 h-[50%] w-full">

        {/*Andar bahar section */}
        <div className="gap-4  h-[40vh]  flex flex-row justify-between items-center p-6 max-w-7xl mx-auto">

          <div className="border-2 border-red-600 w-40 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl font-bold">ANDAR</span>
          </div>
          <div className="border-2 border-white px-0 w-40 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl  ">//pool</span>
          </div>
          <div className="border-2 border-green-400 w-40 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl font-bold">BAHAR</span>
          </div>

          </div>

          {/*Card section */}
          <div className="flex justify-between items-center">
          <div className="border-2 border-white w-64 h-80 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl font-bold">CARDS</span>
          </div>
          <div className="border-2 border-red-600 w-64 h-80 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl font-bold">Andar</span>
          </div>
          <div className="border-2 border-green-400 w-64 h-80 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl font-bold">Bahar</span>
          </div>
          <div className="border-2 border-white w-64 h-80 rounded-lg p-4 flex justify-center items-center bg-black">
            <span className="text-white text-xl font-bold">SELECTED CARD</span>
          </div>
          </div>
        </div>

        {/* Player Section */}
        <div className="flex justify-between items-center  w-full pr-2  mt-6">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex flex-col   w-52 items-center space-y-2">
              <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-md w-40 h-14 hover:bg-red-700">
                ANDAR
              </button>
              <button className="bg-green-600 text-white font-bold py-2 px-4 rounded-md w-40 h-14 hover:bg-green-700">
                BAHAR
              </button>
              <span className="text-white text-sm">PLAYER {i + 1}</span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-3 justify-between w-100 mt-8">
            {/* Balance Display */}
            <div className="flex items-center space-x-2 text-white">
              <span>Balance:</span>
              <span className="font-bold text-lg">100.00</span>
            </div>

            {/* Bet Adjustment */}
            <div className="flex items-center space-x-2 bg-gray-900 p-3 rounded-md border-2 border-white">
              <button className="text-white font-bold text-lg px-3 hover:text-gray-400">
                -
              </button>
              <span className="text-white text-lg">10.00</span>
              <button className="text-white font-bold text-lg px-3 hover:text-gray-400">
                +
              </button>
            </div>

            {/* Bet Button */}
            <button className="bg-green-600 text-white w-44 h-20 font-bold py-2 px-6 rounded-md hover:bg-green-700">
              BET
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
