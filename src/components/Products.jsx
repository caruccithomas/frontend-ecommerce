import React, { useState, useEffect }  from 'react';
import styled from 'styled-components';
import Product from './ProductItem';
// import { popular_products } from '../data';
import { publicRequest } from '../requestMethods';
import Pagination from '@mui/material/Pagination';

// Components

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0 70px;
  margin-top: 10px;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: 950px) {
    padding: 0 15px;
  }
`

const NoProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  padding: 10px;
  margin: 10px;
  background: transparent;
  // box-shadow: 2px 1px 10px 2px lightgrey;
  border: 2px solid #0d0d0d;
  border-radius: 25px;
  transition: all 0.5s ease-in-out;

  @media screen and (max-width: 400px) {
    height: 35px;
  }
`

const NoProductText = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: #000;
  letter-spacing: 1px;

  @media screen and (max-width: 400px) {
    font-size: 12px;
    letter-spacing: 0;
  }
`

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  width: auto;
  padding: 8px 0;
  margin: 0 80px;
  margin-top: 10px;
  border-radius: 25px;
  box-shadow: 2px 1px 10px 2px lightgrey;
  transition: all 0.5s ease-in-out;

  @media only screen and (max-width: 950px) {
    margin: 0 24px;
    margin-top: 10px;
  }
`

// Products

const Products = ({ categories, filters, sort }) => {
  // console.log(categories, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [page, setPage] = useState(1);
  const currentPage = window.location.href.split('/')[3];
  const rowPerPage =  currentPage ? 5 : 10;
  const [totalPage, setTotalPage] = useState(1);

  // useEffect(() => {
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:5000/e-commerce_api/products/',
  //     
  //   }).then((res) => {
  //     setProducts(res.data)
  //   })
  // }, []);

  useEffect(() => {
    const getProducts = async () => {
  
      try {
        const res = await publicRequest.get(
          (categories)
            ? `/products?categories=${categories}`
            : `/products`
        );
        // console.log(res);
        setProducts(res.data);
        setTotalPage(Math.ceil(res.data.length / rowPerPage))
      } catch (err) {
        console.dir(err);
      }
  
    };
    getProducts();
  },[categories, rowPerPage]);

  useEffect(() => {
      setFilteredProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      <Wrapper>
        <NoProduct>
            {filteredProducts.length === 1 ? (
              <NoProductText>
                1 RESULTADO ENCONTRADO
              </NoProductText>
            ) : (
              <NoProductText>
                {filteredProducts.length} RESULTADOS ENCONTRADOS
              </NoProductText>
            )}
        </NoProduct>

        {filteredProducts.slice((page-1)*rowPerPage, page*rowPerPage).map((item) => (
          <Product item={item} key={item._id} />
        ))}

      </Wrapper>
      <PaginationContainer>
        <Pagination
          page={page}
          count={totalPage}
          onChange={(e,value) => setPage(value)}
        />
      </PaginationContainer>
    </Container>
  )
}

export default Products