import Admin from "@/src/admin";
export default function adminn(props:{items:string[],count:number,id:string,name:string,apiMenu:string[],adminCount:number}){
    console.log(props)
    return <Admin data={props.items} count={props.count} id={props.id} name={props.name} apiMenu={props.apiMenu} adminCount={props.adminCount}/>
}


export async function getServerSideProps(context:any){
     const {parseCookies}=require('nookies')
     const jwt=require('jsonwebtoken')
     const {token}=parseCookies(context);
     if(token){
    const decodedPayLoad=jwt.decode(token);
    const {isLoggedIn,id,role,name}=decodedPayLoad;
    const response=await fetch("https://monthly_data--dashing-fenglisu-777608.netlify.app/.netlify/functions/menu")
    const val=await response.json();
    console.log(val,'val')
    const data=await fetch(`https://monthly_data--dashing-fenglisu-777608.netlify.app/.netlify/functions/totalCount`)
    const value=await data.json();  
    console.log(value,'value')  
    const fetchedVal=await fetch('https://monthly_data--dashing-fenglisu-777608.netlify.app/.netlify/functions/storedMenu');
    const dataBaseMenu=await fetchedVal.json();
    console.log(dataBaseMenu,'dataBaseMenu')
    const response2=await fetch('https://monthly_data--dashing-fenglisu-777608.netlify.app/.netlify/functions/adminCount');
    const adminCount=await response2.json();
    console.log(adminCount,'adminCOunt')
    const adminCountVal=adminCount.length>0?adminCount[0].count:0;

            if(isLoggedIn&&role==='admin'){
                return {
                    props:{items:val[0].menu.split(','),count:value,id,name,apiMenu:dataBaseMenu,adminCount:adminCountVal}
                    }
           }
                 return {
                  redirect:{
                      destination:'/',
                      permanent:false,
           }
      }
    
}
}

