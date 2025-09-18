import { ShoppingCartSimple } from "phosphor-react";
import { BtnCart } from "./styled";

interface ButtonCartProps {
    disabled: boolean
    handleClick?: () => void
}

export function ButtonCart({disabled, handleClick}: ButtonCartProps){
    return(
        <BtnCart onClick={handleClick} disabled={disabled} type="submit">
            <ShoppingCartSimple size={22} weight="fill"/>
        </BtnCart>
    )
}