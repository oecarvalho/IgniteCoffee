import { ShoppingCartSimple } from "phosphor-react";
import { BtnCart } from "./styled";

interface ButtonCartProps {
    disabled: boolean
}

export function ButtonCart({disabled}: ButtonCartProps){
    return(
        <BtnCart disabled={disabled} type="submit">
            <ShoppingCartSimple size={22} weight="fill"/>
        </BtnCart>
    )
}