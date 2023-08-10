export const userData=[];
export default function employeeData(req,res){
    const id=req.query.employeeId;
    const val=req.body.val;
        switch(req.method){
            case 'POST':{
            //    !userData.id?userData.id=id:''
            //     userData.haveLunch=val;
                const x=userData.findIndex((element)=>element.id==id);
                if(x==-1){
                    userData.push({id,haveLunch:val}) 

                }else{
                    userData[x].haveLunch=val
                }
               
                res.status(200).json(userData)
        }
            default:
               
                const data=userData.find((element)=>element.id==id)
                // console.log(data,'employeeDataOfAPi',userData)
                // console.log(userData.find((element)=>element.id==id),'find')
                data?res.status(200).json(data):res.status(200).json('not found')        
    }
}
