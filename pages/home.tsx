import { useRouter } from "next/router";
import Home from "@/src/home";

export default function Homee(props:{menuData:string[],haveLunch:string,id:string,role:string,isLoggedIn:any,name:string}){
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
          const data=await fetch('https://sdetlunch.netlify.app/.netlify/functions/menu');
          const menuData= await data.json();
          // const menuVal=menuData[0].menu.length>0?menuData[0].menu.split(','):'';
          const response=await fetch(`https://sdetlunch.netlify.app/.netlify/functions/confirmation?id=${id}`);
          const userData=await response.json();
          const userVal=userData.length>0?userData[0].response:'';
          if(isLoggedIn){
              return {
                   props:{menuData:menuData,haveLunch:userVal,isLoggedIn:decodedPayLoad,id:id,role:role,name:name}
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
