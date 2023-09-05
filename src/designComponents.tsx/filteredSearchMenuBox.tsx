// const Storedmenu=['Alloo Jeera','Aloo matar','Chole','Dal','Raita','Roti','Rice']
import axios from "axios";
import { useEffect, useState } from "react";
export default function SearchMenu(props:{itemtoSearch:string,setSelectedItem:(item:string)=>void}){
    const [StoredMenu,setStoredMenu]=useState([''])
    useEffect(()=>{setItemEnteredInSearchBar(props.itemtoSearch)},[props.itemtoSearch])
    useEffect(()=>{
        axios.get('/.netlify/functions/storedMenu')
        .then((response)=>{console.log(response.data);setStoredMenu(response.data)})
    },[])
    const [isValueSelected,setIsValueSelected]=useState(false);
    const [itemEnteredInSearchBar,setItemEnteredInSearchBar]=useState(props.itemtoSearch.replaceAll(' ','').trim().toLowerCase());
    const [filteredMenu,setFilteredMenu]=useState<any>([])
    useEffect(()=>{setIsValueSelected(false);setFilteredMenu(StoredMenu.filter((item)=>itemEnteredInSearchBar===item.toLowerCase().substring(0,itemEnteredInSearchBar.length)))},[itemEnteredInSearchBar])
    function onItemClick(elem:string){
         props.setSelectedItem(elem)
    }
    return <div className="relative -top-5 ">{
  itemEnteredInSearchBar&&isValueSelected==false&&  <div className="w-[200px] bg-neutral-100  shadow-xl mt-2 h-[100px] rounded-md flex-col gap-2 items-center m-auto px-3 py-1 overflow-y-scroll break-words scrollbar">
 { filteredMenu.length!==0?filteredMenu.map((elem:string,index:number)=><div key={index} onClick={()=>onItemClick(elem)}  className={` border-solid border-slate-400 border-b-[1px] p-1 text-sm  text-black font-mono font-medium cursor-default `}>{elem}</div>):'No Items Found'}
 </div>}
 
 </div>
}