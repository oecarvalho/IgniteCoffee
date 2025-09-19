import { PaymentContainer } from "./styles";
import type { ButtonHTMLAttributes, ElementType } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    isSelected: boolean;
    label: string
    icon: ElementType
}



export function SelectFormPayment({isSelected, label, icon: Icon, ...rest}: Props){
    return(
        <PaymentContainer data-state={isSelected} type='button' {...rest}>
            <Icon size={24} color="#8a2be2"/>
            <span>{label}</span>
        </PaymentContainer>
    )
}