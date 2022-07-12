import React from 'react'
import styled from 'styled-components'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { CgArrowsExchangeAltV } from 'react-icons/cg'

const Container = styled.div`
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
    padding-top: 100px;
`

const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    box-shadow: 0px 1px 8px 1px lightgrey;
    margin-bottom: 20px;
    margin-left: 80px;
    margin-right: 80px;
    padding: 10px;
    background: #0d0d0d;
    color: whitesmoke;
    border-radius: 50px;

    @media only screen and (max-width: 950px) {
        margin-left: 24px;
        margin-right: 24px;
        transition: all 0.5s ease-in-out;
    }
`

const Title = styled.h1`
    font-size: 1.2em;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2vw;

    @media only screen and (max-width: 800px) {
        font-size: 1em;
    }

    @media only screen and (max-width: 400px) {
        font-size: 0.8em;
    }
`

const FilterContainer = styled.div`
    margin: 0 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 1px 8px 1px lightgrey;
    background: #fff;

    @media only screen and (max-width: 1000px) {
        align-items: flex-start;
    }

    @media screen and (max-width: 950px) {
        margin: 0 25px;
        transition: all 0.5s ease-in-out;
    }

    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

const FilterWrapper = styled.div`
    display: flex;
    width; 100%;
    height: 100%;
    flex: 1;
    margin: 20px;
    align-items: center;
    justify-content: ${({type}) => (type === 'left' ? 'flex-start' : 'flex-end')};
    letter-spacing: 1px;

    @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: ${({type}) => (type === 'left' ? 'flex-start' : 'flex-end')};
        justify-content: flex-start;
        width: 90%;
        padding-top: 5px;
        border-right: ${({type}) => (type === 'left' ? '1px solid lightgrey' : '')};
        padding-right: ${({type}) => (type === 'left' ? '40px' : '0')};
    }

    @media only screen and (max-width: 800px) {
        border-right: 0;
        padding-right: 0;
    }
`

const Filter = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;
    color: #0d0d0d;
    background-color: #fff;
    margin-bottom: 10px;

    @media only screen and (max-width: 1000px) {
        display: flex;
        width: 100%;
        box-shadow: 0px 1px 5px lightgrey;
        border-radius: 50px;
        border: 1px solid lightgrey;
        background: #f8f8f8;
    }
`

const FilterIcon = styled.span`
    display: flex;
`

const FilterText = styled.span`
    font-size: 12px;
    font-weight: 600;
    padding: 4px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
`

const Select = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    white-space: nowrap;
    padding: 5px;
    width: 116px;
    font-weight: bold;
    font-size: 12px;
    color: #0d0d0d;
    background: transparent;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`

const Option = styled.option`
    text-align: ${({type}) => (type === 'right' ? 'right' : 'left')};

    @media only screen and (max-width: 1000px) {
        text-align: left;
    }
`

// Filter Navbar

const NavFilters = () => {
    return (
        <Container id='products'>
            <TitleContainer>
              <Title>PRENDAS & ACCESORIOS</Title>
            </TitleContainer>
            <FilterContainer>
                <FilterWrapper type='left'>
                    <Filter type='left'>
                        <FilterIcon type='left'>
                            <TbAdjustmentsHorizontal style={{fontSize:'20px'}} />
                        </FilterIcon>
                        <FilterText type='left'>FILTROS</FilterText>
                    </Filter>
                    <Select type='left'>
                        <Option disabled selected>PRODUCTOS</Option>
                        <Option>Accesorios</Option>
                        <Option>Batas</Option>
                        <Option>Bikers</Option>
                        <Option>Camisetas</Option>
                        <Option>Camperas</Option>
                        <Option>Carteras</Option>
                        <Option>Gorros</Option>
                        <Option>Puffers</Option>
                        <Option>Sacos</Option>
                        <Option>Sudaderas</Option>
                        <Option>Relojes</Option>
                        <Option>Remeras</Option>
                        <Option>Zapatos</Option>
                    </Select>
                    <Select type='left'>
                        <Option disabled selected>IMPORTADOS</Option>
                        <Option>Channel</Option>
                        <Option>Christian Dior</Option>
                        <Option>Christian Louboutin</Option>
                        <Option>Giorgio Armani</Option>
                        <Option>Gucci</Option>
                        <Option>Jack Wolfskin</Option>
                        <Option>Louis Vuitton</Option>
                        <Option>Nike</Option>
                        <Option>The North Face</Option>
                        <Option>Tommy Hilfiger</Option>
                        <Option>Versace</Option>
                        <Option>Victoria's Secret</Option>
                        <Option>Otras Marcas</Option>
                    </Select>
                    <Select type='left'>
                        <Option disabled selected>COLECCIONES</Option>
                        <Option>Basics</Option>
                        <Option>Classy</Option>
                        <Option>Trends</Option>
                        <Option>Street</Option>
                    </Select>
                </FilterWrapper>
                <FilterWrapper type='right'>
                    <Filter type='right'>
                        <FilterText type='right'>ORGANIZADOR</FilterText>
                        <FilterIcon type='right'>
                            <CgArrowsExchangeAltV style={{fontSize:'20px'}}/>
                        </FilterIcon>
                    </Filter>
                    <Select>
                        <Option disabled selected type='right'>ORDENAR</Option>
                        <Option type='right'>Del Menor Precio al Mayor</Option>
                        <Option type='right'>Del Mayor Precio al Menor</Option>
                    </Select>
                </FilterWrapper>
            </FilterContainer>
        </Container>
    )
}

export default NavFilters