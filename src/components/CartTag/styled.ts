import styled from "styled-components";


export const CartTagButton = styled.button`
    position: relative;
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    border: none;
    border-radius: 6px;
    padding: .5rem;
    cursor: pointer;
    
    span{
        display: flex;
        align-items: center !important;
        justify-content: center;
        position: absolute;
        top: -8px;
        right: -8px;
        width: 20px;
        height: 20px;
        background-color: ${props => props.theme['yellow-dark']} !important;
        border-radius: 100px !important;
        color: ${props => props.theme['white']} !important;
    }
`

