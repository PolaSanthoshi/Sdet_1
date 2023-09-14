import { months } from "../models/Date"
export default function SideNav(props:{showSideNav?:boolean,onMonthclick:(monthClicked:number)=>void}){
    return <div>
    <div className={`w-full sideNavHeight overflow-scroll  bg-blue-300   scrollbar flex justify-center }`}>
      <div>
      {months.map((item,index)=><div key={index} onClick={()=>props.onMonthclick(index)}  className={`sm:font-bold sm:text-base text-xs font-semibold lg:w-[200px] md:w-[130px] xs:w-[110px] p-2 bg-white rounded-md my-2  cursor-pointer active:bg-blue-500 overflow-hidden`}
      >{item}</div>)}
      </div>
    </div>
    </div>
}