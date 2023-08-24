import axios from "axios";
import { useRouter } from "next/router";
import Home from "@/src/home";
import { parseCookies } from "nookies";
export default function Homee(props:{menuData:string[],userData:{id:string,haveLunch:string},id:string,role:string,isLoggedIn:any}){
     const router=useRouter();
     console.log(props.isLoggedIn,typeof props.isLoggedIn)
     // const {id}=router.query;
  return  <div>
     <Home menuData={props.menuData} userData={props.userData} id={props.id} role={props.role}/>
    </div>
}
export async function getServerSideProps(context:any){
    
     // const {id,role}=context.query;
     // const {parseCookies}=require('nookies')
     const jwt=require('jsonwebtoken')
     const {token}=parseCookies(context);
     const decodedPayLoad=jwt.decode(token);
     const {isLoggedIn,id,role}=decodedPayLoad;
     // console.log(isLoggedIn)
     const data=await fetch('https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/menu');
     const menuData= await data.json();
     const response=await fetch(`https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/employee?id=${id}`);
     const userData=await response.json();
        
  
     if(1){
          return {
               props:{menuData,userData,isLoggedIn:decodedPayLoad}
              }
     }
           return {
            redirect:{
                destination:'/login',
                permanent:false,
     }
}

}
