import { ShoppingCart } from "phosphor-react";
import { CartTagButton } from "./styled";


export function CartTag(){
    return(
        <CartTagButton>
            <ShoppingCart size={32} weight="fill"/>
            <span><p>3</p></span>
        </CartTagButton>
    )
}