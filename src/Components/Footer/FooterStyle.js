import styled from "styled-components";

export const FooterStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: ${props => props.height};
    width: 100%;
    background-color: #040f14;
    color: white;
    position: ${props => props.position};
    bottom: ${props => props.bottom};
    font-size: 10px;
    gap: 5px

`

export const IconDiv = styled.div`
    display: flex;
    gap: 10px;
`