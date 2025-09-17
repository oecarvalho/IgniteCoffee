import { CreditCard } from "phosphor-react";
import { PaymentContainer } from "./styles";
import type { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
    isSelected: boolean;
    // label: string
}

const TypePayment = [
    
]

export function SelectFormPayment({isSelected, ...rest}: Props){
    return(
        <PaymentContainer data-state={isSelected}>
            <input type="radio" name="PaymentMethod" {...rest}/>
                <CreditCard size={24} color="#8a2be2"/>
                <span><p>Cartão de Crédito</p></span>
        </PaymentContainer>
    )
}