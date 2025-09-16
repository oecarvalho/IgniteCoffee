import styled from "styled-components";

export const BtnRemove = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .375rem .5rem;
    background: ${props => props.theme['base-button']};
    border: none;
    border-radius: 6px;
    color: ${props => props.theme['base-text']};
    gap: 4px;
    font-weight: 500;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme['base-hover']};
        transition: .3s;
    }

`