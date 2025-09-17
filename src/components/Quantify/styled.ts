import styled from "styled-components";

export const QuantifyContainer = styled.div`
    background-color: ${props => props.theme['base-button']};
    border-radius: 6px;

`
export const QuantifyActions = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px;
    width: 100%;

    span{
        color: ${props => props.theme['base-title']};
        font-size: 1rem;
    }

    button{
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`