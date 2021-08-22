import React from "react"
import styled from "styled-components"

const innerHeight = window.innerHeight

const Container = styled.div`
  display: flex;
  /* background-color: rgba(173, 163, 255, 0.1); */
  background-color: yellow;
  width: ${(props) => props.innerHeight}px;
  height: ${(props) => props.innerHeight}px;
  border-top-left-radius: ${(props) => props.innerHeight}px;
  margin: 0 auto;
  position: relative;
`

const Center = styled.div`
  background-color: white;
  width: 300px;
  height: 300px;
  border-top-left-radius: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
`

function Home() {
  return (
    <Container innerHeight={innerHeight}>
      <Center>gd</Center>
    </Container>
  )
}

export default Home
