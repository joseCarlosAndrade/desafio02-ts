import {Box, Flex, Input, Center, Button} from '@chakra-ui/react';
import { MyButton } from '../MyButton/MyButton';
import { login } from '../../services/login';
import React from 'react';

export const LoginCard : React.FC = () => {
    return (
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'
          filter='drop-shadow(5px 5px 5px rgba(30,10,20,0.6))' >
          
          <Flex direction='column' align='center'>
            
            <h1>Faça o login</h1>
          </Flex>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Center>
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Button
            </Button>
            <MyButton onMyClick={login}>Outro botao</MyButton>
          </Center>
        </Box>
    )
}