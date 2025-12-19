import styled from "styled-components";
import React, { useState } from "react";
import { ArrowIcon } from "../assets/arrow-icon";

const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        display: flex;
        width: 120px;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: var(--gray-color);
        }
    }
`;

const Categorys = styled.div`
    display: ${(props) => (props.visible ? "grid" : "none")};
    position: absolute;
    width: 160px;
    top: 100%;
    background: white;
    padding: 12px 16px;
    border-radius: 7px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;


const Category = styled.span`
    cursor: pointer;
    
`;

export function CategoryFilter() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleCategories = () => {
        setIsVisible(!isVisible);
    };

    return (
        <Container>
            <p onClick={toggleCategories}>
                Organizar por 
                <ArrowIcon />
            </p>
            <Categorys visible={isVisible}>
                <Category>Novidades</Category>
                <Category>Preço: Maior - menor</Category>
                <Category>Preço: Menor - maior</Category>
                <Category>Mais vendidos</Category>
            </Categorys>
        </Container>
    );
}