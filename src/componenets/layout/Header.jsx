import { Link, useLocation } from "react-router-dom"
import Button from "../button/Button"

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

            <div>
                <Button primary>마이페이지</Button>
                <Button>마이페이지</Button>
                {/* <GhostButton>로그인</GhostButton> */}
            </div>
        </header>
    )
}

export default Header