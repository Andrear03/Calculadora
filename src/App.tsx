import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"
import OrderTotal from "./components/ordertotal"

function App() {
  
  const {order, addItem,removeItem,placeOrder} = useOrder()
  return (
    <>
      <header className=' bg-teal-800 py-5'>
          <h1 className='text-center text-4xl font-black text-slate-50'>Calculadora de Propinas</h1>
      </header>
      <main className="max-w-7xl mx-auto pt-20 grid grid-cols-2">
        <div className="text-center ">
            <h1 className="text-2xl text-slate-950 font-black text-center">Menú</h1>
            <div className="space-y-3">
              {menuItems.map(item => (
                <MenuItem
                  key={item.id}
                  item={item}
                  addItem={addItem}
                />
              ))}
            </div>
        </div>
        <div className="ml-36 text-center border border-dashed border-slate-300 p-5 rounded-lg space-y-3 ">
            <OrderContents
              order= {order}
              removeItem={removeItem}
            />
            <OrderTotal
              order={order}
              placeOrder={placeOrder}
            />

        </div>
      </main>
    </>
  )
}

export default App
