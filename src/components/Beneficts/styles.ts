import styled from "styled-components";


export const Beneficts = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    list-style: none;
    gap: 1.25rem;

    li{
        display: flex;
        align-items: center;
        gap: .75rem;

        p{
            font-size: 14px;
            color: ${props => props.theme['base-subtitle']};
            margin: 0;
        }   
    }


            
`