import styled from "styled-components"
import { SearchIcon } from "../assets/search-icon"
import { CardControl } from "../components/cart-controls"

const TagHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    background: var(--white-color);
    padding: 12px 160px;
`

const Logo = styled.a`
    font-size: 40px;
    line-height: 150%;
    color: var(--logo-color);
    font-family: "Saira Stencil One", sans-serif;
    cursor: pointer;
`
const InputContainer = styled.div`
    background: var(--gray-color);
    color: var(--text-dark);
    width: 352px;
    border-radius: 5px;
    padding: 8px;
    display: flex;
`

const Input = styled.input`
    background: transparent;
    border: none;
    font-size: 14px;
    width: 352px;
    outline: none;

    &:focus{
        border: none;
    }
`

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`


export function Header({ children }){
    return(
        <>
            <TagHeader>
                <Logo>capputeeno</Logo>
                <Container>
                    <InputContainer>
                        <Input placeholder="Procurando por algo específico?"/>
                        <SearchIcon/>
                    </InputContainer>
                    <CardControl/>
                </Container>
            </TagHeader>

            {children}
        </>
    )
}