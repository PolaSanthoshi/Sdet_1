 import Billing from "@/src/billing"
 export default function billing(props:{monthlyData:[]}){
    return <div>
      <Billing data={props.monthlyData}/>
    </div>
 }
export async function getServerSideProps(){
   const presentMonth=new Date().getMonth();

    const response=await fetch(`https://monthly_data--dashing-fenglisu-777608.netlify.app/.netlify/functions/menu/monthlyCount`);
    const monthData=response.json();
    return {
      props:{
         monthlyData:monthData
      }
    }
}