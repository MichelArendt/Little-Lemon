import { Routes, Route } from "react-router-dom";
import './assets/css/App.css'
import Footer from './components/Footer'
import Header from './components/header/Header'

import Home from './pages/Homepage'
import Reservations from "./pages/Reservations";
import { HeaderProvider } from "@/components/header/HeaderContext";

export default function App() {
  return (
    <>
      <span></span>
      <div className='container'>
        <HeaderProvider>
          <Header />
        </HeaderProvider>
        <main role="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
      <span></span>
    </>
  )
}