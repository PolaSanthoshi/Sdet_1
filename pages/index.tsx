import SubmitPopUp from "@/src/designComponents.tsx/submitPopUp"
import { redirect } from 'next/navigation'
export default function Home() {
  console.log('INDEX')
  return (
   <div >
   
   </div>
   
  )
}
export function getInitialProps(){
  return {
    redirect: {
      destination: '/login',
      permanent: false, 
    },
  }
}