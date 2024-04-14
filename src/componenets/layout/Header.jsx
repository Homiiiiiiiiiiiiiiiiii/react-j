import { Link, useLocation } from "react-router-dom"
import Button, { GhostButton } from "../button/Button"
import tw from "twin.macro"
import styled from "styled-components"

function Header(){

    const location = useLocation() //리액트에서 제공하는 현재위치

    return(
        <header className="flex flex-col md:flex-row justify-between items-center bg-gray-300 p-5 ">
            <h1 className="font-bold text-3xl text-secondary">logo</h1>
            <Gnb>
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
            </Gnb>

            <Util>
                <Button default>마이페이지</Button>
                <Button>마이페이지</Button>
            </Util>
        </header>
    )
}

// const Gnb = tw.nav`
//     bg-secondary p-3
// `

const Util = styled.div`
    ${tw`hidden md:block`}
`


const Gnb = styled.nav`
    ul{
        ${tw`flex gap-6`}
        /* border : 1px solid #fff */
    }
    li{
        a{
            ${tw`text-white`}
        }
    }
`
export default Header