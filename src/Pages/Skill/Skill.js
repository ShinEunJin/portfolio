import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Container = styled.div`
  padding: 100px;
  display: grid;
  grid-template-columns: 450px 450px;
  grid-template-rows: 1fr 1fr;
  column-gap: 60px;
`

const SkillColumn = styled.div`
  margin-bottom: 20px;
`

const ColumnTitle = styled.div`
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 10px;
`

const BaseColumn = styled.div`
  padding: 10px;
`

const Description = styled.div`
  font-size: 0.9em;
  word-break: keep-all;
  line-height: 1.5em;
`

const Img = styled.img`
  width: 40px;
  height: 40px;
  filter: drop-shadow(2px 2px 2px gray);
  margin-right: 10px;
  margin-bottom: 10px;
`

function Skill() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 1200)
  }, [])

  return (
    <Container>
      <Fade when={start} right distance="10px" duration={800}>
        <SkillColumn>
          <ColumnTitle>FRONTEND</ColumnTitle>
          <BaseColumn>
            <Img src="img/react.png" />
            <Description>
              리액트를 사용해서 많은 웹을 만들어 봤습니다. 최근 성능 향상을 위한
              hooks를 공부중이며 함수형을 자주 사용하지만 클래스형 웹도
              만들어보았고 life cycle에 대한 이해가 되어있습니다. 리액트의 최고
              장점인 네이티브로 앱을 만들어 보았으며 많이 쓴 만큼 자신있는
              기술입니다.
            </Description>
          </BaseColumn>
          <BaseColumn>
            <Img src="img/redux.png" />
            <Description>
              복잡한 웹을 만들지는 않아 리덕스를 많이 사용하지는 않았지만 필요할
              때는 thunk를 통해 비동기 처리를 자주 사용합니다. 아직 saga는
              배우지 않았지만 필요하다면 언제든 빨리 배울 수 있습니다.
            </Description>
          </BaseColumn>
        </SkillColumn>
      </Fade>
      <div></div> {/* grid 채우기 위한 용도 */}
      <Fade when={start} right distance="10px" duration={800}>
        <SkillColumn>
          <ColumnTitle>BACKEND</ColumnTitle>
          <BaseColumn>
            <Img src="img/node.png" />
            <Img src="img/express.png" />
            <Img src="img/firebase.png" />
            <Description>
              주로 Rest api를 쓰며 따로 프론트 프레임워크 없이 view template로
              웹을 만들어도 보았습니다. 최근에 테스트 주도 개발을 공부해
              에러처리와 클린코드에 많이 신경쓰며 집중해서 배우고 있습니다.
              네이티브 앱을 만들때는 백엔드로 파이어베이스를 사용했습니다.
            </Description>
          </BaseColumn>
          <BaseColumn>
            <Img src="img/mongodb.png" />
            <Img src="img/aws.png" />
            <Description>
              NOSQL인 몽고디비를 데이터베이스로 많이 활용했습니다. 성능 개선을
              위해 nesting과 index를 집중적으로 공부했습니다. 그리고 aws의 ec2와
              s3, route53을 이용해 직접 배포를 해본 적이 있습니다.
            </Description>
          </BaseColumn>
        </SkillColumn>
      </Fade>
      <Fade when={start} left distance="10px" duration={800}>
        <SkillColumn>
          <ColumnTitle>BASE</ColumnTitle>
          <BaseColumn>
            <Img src="img/html.png" />
            <Img src="img/css.png" />
            <Description>
              기본적인 CSS를 포함 SASS 및 TailWind CSS로 웬만한 CSS문법은
              익혔으며 미디어쿼리로 반응형도 문제없습니다.
            </Description>
          </BaseColumn>
          <BaseColumn>
            <Img src="img/js.png" />
            <Description>
              바닐라 JS를 많이 사용해봐서 라이브러리나 모듈이 없다해도 동적인
              요소를 근본적인 js코드로 구사할 수 있습니다. 그리고 코딩테스트를
              통해 단련된 문법을 구사할 수 있습니다.
            </Description>
          </BaseColumn>
        </SkillColumn>
      </Fade>
    </Container>
  )
}

export default Skill
