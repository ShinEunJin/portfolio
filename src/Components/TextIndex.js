import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  width: 300px;
  height: 100vh;
  background-color: rgba(100, 100, 100, 0.1);
`

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`

const Img = styled.div`
  background-color: rgba(50, 50, 50, 0.3);
  border-radius: 50%;
  width: 150px;
  height: 150px;
`

const Ul = styled.ul``

const Li = styled.li`
  display: flex;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left: none;
  height: 50px;
  width: 100%;
  padding-left: 10px;
  margin-bottom: 2px;
`

function TextIndex() {
  return (
    <Container>
      <InfoColumn>
        <Img></Img>
      </InfoColumn>
      <Ul>
        <Li>
          <Link to={"/"}>인사말</Link>
        </Li>
        <Li>
          <Link to={"/about"}>소개</Link>
        </Li>
        <Li>기술 스택</Li>
        <Li>프로젝트</Li>
        <Li>기타</Li>
      </Ul>
    </Container>
  )
}

export default TextIndex
