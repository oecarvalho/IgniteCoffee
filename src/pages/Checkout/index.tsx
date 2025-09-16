import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutContainer, CheckoutForm, CheckoutFormContainer, CheckoutInfo, CheckoutMethod, CheckoutPayment, CoffeeInfoPayment, CoffeeSelected, CoffeeSelectedContainer } from "./styles";
import { SelectFormPayment } from "../../components/Select";
import { CardCart } from "./CardCart";
import { ButtonCart } from "../../components/ButtonCart";
import { ButtonLabel } from "../../components/ButtonLabel";


export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutFormContainer>
                <h3>Complete seu pedido</h3>

                <CheckoutForm>
                    <CheckoutInfo>
                        <MapPinLine size={22} />
                        <div>
                            <p>Endereço de Entrega</p>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </CheckoutInfo>

                    <form action="">
                        <input type="number" placeholder="CEP" />
                        <input type="text" placeholder="Rua" />

                        <input type="number" placeholder="Número" />
                        <input type="text" placeholder="Complemento" />
                        <input type="text" placeholder="UF" />
                    </form>
                </CheckoutForm>

                <CheckoutPayment>
                    <CheckoutInfo>
                        <CurrencyDollar size={22} />
                        <div>
                            <p>Pagamento</p>
                            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                        </div>
                    </CheckoutInfo>

                    <CheckoutMethod>
                        <SelectFormPayment isSelected={true}/>
                        <SelectFormPayment isSelected={false}/>
                        <SelectFormPayment isSelected={false}/>
                    </CheckoutMethod>
                </CheckoutPayment>
            </CheckoutFormContainer>

            <CoffeeSelectedContainer>
                <h3>Cafés selecionados</h3>
                <CoffeeSelected>
                    <CardCart/>
                </CoffeeSelected>

                <CoffeeInfoPayment>
                    <div>
                        <span>Total de Itens</span>
                        <p>R$ 29,70</p>
                    </div>

                    <div>
                        <span>Entrega</span>
                        <p>R$ 3,50</p>
                    </div>

                    <div>
                        <h2>Total</h2>
                        <h2>R$ 33,20</h2>
                    </div>

                    <ButtonLabel/>
                </CoffeeInfoPayment>
            </CoffeeSelectedContainer>
        </CheckoutContainer>
    )
}