import { useState } from "react"
import { OrderItem } from "../types"


export default function useOrder() {
    const [order,setOrder] = useState<OrderItem[]>([])


const addItem = ()=>{
    console.log('Adding...');
}
    return {
        addItem
    }
}