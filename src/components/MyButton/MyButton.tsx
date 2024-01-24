import { Button} from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ButtonInterface { // criando interface para botao que aceite um event handler onClick
    onMyClick : () => void;
    children : ReactNode;
}

// passando children & uma funcao como prop de um componente
export const MyButton : React.FC<ButtonInterface> = ({ children, onMyClick} : ButtonInterface) => {

    const myLogin = () => {
        alert('login');
    }
    return (
        <>
        <Button onClick={onMyClick} margin={2}>
            {children}
            </Button>
        </>
    )
}