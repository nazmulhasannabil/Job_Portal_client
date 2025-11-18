import { Outlet } from "react-router"
import Header from "../pages/Shared/Header.jsx"
import Footer from "../pages/Shared/Footer.jsx"


const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default RootLayout