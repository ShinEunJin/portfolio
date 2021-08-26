import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"
import { Transition } from "react-transition-group"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  padding-left: 100px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
`

const ImgColumn = styled.div`
  position: relative;
  margin-bottom: 50px;
  &:nth-child(2) {
    padding-left: 150px;
  }
`

const WebImg = styled.img`
  width: 500px;
  height: 300px;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    border: 1px solid gray;
  }
`

const MobileImg = styled.img`
  width: 250px;
  height: 400px;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    border: 1px solid gray;
  }
`

const Description = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`

const test = {
  entering: { width: "500px" },
  entered: { width: "500px" },
  exiting: { width: 0 },
  exited: { width: 0 },
}

const Test = styled.div`
  width: 0;
  overflow: hidden;
  height: 1em;
  transition: width 0.5s steps(25, end);
`

function Project() {
  const [showWeb, setShowWeb] = useState(false)

  const onControlWeb = () => {
    setShowWeb(!showWeb)
  }

  const WebText = [
    "비경 프로젝트입니다. 제가 대구에 사는데 개발자 업무가 있는",
    "곳이 찾아보니 거의 수도권쪽에 있다고 알고있습니다.",
    "제가 주말에 산책 한번 시원하게 하고 공부하는 걸 좋아하는데 타",
    "지경에 가면 경치좋고 걷기 좋은 지역이 어딘지 몰라서 사람들이",
    "자기가 사는 곳의 근처 숨은 명소를 알려주는 웹을 만들었습니다만",
    "아직 사람이 많이 없어서 게임할때 마다 주소를 올려 작게나마",
    "광고를 하고있습니다.",
    "계속해서 업그레이드 중이며 제 개발자의 길을 가면서 계속",
    "업그레이드 시켜 나중에 사업에 쓸 사이트 입니다.",
  ]

  return (
    <Container>
      <ImgColumn>
        <Title>WEB PROJECT</Title>
        <WebImg
          onMouseEnter={() => {
            setShowWeb(true)
          }}
          onMouseLeave={() => {
            setShowWeb(false)
          }}
          src="img/project-web.png"
        />
        <Transition in={showWeb}>
          {(state) => (
            <>
              {WebText.map((text, index) => (
                <Test
                  key={index}
                  style={{ ...test[state], transitionDelay: `${index * 0.5}s` }}
                >
                  {text}
                </Test>
              ))}
            </>
          )}
        </Transition>
      </ImgColumn>
      <ImgColumn>
        <Title>MOBILE PROJECT</Title>
        <MobileImg src="img/project-mobile.png" />
      </ImgColumn>
    </Container>
  )
}

export default Project
