import React from "react"
import styled from "styled-components"
import TextIndex from "../../Components/TextIndex"

const Container = styled.div`
  display: flex;
`

function LandingPage() {
  return (
    <Container>
      <TextIndex />
      <div>hihi</div>
    </Container>
  )
}

export default LandingPage
