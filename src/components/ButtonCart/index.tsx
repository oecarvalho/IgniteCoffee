import { ShoppingCartSimple } from "phosphor-react";
import { BtnCart } from "./styled";

export function ButtonCart(){
    return(
        <BtnCart>
            <ShoppingCartSimple size={22} weight="fill"/>
        </BtnCart>
    )
}