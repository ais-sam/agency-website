

import {useState } from "react";

const FaqCard = ({question,answer}) => {
    const [isOpen,setIsOpen] = useState(false)
    const handleClick = ()=>{
        setIsOpen(()=>{
            setIsOpen(!isOpen)
        })
        
    }
  return (
    <div>
    <button onClick={handleClick} className={`text-start p-4 shadow-md flex items-center justify-between mb-3 transition w-full ${isOpen ? "bg-w-yellow text-white" : "bg-white"}`}>
      <p className="text-md uppercase">{question} </p>
      <i className={`fa-solid fa-chevron-up transition ${isOpen ? "rotate-180 text-white" :"text-gray-400" } `}></i>
    </button>
    {isOpen && 
    <div className="mt-4 font-roboto">
        {Array.isArray(answer) ? 
        <ul className=" my-3  pl-8 leading-10 list-decimal">
            {answer.map((answer,index)=> <li key={index} className="my-2">{answer}</li>)}
        </ul>
        :
        <p className="text-gray-500 leading-7 text-base font-extralight ">{answer}</p>
    }
    </div>
    }
    </div>
  );
}

export default FaqCard