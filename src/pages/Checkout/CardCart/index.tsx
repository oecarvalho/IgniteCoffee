
import imgCoffee from '../../../assets/img/Type=Americano.png'
import { ButtonRemove } from '../../../components/ButtonRemove'
import { Quantify } from '../../../components/Quantify'
import { CardCartActions, CardCartContainer, CardCartInfo, CardCartInfos, CardCartPrice } from './styled'


export function CardCart(){
    return(
        <CardCartContainer>
            <CardCartInfos>
                <img src={imgCoffee} alt="" />

                <CardCartInfo>
                    <p>Expresso Tradicional</p>
                    <CardCartActions>
                        <Quantify/>
                        <ButtonRemove/>
                    </CardCartActions>
                </CardCartInfo>
            </CardCartInfos>
            <CardCartPrice>R$ 9,90</CardCartPrice>
        </CardCartContainer>
    )
}