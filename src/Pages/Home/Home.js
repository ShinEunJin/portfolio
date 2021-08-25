import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

const Greeting = styled.div`
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.8em;
  padding: 200px;
`

const SubGreeting = styled.div`
  font-weight: 500;
  font-size: 1.1em;
  line-height: 1.7em;
  padding: 200px;
`

function Home() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 1200)
  }, [])

  return (
    <div>
      <Fade when={start} left distance="10px" duration={800}>
        <Greeting>
          안녕하십니까, <br /> 신입 개발자 신은진입니다
        </Greeting>
      </Fade>
      <Fade delay={200} when={start} left distance="10px" duration={800}>
        <SubGreeting>
          아직은 개발자가 아닌 코더 일지라도 <br />
          성장에 대한 열망만큼은 <br /> 최정상급 개발자입니다
        </SubGreeting>
      </Fade>
    </div>
  )
}

export default Home
