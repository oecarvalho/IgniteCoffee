import { DeliveryContainer, DeliveryContent, DeliveryInfo, DeliveryTitle, Infos, Info } from "./styles";
import DeliveryImg from '../../assets/img/Illustration.png'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { BenefictsIcon } from "../../components/Beneficts/BenefictsIcon";
import { useLocation, useNavigate } from "react-router-dom";

const paymentMethodLabels = {
    credit: 'Cartão de Crédito',
    debit: 'Cartão de Débito',
    money: 'Dinheiro',
};

export function Delivery(){

    const { state } = useLocation();
    const navigate = useNavigate();

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
                        <p>Entrega em <span>{state.address.rua}, {state.address.numero}</span> {state.address.bairro} - {state.address.cidade}, {state.address.uf.toUpperCase()}</p>
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
                        <span>{paymentMethodLabels[state.paymentMethod]}</span>
                    </Info>
                </Infos>
            </DeliveryInfo>
        </DeliveryContent>

 
        <img src={DeliveryImg} alt="" />

       </DeliveryContainer>
    )
}