import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Web from "./Web"
import Mobile from "./Mobile"

const Container = styled.div`
  padding-left: 100px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`

function Project() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 1200)
    return setStart(false)
  }, [])

  return (
    <Container>
      <Fade when={start} left distance="20px" duration={800}>
        <Web />
      </Fade>
      <Fade when={start} right distance="20px" duration={800}>
        <Mobile />
      </Fade>
    </Container>
  )
}

export default Project
