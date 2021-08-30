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
  width: 500px;
  height: 300px;
  &:hover {
    cursor: pointer;
    border: 1px solid gray;
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

function Web() {
  const [show, setShow] = useState(false)

  const onControl = () => {
    setShow(!show)
  }

  return (
    <ImgColumn>
      <Title>WEB PROJECT</Title>
      <Transition in={show}>
        {(state) => (
          <Img
            onClick={onControl}
            style={{ ...ImgAnimation[state] }}
            src="img/project-web.png"
          />
        )}
      </Transition>
      <Transition in={show}>
        {(state) => (
          <Description style={{ ...TextAnimation[state] }}>
            <DescriptionTitle>BIGyeong</DescriptionTitle>
            <span>
              자신이 사는곳이나 유명하진 않지만 나만의 작은 명소를 소개하는
              웹입니다. 아쉽게도 유인책이 없어서 지금 사람이 많이 이용하지는
              않지만 계속 진화중입니다. react와 express로 만들었으며 국내 여행을
              모토로 국내에 명소 뿐아니라 유명하지 않지만 아름다운 경치나
              볼거리를 가진 곳을 소개하는 취지로 만들었습나다. 데이터베이스는
              몽고디비로 배포는 aws의 ec2를 사용했습니다. 아직은 디자인도 아쉽고
              성능최적화 작업도 안됬지만 계속해서 발전시켜서 나중에 사업에 쓸
              프레임입니다.
            </span>
            <DescriptionLink target="_blank" href="http://bigyeong.com">
              Link
            </DescriptionLink>
            <DescriptionLink
              target="_blank"
              href="https://github.com/ShinEunJin/bigyeong"
            >
              Github
            </DescriptionLink>
            <DescriptionLink target="_blank" href="pdf/react.pdf">
              PDF
            </DescriptionLink>
          </Description>
        )}
      </Transition>
    </ImgColumn>
  )
}

export default Web
