import { FaSearch } from "react-icons/fa"
import getdate from "../models/Date"
export default function Table(props:{data:any}){
    const  response  =props.data;
    console.log(response,'uiuiuiuiou')
    return <div className="mt-3 w-[400px] min-h-[300px] max-h-[550px] overflow-scroll scrollbar bg-zinc-200 shadow-lg rounded-lg p-3 absolute right-3 top-12">
           <div className="flex w-full gap-5 justify-center">
            <div className="flex bg-slate-300 rounded-md p-1 items-center gap-3">
              <div className="text-slate-600 text-[10px]"><FaSearch/> </div>  
            <input type="text" placeholder="yyyy-mm-dd" className="bg-slate-300 text-[12px] outline-none"/>
            </div>
            {/* <div className="w-[2px] h-7 bg-black"></div> */}
            <div className="font-semibold font-mono">
               {`${getdate('month')}-${getdate('year')}`}
            </div>
           </div>
           <div className="flex w-full mt-3 font-medium bg-slate-800 text-white">
            <div className="w-[50%] text-center">Date</div>
            <div className="w-[50%] text-center">Count</div>
           </div>
          {response.map((item: any)=> <div key={item.id} className="flex w-full mt-1  text-sm border-b-[0.5px] border-solid border-slate-400 pb-1 ">
            <div className="w-[50%] text-center">{item.date}</div>
            <div className="w-[50%] text-center">{item.count}</div>
             </div>  )}    
             
</div>
}