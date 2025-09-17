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

export function Card(coffee: CoffeeProps){
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
                    <Quantify/>
                    <ButtonCart/>
                </Actions>
            </CoffeeActions>
        </CardContainer>
    )
}