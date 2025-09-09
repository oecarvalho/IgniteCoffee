
import Logo from '../assets/img/Logo.svg'
import { ButtonLabel } from './ButtonLabel'
import { ButtonRemove } from './ButtonRemove'

export function Header(){
    return(
        <header>
            <img src={Logo} alt="" />

            <div>
                <button>Porto Alegre, RS</button>
                <button>Carrinho</button>
                <ButtonLabel/>
                <ButtonRemove/>
            </div>
        </header>
    )
}