import { MenuItems, OrderItem } from "../types"
import { formatCurrency } from "../helpers"
type OrderContentsProps={
    order: OrderItem[]
    removeItem: (id: MenuItems['id']) => void
}

export default function OrderContents({order,removeItem}: OrderContentsProps) {
  return (
    <div>
      <h2 className="text-2xl font-black text-center">Cosumo</h2>
      <div className="space-y-3 mt-5">
        {order.length === 0 ? 
          <p className="text-center">Orden Vacia</p>
        : (
            order.map(item => (
              <div key={item.id} className="flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b">
                <div>
                  <p className="text-center">
                    {item.name} - {formatCurrency(item.price)}
                  </p>
                  <p className="text-center font-black">
                    cantidad:  {item.quantity} - {formatCurrency(item.price * item.quantity)}	
                  </p>
                </div>
                <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black" onClick={()=>removeItem(item.id)}>
                  X
                </button>
              </div>
            ))
          )}
      </div>
    </div>
  )
}
