import { FaCaretLeft } from "react-icons/fa";

export default function ToolTip(props:{children:any}){
    return <div className="">
        <div className="absolute right-20 flex items-center ">
            <div className="text-[20px] -mr-2 ">
                <FaCaretLeft/>
            </div>
            <div className=" p-2 font-mono  bg-black text-white ">
               Select here
            </div>
        </div>
         {props.children}
    </div>
}