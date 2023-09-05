export function addZero(i:any) {
  if (i < 10) {i = "0" + i}
  return i;
}    
export default function getdate(value?:string){
const m= ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
  const d=new Date(Date.now());
  const date=addZero(d.getDate())
  const year=d.getFullYear();
  const month=addZero(d.getMonth()+1)
  if(value=='month'){
    return m[d.getMonth()+1]
  }
  if(value=='year'){
    return year
  }
  return `${date}-${month}-${year}`
}