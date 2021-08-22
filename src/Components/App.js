import { BrowserRouter as Router } from "react-router-dom"

import GlobalStyle from "../Components/GlobalStyle"
import IndexBoard from "./IndexBoard"
import LandingPage from "../Pages/LandingPage/LandingPage"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <IndexBoard />
        <LandingPage />
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
