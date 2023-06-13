import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgb(255,255,255,0.5), rgb(255, 255, 255, 0.5)), url("https://images.pexels.com/photos/3957616/pexels-photo-3957616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 40px;
    width: 25%;
    background-color: white;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`
const Button = styled.button`
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    margin-top: 20px;
    margin-bottom: 10px;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SING IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>
                    Sign In
                </Button>
                <Link>Forgot password?</Link>
                <Link>Create a new account.</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login