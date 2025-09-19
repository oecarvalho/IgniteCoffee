
import { Trash } from "phosphor-react"
import {BtnRemove} from "./styled.ts"

export function ButtonRemove({onClick}){
    return(
        <BtnRemove type="button" onClick={onClick}>
            <Trash size={16} color='#8047F8'/>
            Remover
        </BtnRemove>
    )
}