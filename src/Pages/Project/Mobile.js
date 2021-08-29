import React, { useState } from "react"
import styled from "styled-components"
import { Transition } from "react-transition-group"

const Title = styled.div`
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 10px;
`

const ImgColumn = styled.div`
  position: relative;
  margin-bottom: 50px;
`

const Img = styled.img`
  width: 250px;
  height: 400px;
  &:hover {
    cursor: pointer;
  }
  transition: all 1s cubic-bezier(0.46, 0, 0.22, 0.99);
  box-shadow: 1px 1px 7px 2px rgba(0, 0, 0, 0.3);
`

const Description = styled.div`
  position: absolute;
  top: 30px;
  left: 30px;
  opacity: 0;
  transition: all 0.8s ease-in-out;
  font-size: 0.9em;
  line-height: 1.3em;
  width: 450px;
  word-break: keep-all;
`

const DescriptionTitle = styled.div`
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 10px;
  padding-top: 10px;
`

const DescriptionLink = styled.a`
  display: block;
  padding: 5px 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 1.1em;
  font-weight: 700;
  margin-top: 10px;
`

const ImgAnimation = {
  entering: { transform: "translateX(500px)", opacity: 0.1 },
  entered: { transform: "translateX(500px)", opacity: 0.1 },
  exiting: { transform: "translateX(0px)", opacity: 1 },
  exited: { transform: "translateX(0px)", opacity: 1 },
}

const TextAnimation = {
  entering: { transform: "translateY(5px)", opacity: 1 },
  entered: { transform: "translateY(5px)", opacity: 1 },
  exiting: { transform: "translateY(-5px)", visibility: "hidden" },
  exited: { transform: "translateY(-5px)", visibility: "hidden" },
}

function Mobile() {
  const [show, setShow] = useState(false)

  const onControl = () => {
    setShow(!show)
  }

  return (
    <ImgColumn>
      <Title>MOBILE PROJECT</Title>
      <Transition in={show}>
        {(state) => (
          <Img
            onClick={onControl}
            style={{ ...ImgAnimation[state] }}
            src="img/project-mobile.png"
          />
        )}
      </Transition>
      <Transition in={show}>
        {(state) => (
          <Description style={{ ...TextAnimation[state] }}>
            <DescriptionTitle>BIGyeong M</DescriptionTitle>
            <span>
              BIGyeong을 리액트 네이티브로 만든 앱입니다. 백엔드와
              데이터베이스로는 파이어베이스를 사용했지만 아직 검색 엔진이 문제고
              손 볼게 많습니다만 기본적인 틀을 갖춘 앱입니다. 아직 배포는 하지
              않았습니다. 리액트를 이미 배워서 러닝커브가 낮아 쉽게 접할 수
              있었습니다. Navigation을 이해하고 expo를 사용하긴 했지만 웬만한
              모듈은 모두 사용할 수 있습니다.
            </span>
            <DescriptionLink
              target="_blank"
              href="https://expo.dev/@shineinjin/bigyeong"
            >
              Link
            </DescriptionLink>
            <DescriptionLink
              target="_blank"
              href="https://github.com/ShinEunJin/bigyeong-native"
            >
              Github
            </DescriptionLink>
            <DescriptionLink target="_blank" href="pdf/react_native.pdf">
              PDF
            </DescriptionLink>
          </Description>
        )}
      </Transition>
    </ImgColumn>
  )
}

export default Mobile
