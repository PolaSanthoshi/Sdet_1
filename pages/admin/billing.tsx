 import Billing from "@/src/billing"
 export default function Billing1(props:{monthlyData:any}){
   console.log(props.monthlyData,'BillingIndexpage')
    return <div>
      <Billing data={props.monthlyData}/>
    </div>
 }
export async function getServerSideProps(){
    const response=await fetch(`https://sdetlunch.netlify.app/.netlify/functions/monthlyCount`);
    const monthData=await response.json();
    return {
      props:{
         monthlyData:monthData
      }
    }
}