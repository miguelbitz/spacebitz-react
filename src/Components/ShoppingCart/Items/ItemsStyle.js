import styled from "styled-components";

export const CartList = styled.ul`
    display: flex;
    flex-direction: column;
`

export const ItemsCart = styled.li`
    display: flex;
    flex-direction: row;
    gap: 1rem;

`

export const ItemQuantityCart = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
`

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
`

export const RemoveItem = styled.div`
    font-size: .9rem;
    opacity: .6;
    text-decoration: underline;
`

export const ButtonQuantity = styled.button`
    background-color: none;
    border: none;
`

export const Text = styled.p`
    cursor: pointer;
`

