export function addZero(i:any) {
    if (i < 10) {i = "0" + i}
    return i;
  }    
export default function getdate(){
    const d=new Date(Date.now());
    const date=addZero(d.getDate())
    const year=d.getFullYear();
    const month=addZero(d.getMonth()+1)
    return `${date}-${month}-${year}`
}