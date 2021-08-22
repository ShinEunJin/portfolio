import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 25vw;
  min-width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  background-color: rgba(100, 100, 100, 0.1);
`

const MenuBoard = styled.div`
  display: flex;
  flex-direction: column;
`

function IndexBoard() {
  return (
    <Container>
      <MenuBoard>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/skill">skill</Link>
      </MenuBoard>
    </Container>
  )
}

export default IndexBoard
