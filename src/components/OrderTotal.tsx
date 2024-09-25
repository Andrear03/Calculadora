import { useMemo } from "react"
import { OrderItem } from "../types"

type OrderTotalProps = {
    order: OrderItem[]
    placeOrder: () => void
}
export default function OrderTotal({order, placeOrder}: OrderTotalProps) {
   
    const subtotalAmount = useMemo(() => {
        return order.reduce((total, item) => total + (item.quantity * item.price), 0)
    }, [order])
    const tipAmount = subtotalAmount * 0.1
    const totalAmount = subtotalAmount + tipAmount
  return (
    <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propina</h2>
                <p>Subtotal a pagar: {''}
                    <span className="font-bold">${subtotalAmount.toFixed(2)}</span>
                </p>
                <p>Propina (10%): {''}
                    <span className="font-bold">${tipAmount.toFixed(2)}</span>
                </p>
                <p>Total a pagar: {''}
                    <span className="font-bold">${totalAmount.toFixed(2)}</span>
                </p>
            </div>
            <button className="w-full bg-black p-3  uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalAmount === 0} onClick={placeOrder}>
                Guardar Orden
            </button>
        </>
  )
}
