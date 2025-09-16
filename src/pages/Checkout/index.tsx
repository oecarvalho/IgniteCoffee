import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutAdressForm, CheckoutContainer, CheckoutForm, CheckoutFormContainer, CheckoutInfo, CheckoutMethod, CheckoutPayment, CoffeeInfo, CoffeeInfoPayment, CoffeeSelected, CoffeeSelectedContainer, FormItem, Input } from "./styles";
import { SelectFormPayment } from "../../components/Select";
import { CardCart } from "./CardCart";
import { ButtonLabel } from "../../components/ButtonLabel";


export function Checkout() {
    return (
        <CheckoutContainer>
            <CheckoutFormContainer>
                <h3>Complete seu pedido</h3>

                <CheckoutForm>
                    <CheckoutInfo>
                        <MapPinLine size={22} color="#C47F17" />
                        <div>
                            <span>Endereço de Entrega</span>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </CheckoutInfo>

                    <CheckoutAdressForm>
                        <FormItem colSpan={4}>
                            <Input type="text" placeholder="CEP" />
                        </FormItem>

                        <FormItem>
                            <Input type="text" placeholder="Rua" />
                        </FormItem>
                        
                        <FormItem colSpan={4}>
                            <Input type="text" placeholder="Número" />
                        </FormItem>
                        
                        <FormItem colSpan={8}>
                            <Input type="text" placeholder="Complemento" />
                        </FormItem>

                        <FormItem colSpan={4}>
                            <Input type="text" placeholder="Bairro" />
                        </FormItem>

                        <FormItem colSpan={6}>
                            <Input type="text" placeholder="Cidade" />
                        </FormItem>
                        
                        <FormItem colSpan={2}>
                            <Input type="text" placeholder="UF" />
                        </FormItem>
                    </CheckoutAdressForm>
                </CheckoutForm>

                <CheckoutPayment>
                    <CheckoutInfo>
                        <CurrencyDollar size={22} color='#8047F8'/>
                        <div>
                            <span>Pagamento</span>
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
                    <CardCart/>
                    <CardCart/>

                    <CoffeeInfoPayment>
                        <CoffeeInfo>
                            <span>Total de Itens</span>
                            <p>R$ 29,70</p>
                        </CoffeeInfo>

                        <CoffeeInfo>
                            <span>Entrega</span>
                            <p>R$ 3,50</p>
                        </CoffeeInfo>

                        <CoffeeInfo>
                            <h2>Total</h2>
                            <h2>R$ 33,20</h2>
                        </CoffeeInfo>

                        <ButtonLabel/>
                    </CoffeeInfoPayment>
                </CoffeeSelected>
            </CoffeeSelectedContainer>
        </CheckoutContainer>
    )
}