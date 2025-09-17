import { DeliveryContainer, DeliveryContent, DeliveryInfo, DeliveryTitle, Infos, Info } from "./styles";
import DeliveryImg from '../../assets/img/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BenefictsIcon } from "../../components/Beneficts/BenefictsIcon";

export function Delivery(){
    return(
       <DeliveryContainer>
        <DeliveryContent>
            <DeliveryTitle>
                <h2>Uhu! Pedido Confirmado</h2>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </DeliveryTitle>

            <DeliveryInfo>
                <Infos>
                    <BenefictsIcon bgColor="#8047F8">
                        <MapPin size={16} weight="fill"/>
                    </BenefictsIcon>
                    <Info>
                        <p>Entrega em <span>Rua João Daniel Martinelli, 102</span> Farrapos - Porto Alegre, RS</p>
                    </Info>
                </Infos>
                <Infos>
                    <BenefictsIcon bgColor="#DBAC2C">
                        <Timer size={16} weight="fill" />
                    </BenefictsIcon>
                    <Info>
                        <p>Previsão de Entrega</p>
                        <span>20 min - 30 min</span>
                    </Info>
                </Infos>
                <Infos>
                    <BenefictsIcon bgColor="#C47F17">
                        <CurrencyDollar size={16} weight="fill"/>
                    </BenefictsIcon>
                    
                    <Info>
                        <p>Pagamento na Entrega</p>
                        <span>Cartão de Crédito</span>
                    </Info>
                </Infos>
            </DeliveryInfo>
        </DeliveryContent>

 
        <img src={DeliveryImg} alt="" />

       </DeliveryContainer>
    )
}