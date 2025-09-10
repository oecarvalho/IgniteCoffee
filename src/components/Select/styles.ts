import styled from "styled-components";


export const PaymentContainer = styled.label`
    width: auto;
    max-width: 190px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 1rem;
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
    cursor: pointer;

    span{
        p{
            font-size: 12px;
            line-height: 160%;
            text-transform: uppercase;
        }
    }

    input[type='radio']{
        display: none;
    }

    &:hover{
        background-color: ${props => props.theme['base-hover']};
        transition: .3s;
    }

    &[data-state='true']{
        background-color: ${props => props.theme['purple-light']};
        border: 1px solid ${props => props.theme['purple']};
    }
`