import { Outlet } from "react-router-dom"
import { Header } from "./Sides/Header/Header"
import { Footer } from "./Sides/Footer/Footer"
export const LayOut = () => {
  return (
    <>
    <Header/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
    
    </>
  )
}
