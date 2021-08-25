import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Container = styled.div``

const Will = styled.div`
  padding-left: 150px;
  padding-top: 150px;
  font-weight: 600;
  font-size: 1.1em;
  line-height: 1.7em;
  margin-bottom: 100px;
`

const WillText = styled.div`
  padding-left: 120px;
  line-height: 1.5em;
  width: 50%;
  word-break: keep-all;
  margin-bottom: 100px;
`

const Img = styled.img`
  width: 500px;
  height: 220px;
  margin-left: 350px;
`

function About() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 1200)
  }, [])

  return (
    <Container>
      <Fade when={start} top distance="10px" duration={800}>
        <Will>
          저와 맞지않는다면 제가 맞추겠습니다.
          <br /> 부족하다면 채우겠습니다.
          <br /> 물러서지 않습니다.
        </Will>
      </Fade>
      <Fade delay={300} when={start} right distance="10px" duration={800}>
        <WillText>
          2020년 여름 군대를 제대하고 개발에 뛰어들었습니다. 군대에서 블록체인의
          잠재력에 대해 알게되었습니다. 이 신기술에 대해 더 잘 알고 싶고
          이쪽으로 길을 가고 싶어 개발자가 되길 결심했습니다. 바로 블록체인에
          뛰어드는건 현실적으로 힘들어 차근차근 테크트리를 밟아가기로 했습니다.
          비교적 쉬운 마크업언어부터 시작해 js를 배우다가 리액트를 배웠고 MERN
          스택을 통해 직접 웹을 만들고 리액트 네이티브로 앱을 만들면서 프론트가
          얼마나 매력적인지 또 직접 배포까지 하며 개발이 얼마나 생산적이고
          흥미로운지 몸소 체험했습니다.
          <br />
          제가 비전공에다가 체계적인 커리큘럼을 통해 공부한 것은 아니기 때문에
          부족함이 많습니다. 하지만{" "}
          <span style={{ fontWeight: 600 }}>
            제 포트폴리오에 나와있는것 만큼은 개발자답게 확실히 할 수 있습니다
          </span>
          . <br />
          <span style={{ fontWeight: 700, textShadow: "1px 1px 1px gray" }}>
            없는 만큼 더 갈망하고 최선을 다해 모든 역량을 끌어모아 배우고
            적응하겠습니다
          </span>
          .
        </WillText>
      </Fade>
      <Fade delay={300} when={start} bottom distance="10px" duration={800}>
        <Img src="img/mern.png" />
      </Fade>
    </Container>
  )
}

export default About
