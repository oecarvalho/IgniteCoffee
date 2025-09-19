import { ButtonRemove } from '../../../components/ButtonRemove'
import { Quantify } from '../../../components/Quantify'
import { useCart } from '../../../contexts/CartContext'
import { CardCartActions, CardCartContainer, CardCartInfo, CardCartInfos, CardCartPrice } from './styled'

interface CardCartProps {
    id: number;
    amount: number
    title: string
    price: number
    imgCoffee: string
}

export function CardCart({amount, title, price, imgCoffee, id}: CardCartProps){
    const { changeCartItemQuantity, removeCartItem } = useCart();

    function handleIncrement() {
        changeCartItemQuantity(id, 'increment');
    }

    function handleDecrement() {
        changeCartItemQuantity(id, 'decrement');
    }

    function handleRemove() {
        removeCartItem(id);
    }
    
    return(
        <CardCartContainer>
            <CardCartInfos>
                <img src={imgCoffee} alt="" />

                <CardCartInfo>
                    <p>{title}</p>
                    <CardCartActions>
                        <Quantify 
                        amount={amount}
                        handleIncrement={handleIncrement}
                        handleDecrement={handleDecrement}
                        />
                        <ButtonRemove onClick={handleRemove}/>
                    </CardCartActions>
                </CardCartInfo>
            </CardCartInfos>
            <CardCartPrice>R$ {price}</CardCartPrice>
        </CardCartContainer>
    )
}