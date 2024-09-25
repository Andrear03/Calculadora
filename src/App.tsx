import { menuItems } from "./data/db"
import MenuItem from "./components/MenuItem"
import order from "./hooks/order"

function App() {
  
  const {addItem} = order()
  return (
    <>
      <header className=' bg-teal-800 py-5'>
          <h1 className='text-center text-4xl font-black text-slate-50'>Calculadora de Propinas</h1>
      </header>
      <main className="max-w-7xl mx-auto pt-20 grid grid-cols-2">
        <div className="text-center ">
            <h1 className="text-slate-950 font-black text-center">Menú</h1>
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
        <div className="text-center ">
            <h1 className="font-black">Consumo</h1>
        </div>
      </main>
    </>
  )
}

export default App
