
import { Trash } from "phosphor-react"
import {BtnRemove} from "./styled.ts"

export function ButtonRemove(){
    return(
        <BtnRemove>
            <Trash size={16} color='#8047F8'/>
            Remover
        </BtnRemove>
    )
}