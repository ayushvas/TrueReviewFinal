import React, { useEffect } from 'react'
import styled from "styled-components"
import {popularProducts} from "../data"
import Product from './Product'
import { useState } from 'react'
import axios from "axios";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = ({cat, filters, sort}) => {
  console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(cat 
          ? `http://localhost:9000/api/shops/show?cat=${cat}&sort=${sort}` 
          : `http://localhost:9000/api/shops/show?sort=${sort}`
        );
        console.log(res.data.shops);
        setProducts(res.data.shops);
        setFilteredProducts(res.data.shops);
      }catch(err){

      }
    }
    getProducts();
  },[cat, sort]);
  console.log(products);
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
      item[key].includes(value)))
    )
  }, [products, cat, filters]);


  console.log(filteredProducts);
  return (
    <Container>
      {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  )
}

export default Products