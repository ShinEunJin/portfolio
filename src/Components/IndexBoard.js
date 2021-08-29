import React from "react"
import { Link, withRouter } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 30vw;
  min-width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  background-color: rgba(150, 150, 150, 0.1);
`

const ImgColumn = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 30px;
  margin-bottom: 30px;
  width: 70%;
  max-width: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const Img = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 30px;
`

const Name = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  margin-bottom: 10px;
`

const SubName = styled.div`
  opacity: 0.6;
`

const MenuBoard = styled.div``

const Index = styled.div`
  border-bottom: ${(props) =>
    props.current ? "2px solid rgba(0, 0, 0, 0.2)" : "transparent"};
  padding: 10px 0;
  margin-bottom: 20px;
`

const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  font-weight: 600;
  opacity: 0.5;
`

function IndexBoard(props) {
  return (
    <Container>
      <ImgColumn>
        <Img src="img/증명사진.jpg" />
        <Name>SHIN EUN JIN</Name>
        <SubName>
          <span style={{ color: "green" }}>M</span>
          <span style={{ color: "tomato" }}>E</span>
          <span style={{ color: "blue" }}>R</span>
          <span style={{ color: "yellowgreen" }}>N</span> & Front Developer
        </SubName>
      </ImgColumn>
      <MenuBoard>
        <Index current={props.location.pathname === "/"}>
          <SLink to="/">Home</SLink>
        </Index>
        <Index current={props.location.pathname === "/about"}>
          <SLink to="/about">About</SLink>
        </Index>
        <Index current={props.location.pathname === "/skill"}>
          <SLink to="/skill">Skill</SLink>
        </Index>
        <Index current={props.location.pathname === "/project"}>
          <SLink to="/project">Project</SLink>
        </Index>
        <Index current={props.location.pathname === "/contact"}>
          <SLink to="/contact">Contact</SLink>
        </Index>
      </MenuBoard>
    </Container>
  )
}

export default withRouter(IndexBoard)
