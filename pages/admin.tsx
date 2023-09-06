import Admin from "@/src/admin";
export default function adminn(props:{items:string[],count:number,id:string,name:string,apiMenu:string[]}){
    console.log(props)
    return <Admin data={props.items} count={props.count} id={props.id} name={props.name} apiMenu={props.apiMenu}/>
}


export async function getServerSideProps(context:any){
     const {parseCookies}=require('nookies')
     const jwt=require('jsonwebtoken')
     const {token}=parseCookies(context);
     if(token){
    const decodedPayLoad=jwt.decode(token);
    const {isLoggedIn,id,role,name}=decodedPayLoad;
    const response=await fetch("https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/menu")
    const val=await response.json();
    const data=await fetch(`https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/totalCount`)
    const value=await data.json();    
    const fetchedVal=await fetch('https://supabase--stalwart-capybara-60fcb3.netlify.app/.netlify/functions/storedMenu');
    const dataBaseMenu=await fetchedVal.json();
            if(isLoggedIn&&role==='admin'){
                return {
                    props:{items:val[0].menu.split(','),count:value,id,name,apiMenu:dataBaseMenu}
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

