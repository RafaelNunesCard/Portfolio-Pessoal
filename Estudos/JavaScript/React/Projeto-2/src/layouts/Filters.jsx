import { FilterByType } from "../components/FilterList"
import { CategoryFilter } from "../components/CategoryFilter";
import styled from "styled-components";

const Filter = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

export function FiltersBar(){
    return (
        <Filter>
            <FilterByType/>
            <CategoryFilter/>
        </Filter>
    )
}
