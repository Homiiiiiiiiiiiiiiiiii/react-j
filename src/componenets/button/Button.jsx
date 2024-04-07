import styled from 'styled-components'

const Button = styled.button`
    background: ${(props) => props.primary ? 'skyblue' : 'gray'};
    color: ${(props) => props.primary ? props.theme.colors.white : props.theme.colors.black};
    padding: 10px 20px;
    border: 0;
`

//상단의 Button 컴포넌트를 상속받아 사용
export const GhostButton = styled(Button)`
    background: none;
    border: 0n            ;
`
export default Button