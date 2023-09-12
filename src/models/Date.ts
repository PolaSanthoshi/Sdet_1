export function addZero(i:any) {
  if (i < 10) {i = "0" + i}
  return i;
}  
export const months=   ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
export default function getdate(value?:string){

  const d=new Date(Date.now());
  const date=addZero(d.getDate())
  const year=d.getFullYear();
  const month=addZero(d.getMonth()+1)
  if(value=='month'){
    return months[d.getMonth()+1]
  }
  if(value=='year'){
    return year
  }
  return `${date}-${month}-${year}`
}