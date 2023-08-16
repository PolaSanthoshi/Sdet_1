const menuData=[];
export default function handler(event){
    
    switch (req.method){
        case 'POST':
            menuData.length=0
            const {menu}=req.body
            menu.forEach((element)=>menuData.push(element))
            res.status(200).json(menu)
            break
        default:
            
            res.status(200).json(menuData)
    }
}