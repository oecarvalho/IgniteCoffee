import { Minus, Plus } from "phosphor-react";
import {QuantifyActions, QuantifyContainer} from './styled'

export function Quantify(){
    return(
        <QuantifyContainer>
            <QuantifyActions>
                <Minus size={14} color="#8047F8"/>
                <span>1</span>
                <Plus size={14} color="#8047F8"/>
            </QuantifyActions>
        </QuantifyContainer>

    )
}