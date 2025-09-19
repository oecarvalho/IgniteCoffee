import styled from "styled-components";

export const PaymentContainer = styled.button`
    max-width: 190px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;
    cursor: pointer;
    border: none;

    span{
        
        font-size: 12px !important;
        line-height: 160%;
        text-transform: uppercase;
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