
import { MapPin } from 'phosphor-react'
import Logo from '../../assets/img/Logo.svg'
import { CartTag } from '../CartTag'
import { HeaderContainer } from './styled'
import { Link } from 'react-router-dom'

export function Header(){


    return(
        <HeaderContainer>
            <Link to='/'>
                <img src={Logo} alt="" />        
            </Link>

            <div>
                <span>
                    <MapPin size={24} weight='fill' color='#8047F8'/>
                    Brasil, BR
                </span>
                <Link to='/checkout'>
                    <CartTag/>
                </Link>
            </div>
        </HeaderContainer>
    )
}