import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom"

import GlobalStyle from "../Components/GlobalStyle"
import LandingPage from "../Pages/LandingPage/LandingPage"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Redirect to="*" from="/" />
      </Switch>
      <GlobalStyle />
    </Router>
  )
}

export default App
