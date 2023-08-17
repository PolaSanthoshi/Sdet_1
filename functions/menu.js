const menuData=['rice','dal','soon'];
export default function handler(event,context){
    
    switch (event.httpMethod){
        case 'POST':
            menuData.length=0
            const {menu}=JSON.parse(event.body)
            menu.forEach((element)=>menuData.push(element))
            return{
                statusCode:200,
                body:JSON.stringify({menu})
            }
            break
        default:
            return{
                statusCode:200,
                body:JSON.stringify({menuData})
            }
    }
}