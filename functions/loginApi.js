import { setCookie } from "nookies";
import { serialize } from "cookie";
exports.handler=async(event,context)=>{
const users=[{id:1000,role:'employee'},{id:1001,role:'employee'},
	{id:1002,role:'employee'},{id:1003,role:'employee'},{id:1004,role:'admin'},{id:1005,role:'admin'}]
const {id,role}=JSON.parse(event.body)
const validUser=users.findIndex((e)=>id==e.id && e.role==role)
cookie_options={
        secure:true,
        path:'/'
}
const logInCookie = serialize('isLoggedIn', true, cookie_options)
const idCookie = serialize('id', id, cookie_options);
const roleCookie = serialize('role', role, cookie_options);
const combinedCookies = [logInCookie, idCookie,roleCookie]
if(validUser>=0){

        return {
			statusCode:200,
                        headers:{
                                'Set-Cookie':combinedCookies
                        },
			body:JSON.stringify({valid:true,isLoggedIn:true,validUser:validUser})
		}
}else{
        return {
			statusCode:200,
                    
			body:JSON.stringify({valid:false,isLoggedIn:false,validUser:validUser,event:event})
		}
}
	
}