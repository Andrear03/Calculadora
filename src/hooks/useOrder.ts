import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"


export default function order() {
    const [order,setorder] = useState<OrderItem[]>([])

    const addItem = (item: MenuItems) => {

        const itemexists = order.find(orderItem => orderItem.id === item.id)
        if(itemexists){
            const updateorder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)
            setorder(updateorder)
        }else{
            const newitem = {...item, quantity : 1}
            setorder([...order, newitem])
        }
      
    }   

    const removeItem = (id:MenuItems['id']) => {
        setorder(order.filter(item => item.id !== id))
    }
    const placeOrder = () =>{
        setorder([])
    }


    return {
        addItem,    
        order,
        removeItem,
        placeOrder
    }
}