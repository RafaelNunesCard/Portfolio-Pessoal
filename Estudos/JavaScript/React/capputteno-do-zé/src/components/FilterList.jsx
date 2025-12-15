import styled from "styled-components";
import { useContext } from "react";
import { FilterContext } from "../contexts/Filter-context";

const FilterList = styled.ul`
    list-style: none;
    display: flex;
    gap: 35px;
    height: 30px;
`

const FilterItem = styled.li`
    color: ${({ $selected }) =>
        $selected ? "var(--text-dark2)" : "var(--text-dark)"};

    font-weight: ${({ $selected }) => ($selected ? "600" : "400")};

    border-bottom: ${({ $selected }) =>
        $selected ? "4px solid var(--orange-color)" : "none"};

    cursor: pointer;
    line-height: 150%;
`;

export function FilterByType() {
    const { type, setType } = useContext(FilterContext);
    return (
        <FilterList>
            <FilterItem $selected={type === "ALL"} onClick={() => setType("ALL")}>
                Todos os produtos
            </FilterItem>

            <FilterItem $selected={type === "SHIRT"} onClick={() => setType("SHIRT")}>
                Camisetas
            </FilterItem>

            <FilterItem $selected={type === "MUG"} onClick={() => setType("MUG")}>
                Canecas
            </FilterItem>
        </FilterList>
    );
};
