
import type {MenuItems} from "../types"

type MenuItemProps = {
    item: MenuItems
    addItem: () => void
}

export default function MenuItem({item, addItem}: MenuItemProps) {
  return (
    <button
        className="border-2 border-teal-950 w-full p-3 flex justify-between hover:bg-green-100"    
        onClick={() => addItem()}
    >
    <h2 className="font-black text-cyan-900">{item.name}</h2>
    <p>Precio: ${item.price}</p>
    </button>
  )
}
