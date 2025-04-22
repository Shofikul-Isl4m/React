import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")
  


  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >

     <div className=" fixed flex flex-wrap justify-center  bottom-12  inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl ">
        <button className="px-4 outline-none  py-1 rounded-full text-white shadow-sm "
        style={{backgroundColor:"red"}} onClick={() => setColor("red")} >red</button>
        <button className="px-4 outline-none py-1 rounded-full text-white shadow-sm "
        style={{backgroundColor:"green"}} onClick={() => setColor("green")} >green</button>
        <button className="px-4 outline-none py-1 rounded-full text-white shadow-sm "
        style={{backgroundColor:"black"}} onClick={() => setColor("black")}>black</button>
      </div>


     </div>
    </div>
  )
}

export default App