const jwt=require('jsonwebtoken')
exports.handler=async(event,context)=>{
    const secretKey='aby_kLXIOPKANJD'
    switch (event.httpMethod){
        case 'POST':
    const {id,role}=JSON.parse(event.body)
    const userVal={id,role,isLoggedIn:true}
    const token=jwt.sign(userVal,secretKey,{expiresIn:'1h'})
    return {
        statusCode:200,
        headers:{
            'Authorization':`Bearer ${token}`
        },
        body:JSON.stringify('Created token')
    }
        case 'GET':
    const {headers}=event;
    if(headers.authorization){
        const token=headers.authorization.split(' ')[1];
        try{
            const decodedToken=jwt.verify(token,secretKey);
            return{
                statusCode:200,
                body:JSON.stringify('Valid Token and verified')
            }
        }
        catch{
            return{
                statusCode:401,
                body:JSON.stringify('Invalid Token')
            }
        }
    }else{
        return{
            statusCode:401,
            body:JSON.stringify('Token not found')
        }
    }
}
}