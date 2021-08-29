import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Rotate from "react-reveal/Rotate"
import { FiMail } from "react-icons/fi"
import { AiTwotonePhone, AiFillGithub } from "react-icons/ai"
import { FaMapMarkerAlt } from "react-icons/fa"

const Container = styled.div`
  padding: 35% 0 0 150px;
`

const Card = styled.div`
  min-width: 700px;
  height: 400px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.2);
  background-color: white;
  padding: 10px;
`

const Column = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`

const Text = styled.span`
  padding-left: 20px;
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  font-size: 1.1em;
`

const Icon = styled.div`
  font-size: 2.5em;
  margin-right: 20px;
`

function Contact() {
  const [start, setStart] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setStart(true)
    }, 1200)
  }, [])

  return (
    <>
      <Rotate when={start} top right duration={800}>
        <Container>
          <Card>
            <Column>
              <Icon>
                <FiMail style={{ color: "#911F27" }} />
              </Icon>
              <Text>sineun5501@naver.com</Text>
            </Column>
            <Column>
              <Icon>
                <AiTwotonePhone style={{ color: "#3DB2FF" }} />
              </Icon>
              <Text>010-5501-2605</Text>
            </Column>
            <Column>
              <Icon>
                <FaMapMarkerAlt style={{ color: "#FFB830" }} />
              </Icon>
              <Text>대구 달성군 화원읍 (어디든 바로 갈 수 있습니다)</Text>
            </Column>
            <Column>
              <Icon>
                <AiFillGithub />
              </Icon>
              <Text>
                <a
                  href="https://github.com/ShinEunJin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://github.com/ShinEunJin
                </a>
              </Text>
            </Column>
          </Card>
        </Container>
      </Rotate>
    </>
  )
}

export default Contact
