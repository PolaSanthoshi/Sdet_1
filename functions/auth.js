const jwt=require('jsonwebtoken')
exports.handler=async(event,context)=>{
    const {id,role}=JSON.parse(event.body)
    const userVal={id,role,isLoggedIn:true}
    const secretKey='aby_kLXIOPKANJD'
    const token=jwt.sign(userVal,secretKey,{expiresIn:'1h'})
    return {
        statusCode:200,
        headers:{
            'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify('Created token')
    }
}