import { ButtonCart } from "../ButtonCart";
import { Quantify } from "../Quantify";
import { CardContainer, CoffeeActions, CoffeeImage, CoffeePrice, CoffeeSubtitle, CoffeeTag, CoffeeTitle } from "./style";

import CoffeeImg from '../../assets/img/Type=Americano.png'

export function Card(){
    return (
        <CardContainer>
            <CoffeeImage src={CoffeeImg} />
            <CoffeeTag>
                TRADICIONAL
            </CoffeeTag>
            <CoffeeTitle>Café Tradicional</CoffeeTitle>
            <CoffeeSubtitle>Venha Experimentar essa experiencia</CoffeeSubtitle>
            <CoffeeActions>
                <CoffeePrice>
                    <span>R$ 2,00</span>
                </CoffeePrice>
                <Quantify/>
                <ButtonCart/>
            </CoffeeActions>
        </CardContainer>
    )
}