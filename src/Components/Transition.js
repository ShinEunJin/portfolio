import React from "react"
import styled from "styled-components"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useLocation, Switch, Route } from "react-router-dom"

import About from "../Pages/About/About"
import Skill from "../Pages/Skill/Skill"
import Home from "../Pages/Home/Home"
import Project from "../Pages/Project/Project"

const innerHeight = window.innerHeight

const Container = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.1);
  width: ${(props) => 2 * props.innerHeight}px;
  height: ${(props) => props.innerHeight}px;
  border-top-left-radius: ${(props) => props.innerHeight}px;
  border-top-right-radius: ${(props) => props.innerHeight}px;
  position: relative;
  position: absolute;
  z-index: -10;
`

const Center = styled.div`
  background-color: white;
  width: 1000px;
  height: 1000px;
  border-radius: 50%;
  position: absolute;
  bottom: -500px;
  left: 50%;
  margin: -500px 0 0 -500px;
  z-index: -5;
`

const Title = styled.div`
  opacity: 0.1;
  font-weight: 700;
  font-size: 120px;
  position: absolute;
  top: 20%;
  left: 40%;
`

function Transition() {
  const location = useLocation()

  return (
    <TransitionGroup style={{ marginLeft: "30vw" }}>
      <CSSTransition
        unmountOnExit={true}
        key={location.pathname}
        timeout={1200}
        classNames="test"
      >
        <Container innerHeight={innerHeight}>
          <Center></Center>
          <Title>
            {location.pathname.split("/")[1]
              ? location.pathname.split("/")[1].toUpperCase()
              : "HOME"}
          </Title>
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skill" component={Skill} />
            <Route path="/project" component={Project} />
          </Switch>
        </Container>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Transition
