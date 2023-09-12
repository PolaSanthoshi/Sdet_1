import { months } from "../models/Date"
export default function SideNav(props:{showSideNav?:boolean,onMonthclick:(monthClicked:number)=>void}){
    return <div>
    <div className={`w-full sideNavHeight overflow-scroll  bg-blue-300   scrollbar pl-4 }`}>
      {months.map((item,index)=><div key={index} onClick={()=>props.onMonthclick(index)}  className={`sm:font-bold sm:text-base text-xs font-semibold lg:w-[200px] md:w-[130px] p-2 bg-white rounded-md m-2 cursor-pointer active:bg-blue-500 overflow-hidden`}
      >{item}</div>)}

    </div>
    </div>
}