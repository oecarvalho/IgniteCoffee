import { type ReactNode } from "react"
import styled from "styled-components";


interface BenefictsProps {
    children: ReactNode;
    bgColor: string
}

const IconContainer = styled.span`
    width: 32px;
    padding: 8px;
    background-color: ${props => props.bgColor};
    border-radius: 100%;
    display: flex;
    align-items: center;
    color: ${props => props.theme['white']};
    
`

export function BenefictsIcon({children, bgColor}: BenefictsProps) {
    return (
        <IconContainer bgColor={bgColor}>
            {children}
        </IconContainer>
    )
}