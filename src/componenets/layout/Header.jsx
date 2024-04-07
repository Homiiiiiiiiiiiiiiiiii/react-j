import { Link, useLocation } from "react-router-dom"
import Button, { GhostButton } from "../button/Button"

function Header(){

    const location = useLocation() //리액트에서 제공하는 현재위치

    return(
        <header className="flex  justify-between items-center bg-gray-200 p-5 ">
            <h1 className="font-bold text-3xl">logo</h1>
            <nav>
                <ul className="flex gap-6 text-xl">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to='/'>Home</Link>    
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to='/about'>About</Link>    
                    </li>
                    <li className={location.pathname === '/login' ? 'active' : ''}>
                        <Link to='/login'>Login</Link>    
                    </li>
                </ul>
            </nav>

            <div>
                <Button default>마이페이지</Button>
                <Button>마이페이지</Button>
            </div>
        </header>
    )
}

export default Header