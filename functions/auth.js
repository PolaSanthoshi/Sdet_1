const jwt=require('jsonwebtoken')
const {serialize}=require('cookie')
const { parseCookies } = require('nookies')
import { createClient } from "@supabase/supabase-js";
exports.handler=async(event,context)=>{
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseApiKey = process.env.SUPABASE_KEY;
    const supabase = createClient(supabaseUrl, supabaseApiKey);
    const secretKey='aby_kLXIOPKANJD'
    switch (event.httpMethod){
        case 'POST':
    const {id,role}=JSON.parse(event.body)
    const userVal={id,role,isLoggedIn:true}
    const token=jwt.sign(userVal,secretKey,{expiresIn:'1m'})
    const logInCookie = serialize('token', token, {
        secure:true,
        path:'/'
})
   
    return {
        statusCode:200,
        headers:{
            'Authorization':`Bearer ${token}`,
             'Set-Cookie':logInCookie
        },
        body:JSON.stringify('Created token')
    }

    case 'GET':
    const cookie=parseCookies(event)
    const cookieVal=cookie.token;
    if(cookieVal){

        try{
            const decodedToken=jwt.verify(cookieVal,secretKey); 
            return{
                statusCode:200,
                body:JSON.stringify('Valid Token and verified')
            }
        }
        catch{
            return{
                statusCode:200,
                body:JSON.stringify('Session Logged-out')
            }
        }
    }else{
        return{
            statusCode:200,
            body:JSON.stringify('Token not found')
        }
    }
}
}