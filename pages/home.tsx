import axios from "axios";
import { useRouter } from "next/router";
import Home from "@/src/home";
import { parseCookies } from "nookies";
export default function Homee(props:{menuData:string[],userData:{id:string,haveLunch:string},id:string,role:string,cookieValue:any}){
     const router=useRouter();
     const {cookieValue}=props
     console.log(cookieValue.isLoggedIn,typeof cookieValue.isLoggedIn)
     console.log(cookieValue.id,typeof cookieValue.id)
     console.log(cookieValue.role,typeof cookieValue.role)
     // const {id}=router.query;
  return  <div>
     <Home menuData={props.menuData} userData={props.userData} id={props.id} role={props.role}/>
    </div>
}
export async function getServerSideProps(context:any){
    
     // const {id,role}=context.query;
     const {parseCookies}=require('nookies')
     const {isLoggedIn,id,role}=parseCookies(context);
     console.log(isLoggedIn,id,role)
     const data=await fetch('https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/menu');
     const menuData= await data.json();
     const response=await fetch(`https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/employee?id=${id}`);
     const userData=await response.json();
     if(isLoggedIn==='true'){
          return {
               props:{menuData,userData,id,role,cookievalue:[isLoggedIn,id,role]}
              }
     }
           return {
            redirect:{
                destination:'/login',
                permanent:false,
     }
}

}
