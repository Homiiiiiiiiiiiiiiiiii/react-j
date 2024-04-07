import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function Layout(){
    return (
        <div>
            <Header/>
            <main id="main">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}
export function LayoutType2(){
    return(
        <div>
            <h1>Login</h1>
            <p>로그인 화면입니다.</p>
        </div>
    )
}
export default Layout