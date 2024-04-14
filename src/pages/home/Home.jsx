import Logo from '../../componenets/common/Logo'
import {Heading, Button,VStack} from '@chakra-ui/react'

function Home(){
    return(
        <div>
            <Logo/>
            <Heading as={"h3"} fontSize={20}>홈 화면</Heading>
            <VStack>
                <Button colorScheme='blue' variant={'icon'}>버튼</Button>
                <Button colorScheme='blue' border={"1px solid #000"} borderRadius={0}>Button</Button>
                <Button colorScheme='blue' variant={"outline"} size={'md'}>Button</Button>
                <Button colorScheme='blue' variant={"ghost"} size={'lg'}>Button</Button>
                <Button colorScheme='blue' variant={"link"} size={'lg'}>Button</Button>
            </VStack>
        </div>
    )
}

export default Home;