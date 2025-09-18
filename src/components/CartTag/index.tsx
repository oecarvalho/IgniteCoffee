import { ShoppingCart } from "phosphor-react";
import { CartTagButton } from "./styled";
import { useCart } from "../../contexts/CartContext";


export function CartTag(){
        const {totalQuantity} = useCart()
    return(
        <CartTagButton>
            <ShoppingCart size={32} weight="fill"/>
            {totalQuantity > 0 && <span>{totalQuantity}</span>}
        </CartTagButton>
    )
}