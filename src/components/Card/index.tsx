import { useState } from "react";
import { ButtonCart } from "../ButtonCart";
import { Quantify } from "../Quantify";
import { Actions, CardContainer, CoffeeActions, CoffeeImage, CoffeeInformation, CoffeePrice, CoffeeSubtitle, CoffeeTag, CoffeeTags, CoffeeTitle } from "./style";


export type CoffeeProps = {
    id: number,
    name: string,
    description: string,
    tags: string[],
    price: number,
    image: string
    amount: number
}

const MIN_VALUE = 0;

export function Card(coffee: CoffeeProps){

    const [amount, setAmount] = useState(0)

    function handleIncrement(){
        const incrementedValue = amount + 1
        setAmount(incrementedValue)
    }

    function handleDecrement(){
        const decrementedValue = amount <= MIN_VALUE ? 0 : amount - 1
        setAmount(decrementedValue)
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
                    <ButtonCart disabled={amount === 0}/>
                </Actions>
            </CoffeeActions>
        </CardContainer>
    )
}