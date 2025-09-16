import styled from "styled-components";

export const CardCartContainer = styled.div`
    display: flex;
    align-items: start;
    gap: 50px;
    padding-bottom: 24px;
    border-bottom: 1px solid ${props => props.theme['base-button']};
    margin-bottom: 24px;
`

export const CardCartInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;


    img{
        width: 100%;
        max-width: 64px;
    }
`

export const CardCartInfo = styled.div`
    width: 100%;
    max-width: 160px;
    
    p{
        padding-bottom: 8px;
    }
`

export const CardCartActions = styled.div`
    display: flex;
    gap: 8px;
`

export const CardCartPrice = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: ${props => props.theme['base-text']};
`