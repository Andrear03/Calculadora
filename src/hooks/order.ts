import { useState } from "react"
import type { OrderItem } from "../types"


export default function order() {
    const [order,setorder] = useState<OrderItem[]>([])

    const addItem = () => {
        console.log("holas")
    }    
    return {
        addItem
    }
}