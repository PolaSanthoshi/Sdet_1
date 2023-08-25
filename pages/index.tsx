import SubmitPopUp from "@/src/designComponents.tsx/submitPopUp"
import { redirect } from 'next/navigation'
export default function Home() {
  console.log('INDEX')
  return (
   <div >
   hdesdhskjhasjhdksahasjfksjafasj
   </div>
   
  )
}
export function getServerSideProps(){
  return{
    redirect:{
      destination:'/login',
      permanent:false
    }
  }
}
