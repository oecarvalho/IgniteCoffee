import styled from "styled-components";


export const Button = styled.button`
    padding: .5rem .75rem;
    background-color: ${props => props.theme['yellow']};
    border: none;
    border-radius: 6px;
    color: ${props => props.theme['base-button']};
    font-weight: bold;
    font-size: 14px;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme['yellow-dark']};
        transition: .3s;
    }
`
