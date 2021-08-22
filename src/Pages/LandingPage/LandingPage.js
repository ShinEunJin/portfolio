import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useLocation, Switch, Route } from "react-router-dom"
import About from "../About/About"
import Skill from "../Skill/Skill"
import Home from "../Home/Home"

function LandingPage() {
  const location = useLocation()
  return (
    <TransitionGroup>
      <CSSTransition
        mountOnEnter={true}
        unmountOnExit={true}
        key={location.pathname}
        timeout={1200}
        classNames="test"
      >
        <Switch location={location}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/skill" component={Skill} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default LandingPage
