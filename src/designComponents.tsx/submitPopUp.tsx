import { FaCheck } from "react-icons/fa";
import {useState} from 'react'
import LogoutButton from "./logOutButton";

export default function SubmitPopUp(props:{handleClose:()=>void}){
    const [showInfo,setShowInfo]= useState(false);
    setTimeout(()=>setShowInfo(true),600)
    return <div className="absolute top-[50%] -translate-y-[50%] submitPopUp flex justify-center  left-[50%] -translate-x-[50%] w-[300px] h-[300px]  bg-white rounded-lg shadow-lg">       
        <div className={`${showInfo?'':'hidden'} text-center mt-[40px]`}>
        <div className="text-[50px]  bg-neutral-200  w-[70px] h-[70px] flex items-center justify-center rounded-full m-auto  text-black"><FaCheck/></div>
        <div className="mt-[60px] font-semibold ">Your response has been submitted successfully</div>
        <button className='mt-4 m-auto font-bold active:text-slate-600' onClick={()=>props.handleClose()}>
          OK
       </button>
    </div>
    </div>
}