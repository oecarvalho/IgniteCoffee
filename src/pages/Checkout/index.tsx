import { CurrencyDollar, MapPinLine,CreditCard, Bank, Money  } from "phosphor-react";
import { CheckoutAdressForm, CheckoutContainer, CheckoutForm, CheckoutFormContainer, CheckoutInfo, CheckoutMethod, CheckoutPayment, CoffeeInfo, CoffeeInfoPayment, CoffeeSelected, CoffeeSelectedContainer, FormItem, Input } from "./styles";
import { SelectFormPayment } from "../../components/Select";
import { CardCart } from "./CardCart";
import { ButtonLabel } from "../../components/ButtonLabel";

import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ErrorMessage } from "@hookform/error-message";
import { useCart } from "../../contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CheckoutValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP').max(8),
    rua: zod.string().min(1, "Digite o nome da sua rua"),
    numero: zod.string().min(1, 'Digite o número').max(5),
    complemento: zod.string().optional(),
    bairro: zod.string().min(1, 'Informe o seu bairro'),
    cidade: zod.string().min(1, 'Informe a sua cidade'),
    uf: zod.string().min(1, 'Informe sua UF').max(2)
})

const formatPayment = [
    {
        name: "credit",
        icon: CreditCard,
        label: 'Cartão de Crédito'
    },
    {
        name: "debit",
        icon: Bank,
        label: 'Cartão de Débito'
    },
    {
        name: "money",
        icon: Money,
        label: 'Dinheiro ou Pix'
    },

]

type CheckoutFormData = zod.infer<typeof CheckoutValidationSchema>;

export function Checkout() {

    const {cart, totalPrice, cleanCart} = useCart()
    const DELIVERY_FEE = 3.50;
    const grandTotal = totalPrice + DELIVERY_FEE;

    const { register, handleSubmit, formState } = useForm({
        resolver: zodResolver(CheckoutValidationSchema)
    });


    function formatPrice(price: number){
        return price.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            minimumFractionDigits: 2,
        })
    }

    const [paymentMethod, setPaymentMethod] = useState('');
    const navigate = useNavigate();

    function handleSendForm(data: CheckoutFormData) {
        if (cart.length === 0) {
            return alert('Seu carrinho está vazio. Adicione itens antes de continuar.');
        }
        if (!paymentMethod) {
            return alert('Por favor, selecione um método de pagamento.');
        }

        const order = {
            address: data,
            paymentMethod: paymentMethod,
            items: cart,
            total: grandTotal,
        };

        console.log("order: ", order)

        navigate('/delivery', { state: order });
        cleanCart(); 
    }
    
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
                            {formatPayment.map(option => (
                                <SelectFormPayment
                                    key={option.name}
                                    label={option.label}
                                    icon={option.icon}
                                    isSelected={paymentMethod === option.name}
                                    onClick={() => setPaymentMethod(option.name)}
                                />
                             ))}
                        </CheckoutMethod>
                    </CheckoutPayment>
                </CheckoutFormContainer>

                <CoffeeSelectedContainer>
                    <h3>Cafés selecionados</h3>

                    <CoffeeSelected>
                        {cart.map(coffee => 
                            <CardCart
                                key={coffee.id}
                                id={coffee.id}
                                amount={coffee.amount}
                                imgCoffee={coffee.image}
                                title={coffee.name}
                                price={(coffee.price * coffee.amount).toFixed(2)}
                            />
                        )}
                        
                        <CoffeeInfoPayment>
                            <CoffeeInfo>
                                <span>Total de Itens</span>
                                <p>R$ {formatPrice(totalPrice)}</p>
                            </CoffeeInfo>

                            <CoffeeInfo>
                                <span>Entrega padrão</span>
                                <p>R$ 3,50</p>
                            </CoffeeInfo>

                            <CoffeeInfo>
                                <h2>Total</h2>
                                <h2>R$ {formatPrice(totalPrice + 3.50)}</h2>
                            </CoffeeInfo>

                            <ButtonLabel />
                        </CoffeeInfoPayment>
                    </CoffeeSelected>
                </CoffeeSelectedContainer>
            </form>
        </CheckoutContainer>
    )
}

function cleanCart() {
    throw new Error("Function not implemented.");
}
