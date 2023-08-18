import { userData } from "./employee"
exports.handler=async()=>{
    const filteredData=userData.filter((item)=>item.haveLunch==='yes')
    return {
        statusCode:200,
        body:JSON.stringify(filteredData.length)
    }
}           