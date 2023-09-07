import { FaArrowRight, FaPlane } from "react-icons/fa";

export default function MenuBox(props: { menuItems: string[]; backgroundColor: string }) {

    return <div className="flex justify-center items-center ">
      <div className=" w-[300px] h-[300px]  relative Border rounded-3xl">
      <div className="absolute w-[100px]  bg-white -left-5 -top-5 rounded-full flex justify-center items-center overflow-hidden ">
        <img src='/images/menuLogo.jpg' className="2xs:hidden xs:hidden "/>
      </div>
      <div className="absolute p-1 text-sm font-semibold -top-3 right-3 rounded-md bg-yellow-400">Today &apos;s Menu</div>
      {/* <img src='/images/arrow.jpg '/> */}
      <div className="mt-20 font-semibold text-lg font-mono ">
      {props.menuItems&&props.menuItems.map((element,index)=><div key={index} className="flex gap-3 items-center  ml-[50px] break-all ">
       <div className="text-[10px]"><FaArrowRight/></div>
        {element[0].toUpperCase()+element.slice(1)}</div>
     )}
      </div>
   
    </div>
    </div>
  }
 
  
  
  
  
  
  
  
  