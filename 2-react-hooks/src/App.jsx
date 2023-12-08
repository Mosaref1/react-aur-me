import { useState,useCallback,useEffect, useRef } from 'react'
import './App.css'

function App() {
  // logic 
  const [length,setLength] = useState(8);
  const [numberAllow,setNumberAllow] = useState(false);
  const [charaterAllow,setCharaterAllow] = useState(false);
  const [Password,setPassword] = useState("");
  const PasswordRef = useRef(null)

  const PasswordGenrator = useCallback( () => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllow) str += "12345678" ;
    if (charaterAllow) str += "!@$%^&*(){}[]~" ;

    for (let i = 1; i <= length; i++) {
      let char =Math.floor(Math.random()* str.length + 1)
      pass += str.charAt(char)
    }
  setPassword(pass)
  } ,[length,numberAllow,charaterAllow,setPassword])
  
  const copytopassword = useCallback(() => {
    window.navigator.clipboard.writeText(Password)
  },[Password])


  useEffect(()=> {
    PasswordGenrator()
  },[length,charaterAllow,numberAllow,PasswordGenrator])


  return (
    <>
     <div className="bg-blue-600 w-full h-screen flex justify-center ">
      <div className="w-1/2 h-40 bg-gray-600 mt-7 rounded-md">
      <div className=" flex justify-center mt-7">
        <input value={Password} type="text" placeholder='Password'
        ref={PasswordRef}
         readOnly className='outline-none  px-16 py-2 ml-3' />
        <button 
        onClick={copytopassword}
        className='bg-blue-900 text-white outline-none  px-3  '
        >Copy</button>
        </div>
        <div className=" flex justify-center mt-7">
          <input className='outline-none mr-3 cursor-pointer' 
          min={8} max={99} 
          value={length}
          onChange={(e) => {setLength(e.target.value)}}
          
          type="range" id="" /> 
          <label className='text-white'>Lenth: {length} </label>
          <input type="checkbox" className='ml-3 outline-none '  defaultChecked={numberAllow} onChange={() => {
            setNumberAllow((prev) => !prev);
          }} />
          <label className='text-white'>Number</label>
          <input type="checkbox" className='ml-3 outline-none ' 
            defaultChecked={charaterAllow}
            onChange={() => {
              setCharaterAllow((prev) => !prev)
            }}
          />
          <label className='text-white'>Charater</label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
