import styled from 'styled-components'

export const Input = styled.input`
    width: 5rem;
    height: 20px;
    font-size: 13px;
    font-weight: 600;
    padding-left: 5px;
    color: black;
    border: 2px solid rgba(228, 13, 124, 0.7);
    border-radius: 10px;
    background: transparent;
    :active {
    box-shadow: 2px 2px 15px rgba(228, 13, 124, 0.7) inset;
}
`
export const Paragraph = styled.p`
    font-size: 14px;

    @media screen and (min-width: 1200px){
        font-size: 19px;
    }
`
export const FilterImage = styled.img`
    
`

export const FilterStyle = styled.nav`
    
`



