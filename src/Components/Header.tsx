const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 shadow-md">
        <h1 className="text-2xl text-white font-bold">Andar Bahar</h1>

        <div className="flex items-center font-bold text-2xl space-x-2 text-white">
              <span>Balance :</span>
              <span className="font-bold text-2xl">100.00</span>
            </div>
       
      </div>
  )
}

export default Header