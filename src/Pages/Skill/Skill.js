import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 200px;
`

const Basic = styled.div``

const Front = styled.div``

const Back = styled.div``

const Img = styled.img`
  width: 60px;
  height: 60px;
`

function Skill() {
  return (
    <Container>
      <Basic>
        <Img src="img/html.png" />
        <Img src="img/css.png" />
        <Img src="img/js.png" />
        <span>
          기본적으로 html, css, js를 기반으로 기초적인 모든 웹은 구상하고 만들
          수 있습니다. <br /> 특히 js는 제 주력 언어로 라이브러리 없이도 동적인
          애니메이션을 만들 수 있습니다
        </span>
      </Basic>
      <Front>
        <Img src="img/react.png" />
        <Img src="img/redux.png" />
        <span>
          SPA로 react를 쓰며 react-native로 앱을 만들 수 있으며 필요할 때
          리덕스로 상태관리를 합니다.
        </span>
      </Front>
      <Back>
        <Img src="img/node.png" />
        <Img src="img/express.png" />
        <Img src="img/mongodb.png" />
        <Img src="img/aws.png" />
        <Img src="img/firebase.png" />
        <span>rest api를 자주 쓰고 </span>
      </Back>
    </Container>
  )
}

export default Skill
