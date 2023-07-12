import React from "react";
import styled from "styled-components";

const Rodape = styled.p`
    color:blue; font-size:15px
    position:absolute;
    botton:0;
    width:100%
 `;
const Footer = ()=>(
    <footer>
        <Rodape> Rodapé: Obrigado pela sua visita<br/> Endereço: rua na Graça ,1000,SP</Rodape>
    </footer>
);
export default Footer;