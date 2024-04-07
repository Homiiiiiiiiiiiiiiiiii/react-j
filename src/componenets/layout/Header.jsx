import { Link, useLocation } from "react-router-dom"

function Header(){

    const location = useLocation() //리액트에서 제공하는 현재위치

    return(
        <header>
            <h1>logo</h1>
            <nav>
                <ul>
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
        </header>
    )
}

export default Header