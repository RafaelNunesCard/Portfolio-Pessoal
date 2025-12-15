import { FilterByType } from "../components/FilterList"
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
            <div>
                <p>Oganizar por</p>
                <div>
                    <span>Novidades</span>
                    <span>Preço: Maior - menor</span>
                    <span>Preço: Menor - maior</span>
                    <span>Mais vendidos</span>
                </div>
            </div>
        </Filter>
    )
}
