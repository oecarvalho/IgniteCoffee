import { Minus, Plus } from "phosphor-react";
import {QuantifyActions, QuantifyContainer} from './styled'


interface QuantifyProps {
    amount: number
    handleIncrement: () => void;
    handleDecrement: () => void;
}

export function Quantify({amount, handleIncrement, handleDecrement} : QuantifyProps){

    return(
        <QuantifyContainer>
            <QuantifyActions>
                <button type="button" onClick={handleDecrement}><Minus size={14} color="#8047F8"/></button>
                <span>{amount}</span>
                <button type="button" onClick={handleIncrement}><Plus size={14} color="#8047F8"/></button>
            </QuantifyActions>
        </QuantifyContainer>
    )
}