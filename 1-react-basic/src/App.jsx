
import { useState } from 'react'
import './App.css'

function App() {
  let [color,setColor] = useState("black")

  return (
    <>
      {/* <h3 className=' text-blue-800 bg-green-400'>Lorem ipsum dolor sit amet.</h3> */}
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap bottom-10 inset-x-0 justify-center px-2">
        <div className="flex flex-wrap bg-white rounded-3xl px-2 py-1 gap-2 ">
        <button 
         onClick={() => setColor("red")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"red"}}> Red</button>
        <button
         onClick={() => setColor("blue")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"blue"}}> blue</button>
        <button
         onClick={() => setColor("orange")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"orange"}}> orange</button>
        <button
         onClick={() => setColor("yellow")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"yellow"}}> yellow</button>
        <button
         onClick={() => setColor("green")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"green"}}> green</button>
        <button
         onClick={() => setColor("purple")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"purple"}}> purple</button>
        <button
         onClick={() => setColor("pink")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"pink"}}> pink</button>
        <button
         onClick={() => setColor("brown")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"brown"}}> brown</button>
        <button
         onClick={() => setColor("gray")}
         className='outline-none px-2 py-1 rounded-3xl ' style={{backgroundColor:"gray"}}> gray</button>
        </div>
      </div>
        
      </div>
    </> 
  )
}

export default App
