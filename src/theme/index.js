import styled from 'styled-components'
import createGlobalStyle from 'styled-components'
import { ReactSVG } from 'react-svg'

export default {
    colors: {
        white: "#ffffff",
        dark: "#27212e",
        black: "#373737",
        accent: "#E53251",
        gray: "#F2F2F2",
        blue: "#67E7E2",
        silver: "#716385",
    },
    dims: {
        widths: {
            small: '30em',
            forms: '17.5em'
        },
        padding: {
            largePadding: '0.8em 1.2em',
            mediumPadding: '2em',
            tallPadding: '3em 1.5em'
        },
        margin: {
            small: '0.5em',
            intersection: '1em',
            normal: '2em',
            inline: '0.5ch'
        },
        borderRadius: {
            small: '0.4em',
            normal: '0.8em'
        },
        fonts: {
            small: "0.8em",
            medium: "1.5em",
            title: '3em'
        },
        circle: {
            small: '1em',
            medium: '3em',
            big: '6em'
        },
    },
    shadows: {
        depth1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        depth2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        depth3: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
    }
}

export const LayoutContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto minmax(0,1fr) auto;
`;

export const SmallContainer = styled.div`
    width: ${({ theme }) => theme.dims.small};
    max-width: 100vh;
    margin: 0 auto;
`

export const CenteredContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`

export const ClearButton = styled.button`
outline: 0;
border: 0;
background-color: transparent;
font-size: 1em;
display: block;
`

export const SvgButton = styled(ReactSVG)`
& svg{
    width: ${({ theme }) => theme.dims.circle.small};
    height: ${({ theme }) => theme.dims.circle.small};
    display: inline-block;
    vertical-align: bottom;
}
background-color: ${({ theme, active }) => active ? theme.colors.accent : theme.colors.dark};
cursor: pointer;
border-radius: 50%;
width: ${({ theme }) => theme.dims.circle.medium};
height: ${({ theme }) => theme.dims.circle.medium};
display: flex;
align-items: center;
justify-content: center;
margin-bottom: ${({ theme }) => theme.dims.margin.intersection};

& path{
    fill: ${({ theme }) => theme.colors.white} !important;
}
`

export const Title = styled.h1`
font-size: ${({ theme }) => theme.dims.fonts.medium};
font-weight: bold;
display: inline-block;
margin-block-start: 0;
margin-block-end: 0;
margin-left: ${({ theme }) => theme.dims.margin.intersection};
vertical-align: middle;
`

export const AppButton = styled.button`
background-color: ${({ theme }) => theme.colors.accent};
border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
padding: ${({ theme }) => theme.dims.padding.largePadding};
box-shadow: ${({ theme }) => theme.shadows.depth1};
color: ${({ theme }) => theme.colors.white};
margin-top: ${({theme}) => theme.dims.margin.normal};
font-size: 1em;
width: ${({ fullWidth, small, theme }) => {
        if (fullWidth) return '100%';
        if (small) return theme.dims.widths.forms
        return 'auto'
    }};
cursor: pointer;
border: none;
&:hover{
    opacity: 0.0;
    box-shadow: ${({ theme }) => theme.shadows.depth2}
}
`