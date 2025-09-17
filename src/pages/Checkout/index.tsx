import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { CheckoutAdressForm, CheckoutContainer, CheckoutForm, CheckoutFormContainer, CheckoutInfo, CheckoutMethod, CheckoutPayment, CoffeeInfo, CoffeeInfoPayment, CoffeeSelected, CoffeeSelectedContainer, FormItem, Input } from "./styles";
import { SelectFormPayment } from "../../components/Select";
import { CardCart } from "./CardCart";
import { ButtonLabel } from "../../components/ButtonLabel";

import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ErrorMessage } from "@hookform/error-message";

const CheckoutValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP').max(8),
    rua: zod.string().min(1, "Digite o nome da sua rua"),
    numero: zod.string().min(1, 'Digite o número').max(5),
    complemento: zod.string().min(1, 'Digite o complemento'),
    bairro: zod.string().min(1, 'Informe o seu bairro'),
    cidade: zod.string().min(1, 'Informe a sua cidade'),
    uf: zod.string().min(1, 'Informe sua UF').max(2)
})

export function Checkout() {

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(CheckoutValidationSchema)
    });

    function handleSendForm(data:any){
        console.log(data)
    }

    console.log(formState.errors)

    return (
        <CheckoutContainer>
            <form action="" onSubmit={handleSubmit(handleSendForm)}>
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
                                <Input type="text" placeholder="CEP" {...register('cep')} />
                                {formState.errors.cep && (
                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                    {formState.errors.cep.message as string}
                                    </span>
                                )}
                            </FormItem>

                            <FormItem>
                                <Input type="text" placeholder="Rua" {...register('rua')}/>
                                {formState.errors.rua && (
                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                    {formState.errors.rua.message as string}
                                    </span>
                                )}
                            </FormItem>
                            
                            <FormItem colSpan={4}>
                                <Input type='text' placeholder="Número" {...register('numero')}/>
                                {formState.errors.numero && (
                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                    {formState.errors.numero.message as string}
                                    </span>
                                )}
                            </FormItem>
                            
                            <FormItem colSpan={8}>
                                <Input type="text" placeholder="Complemento" {...register('complemento')}/>
                                {formState.errors.complemento && (
                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                    {formState.errors.complemento.message as string}
                                    </span>
                                )}
                            </FormItem>

                            <FormItem colSpan={4}>
                                <Input type="text" placeholder="Bairro" {...register('bairro')}/>
                                {formState.errors.cep && (
                                    <span style={{ color: 'red', fontSize: '12px' }}>
                                    {formState.errors.cep.message as string}
                                    </span>
                                )}
                            </FormItem>

                            <FormItem colSpan={6}>
                                <Input type="text" placeholder="Cidade" {...register('cidade')}/>
                                  <ErrorMessage
                                        errors={formState.errors}
                                        name="rua"
                                        render={({ message }) => <span style={{ color: 'red',  fontSize: '12px'  }}>{message}</span>}
                                    />
                            </FormItem>
                            
                            <FormItem colSpan={2}>
                                <Input type="text" placeholder="UF" {...register('uf')}/>
                                    <ErrorMessage
                                        errors={formState.errors}
                                        name="uf"
                                        render={({ message }) => <span style={{ color: 'red',  fontSize: '12px'  }}>{message}</span>}
                                    />
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

                            <ButtonLabel />
                        </CoffeeInfoPayment>
                    </CoffeeSelected>
                </CoffeeSelectedContainer>
            </form>
        </CheckoutContainer>
    )
}