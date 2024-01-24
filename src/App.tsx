import { 
  Center,
  ChakraProvider,
  Input,
  Box,
  Button,
  Flex
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { LoginCard } from './components/LoginCard/LoginCard';

function App() {
  return (
    <ChakraProvider>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Flex align='center' justify='center' 
        bgColor='rgba(40, 20, 30, 1)' borderRadius='10' marginBottom='5' 
        bgGradient='linear(to-t, rgba(40,20,30,1), rgba(50, 40, 40, 1))'
        filter='drop-shadow(5px 5px 5px rgba(30,10,20,0.6))'
        >
        <Header></Header> 
        </Flex>
        <LoginCard></LoginCard>
      </Box>
    </ChakraProvider>
  );
}

export default App;
