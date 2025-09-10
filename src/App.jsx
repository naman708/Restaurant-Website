import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './componenets/Layout/Header.jsx'
import Meals from './componenets/Meals/Meal/Meal.jsx'
import CartModal from './componenets/Cart/CartModal.jsx'
import './App.css'

function App() {


  return (
    <>
    <CartModal/>
     <Header/>
     <main>
      <Meals />
     </main>

    </>
  )
}

export default App
