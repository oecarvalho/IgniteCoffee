
import imgCoffee from '../../../assets/img/Type=Americano.png'
import { ButtonRemove } from '../../../components/ButtonRemove'
import { Quantify } from '../../../components/Quantify'

export function CardCart(){
    return(
        <div>
            <img src={imgCoffee} alt="" />

            <div>
                <div>
                    <p>Expresso Tradicional</p>
                    <span>R$ 9,90</span>
                </div>
                
                <div>
                    <Quantify/>
                    <ButtonRemove/>
                </div>
            </div>
        </div>
    )
}