// import { userData } from "./employee"
// const userData=[{id:1000,haveLunch:"yes"},{id:1001,haveLunch:"yes"}];
exports.handler=async(event,context)=>{
    const data=await fetch("https://netlify-code--charming-tulumba-2b645d.netlify.app/.netlify/functions/totalUsers")
    const userData=await data.json();
    const filteredData=userData.filter((item)=>item.haveLunch==='yes')
    return {
        statusCode:200,
        body:JSON.stringify(filteredData.length)
    }
}           