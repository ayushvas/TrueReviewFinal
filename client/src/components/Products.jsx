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
  console.log(cat);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get("http://localhost:9000/api/shops/show");
        setProducts(res.data);
      }catch(err){

      }
    }
  },[cat]);

  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>
      item[key].includes(value)))
    )
  }, [products, cat, filters]);
  return (
    <Container>
        {products.map(item=>(
            <Product item={item} key={item.id}/>
        ))}
    </Container>
  )
}

export default Products