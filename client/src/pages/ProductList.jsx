import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'

const Container = styled.div`

`
const Title = styled.h1`
  margin: 20px;
`
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Filter = styled.div`
  margin: 20px;
`
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`
const Option = styled.option`

`

const ProductList = () => {
  const location = useLocation();
  console.log(location);
  const cat = location.pathname.split("/")[2];
  
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const handleFilters = (e)=>{
    const value = e.target.value;
    setFilters(
      {
        ...filters,
        [e.target.name]: value,
      }
    );
  };

  console.log(filters);
  return (
       <Container>
          <Announcements/>
          <Navbar/>
          <Title>{cat}</Title>
          <FilterContainer>
            <Filter>
              <FilterText>
                  Filter Products : 
              </FilterText>
              <Select name="location" onChange={handleFilters}>
                <Option disabled>
                  Location
                </Option>
                <Option>Pune</Option>
                <Option>Red</Option>
                <Option>Bangalore</Option>
              </Select>
            </Filter>
            <Filter>
              <FilterText>
                  Sort Products : 
              </FilterText>
              <Select onChange={(e) => {setSort(e.target.value)}}>
                <Option value = "newest">
                  Newest
                </Option>
                <Option value = "oldest">Oldest</Option>
              </Select>
            </Filter>
          </FilterContainer>
          <Products cat={cat} filters = {filters} sort={sort}/>
          <Newsletter/>
          <Footer/>
       </Container>
  )
}

export default ProductList