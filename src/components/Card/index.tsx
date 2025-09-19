import { useState } from "react";
import { ButtonCart } from "../ButtonCart";
import { Quantify } from "../Quantify";
import { Actions, CardContainer, CoffeeActions, CoffeeImage, CoffeeInformation, CoffeePrice, CoffeeSubtitle, CoffeeTag, CoffeeTags, CoffeeTitle } from "./style";
import { useCart, type CoffeeProps } from "../../contexts/CartContext";

const MIN_VALUE = 0; // A menor quantidade de café possivel

export function Card(coffee: CoffeeProps){
    
    const [amount, setAmount] = useState(0)
    const {addToCart} = useCart()

    function handleIncrement(){ // Incrementar o contador
        const incrementedValue = amount + 1
        setAmount(incrementedValue)
    }

    function handleDecrement(){ // Decrementar o contador
        const decrementedValue = amount <= MIN_VALUE ? 0 : amount - 1
        setAmount(decrementedValue)
    }

    function handleAddToCart (){
        if (amount > 0){
            addToCart(coffee, amount)
            console.log(amount)
            setAmount(MIN_VALUE)
        }
    }

    return (
        <CardContainer>
            <CoffeeImage src={coffee.image} />
            <CoffeeTags>
                {coffee.tags.map(tag => (
                    <CoffeeTag key={tag}>{tag}</CoffeeTag>
                ))}
            </CoffeeTags>
            <CoffeeInformation>
                <CoffeeTitle>{coffee.name}</CoffeeTitle>
                <CoffeeSubtitle>{coffee.description}</CoffeeSubtitle>
            </CoffeeInformation>
            <CoffeeActions>
                <CoffeePrice>
                    R$ <span>{coffee.price.toFixed(2)}</span>
                </CoffeePrice>
                <Actions>
                    <Quantify 
                    amount={amount} 
                    handleIncrement={handleIncrement} 
                    handleDecrement={handleDecrement}/>
                    <ButtonCart disabled={amount === 0} handleClick={handleAddToCart}/> 
                </Actions>
            </CoffeeActions>
        </CardContainer>
    )
}