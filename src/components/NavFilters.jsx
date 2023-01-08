import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { TbAdjustmentsHorizontal } from 'react-icons/tb'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import Products from '../components/Products'

const Content = styled.div``

const Container = styled.div`
    width: 100%;
    justify-content: center;
    padding-top: 80px;
`

const TitleContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    box-shadow: 1px 1px 8px 1px lightgrey;
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
    box-shadow: 2px 1px 10px 2px lightgrey;
    background: #fff;
    border-radius: 30px;
    transition: all 0.5s ease-in-out;

    @media only screen and (max-width: 1000px) {
        align-items: flex-start;
    }

    @media screen and (max-width: 950px) {
        margin: 0 25px;
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
        border-right: ${({type}) => (type === 'left' ? '1px solid lightgrey' : '')};
        padding-right: ${({type}) => (type === 'left' ? '40px' : '0')};
    }

    @media only screen and (max-width: 800px) {
        width: 100%;
        border-right: 0;
        padding-right: 0;
        padding: 0 20px;
    }
`

const Filter = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 100%;
    color: #0d0d0d;
    background-color: #fff;
    margin-bottom: 20px;

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
    font-size: 13px;
    font-weight: 600;
    padding: 4px;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
`

const SelectWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: #f8f8f8;
    padding: 8px;
    border-radius: 30px;
    box-shadow: 1px 1px 8px 2px lightgrey;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        flex-direction: column;
        box-shadow: none;
        border-radius: 0;
        padding: 0;
        row-gap: 6px;
        background: transparent;
    }
`

const Select = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    white-space: nowrap;
    padding: 20px auto;
    margin: auto 20px;
    font-weight: bold;
    font-size: 14px;
    color: #0d0d0d;
    background: transparent;
    letter-spacing: 1px;
    appearance: none;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        appearance: auto;
        justify-content: flex-start;
    }
    
    @media screen and (max-width: 425px) {
        letter-spacing: 0;
    }

    @media screen and (max-width: 320px) {
        font-size: 12px;
    }
`

const Line = styled.div`
    background: lightgrey;
    height: 20px;
    width: 2px;

    @media only screen and (max-width: 1000px) {
        display: none;
    }
`

const Option = styled.option`
    margin: auto 0;
    color: #000;
    background: white;
    text-decoration: none;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;

    @media only screen and (max-width: 1000px) {
        width: 100%;
        text-align: left;
    }
`

// Filter Navbar

const NavFilters = () => {
    const location = useLocation();
    // console.log(location);
    const categories = location.pathname.split('/')[2];
    // console.log(categories);
    const currentPage = window.location.href.split('/')[3];
    const [sort, setSort] = useState('newest');
    const [filters, setFilters] = useState({});
    
    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
            // [e.target.name]: value.tolowercase() => For Filter Edits / Save filters in lowercase from DB
        });
    };
    
    // console.log(filters);

    return (
        <Content id='products'>
            <Container>
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
                        <SelectWrapper>
                            <Select name='type' defaultValue='default' onChange={handleFilters} type='left'>
                                <Option value='default' hidden>PRODUCTOS</Option>
                                <Option>Accesorios</Option>
                                <Option>Bolsos</Option>
                                <Option>Camisas</Option>
                                <Option>Camisetas</Option>
                                <Option>Camperas</Option>
                                <Option>Chalecos</Option>
                                <Option>Chaquetas</Option>
                                <Option>Gorros</Option>
                                <Option>Relojes</Option>
                                <Option>Sacos</Option>
                                <Option>Sudaderas</Option>
                                <Option>Pantalones</Option>
                                <Option>Trajes</Option>
                                <Option>Vestidos</Option>
                                <Option>Zapatillas</Option>
                                <Option>Zapatos</Option>
                                <Option value='default' hidden>PRODUCTOS</Option>
                            </Select>
                            <Line />
                            <Select name='brand' defaultValue='default' onChange={handleFilters} type='left'>
                                <Option value='default' hidden>MARCAS DE DISEÑO</Option>
                                <Option>Bvlgari</Option>
                                <Option>Chanel</Option>
                                <Option>Christian Dior</Option>
                                <Option>Christian Louboutin</Option>
                                <Option>Giorgio Armani</Option>
                                <Option>Gucci</Option>
                                <Option>Jack Wolfskin</Option>
                                <Option>Louis Vuitton</Option>
                                <Option>Nike</Option>
                                <Option>Prada</Option>
                                <Option>Terranova</Option>
                                <Option>The North Face</Option>
                                <Option>Versace</Option>
                            </Select>
                            <Line />
                            <Select name='size' defaultValue='default' onChange={handleFilters} type='left'>
                                <Option value='default' hidden>TAMAÑOS</Option>
                                <Option>XXS</Option>
                                <Option>XS</Option>
                                <Option>S</Option>
                                <Option>M</Option>
                                <Option>L</Option>
                                <Option>XL</Option>
                                <Option>XXL</Option>
                            </Select>
                        </SelectWrapper>
                    </FilterWrapper>
                    <FilterWrapper type='right'>
                        <Filter type='right'>
                            <FilterText type='right'>ORGANIZADOR</FilterText>
                            <FilterIcon type='right'>
                                <CgArrowsExchangeAltV style={{fontSize:'20px'}}/>
                            </FilterIcon>
                        </Filter>
                        <SelectWrapper>
                            <Select defaultValue='default' onChange={(e) => setSort(e.target.value)}>
                                <Option value='default' hidden>ORDENAR POR PRECIO</Option>
                                {/* <Option value='newest' type='right'>Novedades</Option> */}
                                <Option value='asc'>Mayor Precio</Option>
                                <Option value='desc'>Menor Precio</Option>
                            </Select>
                        </SelectWrapper>
                    </FilterWrapper>
                </FilterContainer>
            </Container>
            <Products categories={categories} filters={filters} sort={sort} page={currentPage} />
        </Content>
    )
}

export default NavFilters