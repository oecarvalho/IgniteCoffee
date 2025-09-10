import styled from "styled-components";

export const BtnCart = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;
    
    background-color: ${props => props.theme['purple-dark']};
    padding: .5rem;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    
    &:hover{
        background-color: ${props => props.theme['purple']};
    }
`