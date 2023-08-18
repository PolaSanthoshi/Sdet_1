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
     const {parseCookies}=require('nookies')
     const {isLoggedIn,id,role}=parseCookies(context);
     console.log(isLoggedIn,id,role)
     const data=await fetch('http://localhost:3000/api/menu');
     const menuData= await data.json();
     const response=await fetch(`http://localhost:3000/api/employee/${id}`);
     const userData=await response.json();
     if(1){
          return {
               props:{menuData,userData,id,role,isLoggedIn:role}
              }
     }
           return {
            redirect:{
                destination:'/login',
                permanent:false,
     }
}

}
