import {userData} from './employee/[employeeId]'
export default function handler(req,res){
    const filteredData=userData.filter((item)=>item.haveLunch==='yes')
    return res.status(200).json(filteredData.length)
}           