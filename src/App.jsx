import { Routes, Route } from "react-router-dom";
import './assets/css/App.css'
import Footer from './components/Footer'
import Header from './components/Header'

import Home from './pages/Home'
import Reservations from "./pages/Reservations";

export default function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/reservations" element={<Reservations />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}