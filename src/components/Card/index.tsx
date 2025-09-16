import { ButtonCart } from "../ButtonCart";
import { Quantify } from "../Quantify";
import { Actions, CardContainer, CoffeeActions, CoffeeImage, CoffeeInformation, CoffeePrice, CoffeeSubtitle, CoffeeTag, CoffeeTitle } from "./style";

import CoffeeImg from '../../assets/img/Type=Americano.png'

export function Card(){
    return (
        <CardContainer>
            <CoffeeImage src={CoffeeImg} />
            <CoffeeTag>
                TRADICIONAL
            </CoffeeTag>
            <CoffeeInformation>
                <CoffeeTitle>Café Tradicional</CoffeeTitle>
                <CoffeeSubtitle>O tradicional café feito com água quente e grãos moídos</CoffeeSubtitle>
            </CoffeeInformation>
            <CoffeeActions>
                <CoffeePrice>
                    R$ <span>9,90</span>
                </CoffeePrice>
                <Actions>
                    <Quantify/>
                    <ButtonCart/>
                </Actions>
            </CoffeeActions>
        </CardContainer>
    )
}