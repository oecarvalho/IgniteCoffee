import { BGImage, CardSection, CardsSection, MainContainer, MainContent } from "./styled";

import MainBg from '../../assets/img/coffe-delivery-bg.png'
import { ListBeneficts } from "../../components/Beneficts";

import BackgroundImg from '../../assets/img/Background.png'
import { Card } from "../../components/Card";

import {coffeeCatalog} from '../../catalog'

export function Home(){
    return(
        <MainContainer>
            <MainContent>
                <BGImage src={BackgroundImg}/>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    
                    <ListBeneficts/>
                </div>

                <img src={MainBg} alt="" />
            </MainContent>
            
            <CardSection>
                <h2>Nossos cafés</h2>
                <CardsSection>
                    {coffeeCatalog.map(item => (
                        <Card key={item.id} {...item}/>
                    ))}
                </CardsSection>
            </CardSection>

        </MainContainer>
    )
}