import styled from "styled-components";


export const HomeStyle = styled.div`
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 80%;

    @media screen and (min-width: 401px) and (max-width: 1500px) {  
        width: 100%;
    }

    @media screen and (max-width: 400px) {  
        height: 270vh;
    }

`

export const Ordination = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
    
    @media screen and (max-width: 400px) {  
    padding-bottom: 0;
    padding-top: 0;
    flex-direction: column;
    }
`

export const ProductCardStyle = styled.li`
    display: flex;
    justify-content: center;
`

export const List = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem 15rem;

    @media screen and (max-width: 1500px) {  
        gap: 2rem 10rem;
    }
`

export const Option = styled.option`
    font-size: 19px;
    font-weight: 600;
`
export const Paragraph = styled.p`
    font-size: 19px;
`
export const Select = styled.select`
    font-weight: 600;
    color: black;
    border: 2px solid rgba(228, 13, 124, 0.7);
    border-radius: 10px;
    background: transparent;
`