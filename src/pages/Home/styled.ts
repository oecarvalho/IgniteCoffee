import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`
export const BGImage = styled.img`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    min-width: 100vw;
    overflow: hidden;
    object-fit: cover;

    z-index: -1;
`

export const MainContent = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 5.75rem 0;

    div{
        width: 100%;
        max-width: 36.875rem;

        h1{
            font-size: 48px;
            margin-bottom: 18px;
            color: ${props => props.theme['base-title']};
        }

        p{
            font-size: 20px;
            line-height: 130%;
            color: ${props => props.theme['base-subtitle']};
            margin-bottom: 4.125rem;
        }
    }
`



export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5.75rem 0;
`