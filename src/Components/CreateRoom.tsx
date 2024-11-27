const CreateRoom = () => {

  const createRoomhandler =  () => {
    const generateRoomId = () => { 
      return Math.random().toString(36).substring(2, 7).toUpperCase()
    }
    const roomId = generateRoomId()
    window.location.href = `/room/${roomId}`

  }
  return (
      <div>
          <div className="bg-[#191818] h-screen w-full flex items-center justify-center">
        <button onClick={createRoomhandler}
                  className="bg-[#33312E] font-mono text-center px-6 py-3 w-[40vh] text-3xl text-white rounded-lg">Create Room</button>
          </div>
    </div>
  )
}

export default CreateRoom