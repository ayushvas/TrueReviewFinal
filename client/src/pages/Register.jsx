import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(255,255,255,0.5), rgb(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/4065400/pexels-photo-4065400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 40px;
    width: 40%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`
const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`
const Button = styled.button`
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    margin-top: 20px;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    you agree to deez nuts!!!
                </Agreement>
                <Button>
                    Create
                </Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register