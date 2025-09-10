
import Logo from '../assets/img/Logo.svg'
import { ButtonCart } from './ButtonCart'
import { ButtonLabel } from './ButtonLabel'
import { ButtonRemove } from './ButtonRemove'
import { CartTag } from './CartTag'

export function Header(){
    return(
        <header>
            <img src={Logo} alt="" />

            <div>
                <button>Porto Alegre, RS</button>
                <button>Carrinho</button>
                <ButtonLabel/>
                <ButtonRemove/>
                <ButtonCart/>
                <CartTag/>
            </div>
        </header>
    )
}