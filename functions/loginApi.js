import { setCookie } from "nookies";
exports.handler=async(event,context)=>{
const users=[{id:1000,role:'employee'},{id:1001,role:'employee'},
	{id:1002,role:'employee'},{id:1003,role:'employee'},{id:1004,role:'admin'},{id:1005,role:'admin'}]
const {id,role}=event.body;
const {rawUrl}=event;
const validUser=users.find((each)=>id==each.id&&each.role===role)
if(validUser){
        setCookie({rawUrl},'isLoggedIn',true,{
        path:'/',
        httpOnly:true
})
         setCookie({rawUrl},'id',id,{
         path:'/',
         httpOnly:true
})         
        setCookie({rawUrl},'role',role,{
    	httpOnly:true,
     	path:'/'
})
        return {
			statusCode:200,
			body:JSON.stringify({valid:true,isLoggedIn:true,event})
		}
}else{
        return {
			statusCode:200,
			body:JSON.stringify({valid:false,isLoggedIn:false})
		}
}
	
}