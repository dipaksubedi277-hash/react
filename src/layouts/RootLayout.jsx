import { Outlet } from "react-router";
import Footer from "../component/Footer";
import Header from "../component/Header";


function RootLayout() {
  return <>
    <Header />
    <main className="min-h-[70vh]">
      <Outlet />
    </main>
    <Footer />
  </>
}


export default RootLayout;