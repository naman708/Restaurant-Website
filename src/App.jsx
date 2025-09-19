import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componenets/Layout/Header.jsx'
import Meals from './componenets/Meals/Meal/Meal.jsx'
import CartModal from './componenets/Cart/CartModal.jsx'
import CartProvider from './componenets/Cart/CartProvider.jsx'
import './App.css'

function App() {
const [modal,setModal] = useState(true);

  return (
    <CartProvider>
     {modal && <CartModal onClose={() => setModal(false)} />}
     <Header onShowCart={()=>setModal(true)}/>
     <main>
      <Meals />
     </main>

    </CartProvider>
  )
}

export default App
