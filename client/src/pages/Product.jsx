import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

const Container = styled.div`

`
const Wrapper = styled.div`
  padding: 50px;
  display:flex;
`
const ImgContainer = styled.div`
  flex: 1;
`
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`
const Title = styled.h1`
  font-weight: 200;
`
const Desc = styled.p`
  margin: 20px 0px;
`
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`

const Product = () => {
  return (
    <Container>
        <Announcements/>
        <Wrapper>
          <ImgContainer>
            <Image src=""/>
          </ImgContainer>
          <InfoContainer>
            <Title>
              Poo
            </Title>
            <Desc>
              Best in the effing town.
            </Desc>
            <Price>
              20
            </Price>
          </InfoContainer>
        </Wrapper>
          <Navbar/>
          <Newsletter/>
          <Footer/>
    </Container>
  )
}

export default Product