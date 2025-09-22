import { Outlet } from "react-router"
import Header from "../pages/Shared/Header.jsx"
import Footer from "../pages/Shared/Footer.jsx"


const RootLayout = () => {
  return (
    <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayout