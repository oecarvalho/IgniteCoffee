import styled from "styled-components";


export const CheckoutContainer = styled.section`
    margin-top: 40px;
    width: 100%;
    
    form{
        display: flex;
        justify-content: space-between;
    }
`

export const CheckoutFormContainer = styled.div`
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CheckoutForm = styled.div`
    background-color: ${props =>props.theme['base-card']};
    border-radius: 6px;
    padding: 40px;
`

export const CheckoutInfo = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 32px;
    span{
        color: ${props => props.theme['base-subtitle']};
        font-size: 16px;
    }

    p{
        color: ${props => props.theme['base-text']};
        font-size: 14px;
    }
`

export const CheckoutAdressForm = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1rem;
    
`

interface FormItemProps {
    colSpan?: number;
}

export const FormItem = styled.div<FormItemProps>`
    grid-column: span ${props => props.colSpan ?? 12};
`

export const Input = styled.input`
    display: flex;
    align-items: center;
    padding: 0.75rem;
    gap: 0.25rem;
    width: 100%;
    min-height: 2.625rem;

    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    font-size: 0.875rem;

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-dark']};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const CheckoutPayment = styled.div`
    background-color: ${props =>props.theme['base-card']};
    border-radius: 6px;
    padding: 40px;
`

export const CheckoutMethod = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const CoffeeSelectedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const CoffeeSelected = styled.div`
    background-color: ${props =>props.theme['base-card']};
    border-radius: 6px 44px 6px 44px;
    padding: 40px;
`


export const CoffeeInfoPayment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const CoffeeInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        font-size: 14px;
        color: ${props => props.theme['base-text']};
    }

    p{
        font-size: 16px;
        color: ${props => props.theme['base-text']};
    }
`