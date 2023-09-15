import { FaCheck } from "react-icons/fa";
import {useState} from 'react'
import LogoutButton from "./logOutButton";

export default function SubmitPopUp(props:{handleClose:()=>void,handleLogout:()=>void}){
    const [showInfo,setShowInfo]= useState(false);
    setTimeout(()=>setShowInfo(true),600)
    return <div className="absolute top-[50%] -translate-y-[50%] submitPopUp flex justify-center  left-[50%] -translate-x-[50%] w-[300px] h-[300px]  bg-white rounded-lg shadow-lg">       
        <div className={`${showInfo?'':'hidden'} text-center mt-[40px]`}>
        <div className="text-[50px]  bg-neutral-200  w-[70px] h-[70px] flex items-center justify-center rounded-full m-auto  text-black"><FaCheck/></div>
        <div className="mt-[60px] font-semibold ">Your response has been submitted successfully</div>
       <div className='pt-8 flex gap-5 justify-center'>
        <button className=" font-semibold active:text-slate-500 bg-black active:bg-gray-900 text-white p-2  text-xs rounded-md " onClick={()=>props.handleClose()}>Change response</button>
        <LogoutButton class="bg-black active:bg-gray-900 text-white"/>
       </div>
    </div>
    </div>
}