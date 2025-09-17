import styled from "styled-components";

export const CardContainer = styled.div`
    box-shadow: inset 0 20px ${props => props.theme['background']};
    width: 100%;    
    max-width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${props => props.theme['base-card']};
    border-radius: 6px 36px 6px 36px;
`

export const CoffeeImage = styled.img`
    margin-bottom: .75rem;
`

export const CoffeeTags = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
` 

export const CoffeeTag = styled.span`
    background: ${props => props.theme['yellow-light']};
    color:  ${props => props.theme['yellow-dark']};
    text-transform: uppercase;
    font-size: 12px;
    line-height: 130%;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 100px;
    margin-bottom: 1rem;
`

export const CoffeeTitle = styled.h4`
    color: ${props => props.theme['base-text']};
`

export const CoffeeSubtitle = styled.p`
    color: ${props => props.theme['base-label']};
    font-size: 14px;
`

export const CoffeeActions = styled.div`
    display: flex;
    align-items: center;
    gap: 23px;
    margin-bottom: 1.25rem;
    flex: 1;
`

export const CoffeePrice = styled.div`
    font-size: 14px;
    color: ${props => props.theme['base-text']};

    span{
        font-family: 'baloo 2', sans-serif;
        font-size: 24px;
        font-weight: 800;
    }
`
export const CoffeeInformation = styled.div`
    width: 100%;
    max-width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    text-align: center;
    margin-bottom: 33px;
`

export const Actions = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

`