import axios from "axios";
import { useRouter } from "next/router";
import Home from "@/src/home";
import { parseCookies } from "nookies";
import { useEffect } from "react";
export default function Homee(props:{menuData:string[],haveLunch:string,id:string,role:string,isLoggedIn:any,name:string}){
     // const date=new Date();
     // useEffect(()=>{ axios.delete('.netlify/functions/confirmation')
     //                    .then(response=>{console.log(response.data)})},[date.getMinutes()])
     const router=useRouter();
     console.log(props.haveLunch,'haveLunch')
  return  <div>
     <Home menuData={props.menuData} haveLunch={props.haveLunch} id={props.id} role={props.role} name={props.name}/>
    </div>
}
export async function getServerSideProps(context:any){
    
     const key='aby_kLXIOPKANJD'
     const jwt=require('jsonwebtoken')
     const {parseCookies}=require('nookies')
     const {token}=parseCookies(context);
     if(token){
          const decodedPayLoad=jwt.decode(token);
          const {isLoggedIn,id,name,role}=decodedPayLoad;
          const data=await fetch('https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/menu');
          const menuData= await data.json();
          const response=await fetch(`https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/confirmation?id=${id}`);
          const userData=await response.json();
          const userVal=userData.length>0?userData[0].response:'';
          if(isLoggedIn){
              return {
                   props:{menuData:menuData[0].menu.split(','),haveLunch:userVal,isLoggedIn:decodedPayLoad,id:id,role:role,name:name}
                  }
         }
     }
           return {
            redirect:{
                destination:'/',
                permanent:false,
     }
}

}
