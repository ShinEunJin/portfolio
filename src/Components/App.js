import { BrowserRouter as Router } from "react-router-dom"

import GlobalStyle from "../Components/GlobalStyle"
import IndexBoard from "./IndexBoard"
import Transition from "./Transition"
import "./App.css"

function App() {
  return (
    <>
      <Router basename="/portfolio">
        <IndexBoard />
        <Transition />
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
