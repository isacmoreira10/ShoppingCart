import styled from "styled-components";

export const AllContent = styled.div`
`

export const TitlePage = styled.h1`
            font-family:sans-serif;
            font-size:32px;
            font-weight: 800;

            margin-left: 6rem;
            margin-bottom: 54px;

            color:${(props) => props.theme['base-subtitle']};
`

export const DivCoffesConteiner = styled.div`
        display: grid;
        grid-template-columns: repeat(4, 300px);
        grid-auto-rows: 21rem;
        grid-gap: 43px ;
`