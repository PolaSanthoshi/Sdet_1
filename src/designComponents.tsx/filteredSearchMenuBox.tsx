import { useEffect, useState } from "react";
import  axios  from "axios";
export default function SearchMenu(props:{itemtoSearch:string,setSelectedItem:(item:string)=>void,apiMenu:string[]}){
 const [StoredMenu,setStoredMenu]=useState(props.apiMenu)
       useEffect(()=>{
        axios.get('/.netlify/functions/storedMenu')
        .then((response)=>{console.log(response.data);setStoredMenu(response.data)})
    },[])
    useEffect(()=>{setItemEnteredInSearchBar(props.itemtoSearch.replaceAll(' ','').trim().toLowerCase())},[props.itemtoSearch])
    const [isValueSelected,setIsValueSelected]=useState(false);
    const [itemEnteredInSearchBar,setItemEnteredInSearchBar]=useState(props.itemtoSearch.replaceAll(' ','').trim().toLowerCase());
    const [filteredMenu,setFilteredMenu]=useState<any>([])
    useEffect(()=>{setIsValueSelected(false);
        setFilteredMenu(StoredMenu.filter((item)=>itemEnteredInSearchBar===item.replaceAll(' ','').trim().toLowerCase().substring(0,itemEnteredInSearchBar.length)))},[itemEnteredInSearchBar])
    function onItemClick(elem:string){
         
         props.setSelectedItem(elem)
    }
    return <div className="relative -top-5 ">{
  itemEnteredInSearchBar&&isValueSelected==false&&  <div className="w-[200px] bg-neutral-100  shadow-xl mt-2 h-[100px] rounded-md flex-col gap-2 items-center m-auto px-3 py-1 overflow-y-scroll break-words scrollbar">
 { filteredMenu.length!==0?filteredMenu.map((elem:string,index:number)=><div key={index} onClick={()=>onItemClick(elem)}  className={` border-solid border-slate-400 border-b-[1px] p-1 text-sm  text-black font-mono font-medium cursor-default `}>{elem}</div>):'No Items Found'}
 </div>}
 
 </div>
}
