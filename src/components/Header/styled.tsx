import styled from "styled-components";


export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
    display: flex;
    align-items: center;

        span{
            display: flex;
            align-items: end;
            gap: 4px;
            color: ${props => props.theme['purple-dark']};
            background-color: ${props => props.theme['purple-light']};
            border-radius: 6px;
            padding: 8px;
        }
    }
`