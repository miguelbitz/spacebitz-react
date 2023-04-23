import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`

export const Application = styled.main`
  display: flex;
  flex-direction: column;
  background-color: silver;
  height: 100%;
  width: 100%;
  gap: 2rem;
  flex-grow: 2;

`

export const Container = styled.div`
  line-height: 1.5;
  font-weight: 600;
  height: 110vw;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: grey;
  flex-grow: 2;

  @media screen and (min-width: 753px) and (max-width: 1636px) { 
    height: 125vw; 
    }

  @media screen and (max-width: 752px) {  
    height: 490vw;
  }


`

export const ProductDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-top: 2rem;

  @media screen and (min-width: 401px) and (max-width: 1300px) {  
    padding-top: 1rem;
    }

  @media screen and (max-width: 400px) { 
    align-items: center; 
  }
`
