import SubmitPopUp from "@/src/designComponents.tsx/submitPopUp"
import { redirect } from 'next/navigation'
export default function Home() {
  console.log(process.env.SECRET_KEY,'KEY')
  console.log('INDEX')
  return (
   <div >
  
   JDOSKJ
   </div>
   
  )
}
export function getServerSideProps(){
  return{
    props:{
      x:90
    }
  }
}


  