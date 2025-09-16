import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};
    }

    body{
        background-color: ${props => props.theme['background']};
        color: ${props => props.theme['base-title']};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
        font-family: "Roboto", sans-serif;
        line-height: 130%;
    }

    h1, h2, h3{
        font-family: "Baloo 2", sans-serif;
        font-weight: 900;
        line-height: 130%;
    }

    h4, h5{
        font-family: "Baloo 2", sans-serif;
        font-weight: 800;
        line-height: 130%;
    }
`;