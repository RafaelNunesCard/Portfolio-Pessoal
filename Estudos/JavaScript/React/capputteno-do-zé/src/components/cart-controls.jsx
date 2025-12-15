import{ ShoppingIcon } from "../assets/shopping-icon"
import { useLocalStorage } from "../hooks/useLocalStorage"
import styled from "styled-components"

const CartCount = styled.span`
  background: var(--delete-color);
  color: var(--white-color);

  width: 17px;
  height: 17px;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  right: -10px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 10px;
  font-weight: 600;
`;

const Container = styled.div`
    position: relative;
    cursor: pointer;
`

export function CardControl(){
    const [value] = useLocalStorage('cart-items', [])
    return(
        <Container>
            <ShoppingIcon/>
            {value.length > 0 && (<CartCount>{value.length}</CartCount>)}
        </Container>
    )
}