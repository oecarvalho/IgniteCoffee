
import { MapPin } from 'phosphor-react'
import Logo from '../../assets/img/Logo.svg'
import { CartTag } from '../CartTag'
import { HeaderContainer } from './styled'

export function Header(){


    return(
        <HeaderContainer>
            <img src={Logo} alt="" />

            <div>
                <span>
                    <MapPin size={24} weight='fill' color='#8047F8'/>
                    Porto Alegre, RS
                </span>
                <CartTag/>
            </div>
        </HeaderContainer>
    )
}