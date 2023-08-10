import { FaCheck } from "react-icons/fa";
import {useState} from 'react'

export default function SubmitPopUp(props:{handleClose:()=>void}){
    const [showInfo,setShowInfo]= useState(false);
    setTimeout(()=>setShowInfo(true),600)
    return <div className="absolute top-[50%] -translate-y-[50%] submitPopUp flex justify-center  left-[50%] -translate-x-[50%] w-[300px] h-[300px] bg-neutral-200 rounded-lg shadow-lg">       
        <div className={`${showInfo?'':'hidden'} text-center mt-[40px]`}>
        <div className="text-[50px] text-white bg-black w-[70px] h-[70px] flex items-center justify-center rounded-md m-auto"><FaCheck/></div>
        <div className="mt-[60px] font-semibold ">Your response has been submitted successfully</div>
       <div className='pt-8'>
        <button className=" font-semibold active:text-slate-500" onClick={()=>props.handleClose()}>OK</button>
       </div>
    </div>
    </div>
}