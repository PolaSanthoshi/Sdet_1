// import { userData } from "./employee"
// const userData=[{id:1000,haveLunch:"yes"},{id:1001,haveLunch:"yes"}];
exports.handler=async(event,context)=>{
    const data=await fetch("https://netlify-code--transcendent-toffee-89a6b6.netlify.app/.netlify/functions/totalUsers")
    const userData=await data.json();
    const filteredData=userData.filter((item)=>item.haveLunch==='yes')
    return {
        statusCode:200,
        body:JSON.stringify(filteredData.length)
    }
}           