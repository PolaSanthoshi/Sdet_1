const jwt=require('jsonwebtoken')
const {serialize}=require('cookie')
const { parseCookies } = require('nookies')
exports.handler=async(event,context)=>{
    const secretKey='aby_kLXIOPKANJD'
    switch (event.httpMethod){
        case 'POST':
    const {id,role,name}=JSON.parse(event.body)
    const userVal={id,role,name,isLoggedIn:true}
    const token=jwt.sign(userVal,secretKey)
    const logInCookie = serialize('token', token, {
        secure:true,
        path:'/'
})
   
    return {
        statusCode:200,
        headers:{
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