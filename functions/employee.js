const userData=[{id:1000,haveLunch:"yes"},{id:1001,haveLunch:"yes"}];
exports.handler=async(event,context)=>{
         const id=event.queryStringParameters.id;
        switch(event.httpMethod){
            case 'POST':{
            //    !userData.id?userData.id=id:''
            //     userData.haveLunch=val;
                const {val}=JSON.parse(event.body)
                const x=userData.findIndex((element)=>element.id==id);
                if(x==-1){
                    userData.push({id,haveLunch:val}) 
                }else{
                    userData[x].haveLunch=val
                }
               
               return{
                  statuscode:200,
                  body:JSON.stringify(userData)
               }
        }
           case 'GET':    
                const data=userData.find((element)=>element.id==id)
               const role=event.queryStringParameters.role
                if(role==='admin'){
                    const filteredData=userData.filter((item)=>item.haveLunch==='yes')
                    return{
                      statuscode:200,
                      body:JSON.stringify(filteredData.length)
                   }
                   
              }
                if(data){
                    return{
                        statuscode:200,
                        body:JSON.stringify(data)
                    }
                }else{
                    return{
                        statuscode:200,
                        body:JSON.stringify('not found')
                    }
                }    
    }
}
