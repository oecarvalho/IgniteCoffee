import styled from "styled-components";

export const DeliveryContainer = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
    align-items: end;
`

export const DeliveryContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    width: 100%;
    max-width: 530px;
`

export const DeliveryTitle = styled.div`

    h2{
        color: ${props => props.theme['yellow-dark']};
    }

    p{
        font-size: 20px;
        color: ${props => props.theme['base-subtitle']};
    }
`

export const DeliveryInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px 6px 36px;
  background: #fff; /* fundo do conteúdo */
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: 1px; /* espessura da borda */
    background: linear-gradient(to right, #FDB813, #9d50bb, #6A0DAD);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`

export const Infos = styled.div`
    width: 100%;
    max-width: 360px;
    display: flex;
    align-items: center;
    gap: 12px;
`

export const Info = styled.div`
    p{
        font-size: 16px;
        color: ${props => props.theme['base-text']};
    }

    span{
        font-size: 16px;
        color: ${props => props.theme['base-text']};
        font-weight: bold;
    }
`