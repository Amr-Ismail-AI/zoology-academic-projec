import "./index.css"

import WelcomePage from "./Welcome/WelcomePage"
import HomePage from "./Home/HomePage"
import PhylumDetail from "./PhylumDetail/PhylumDetail"

import { Routes, Route } from "react-router-dom";

function App() {
  return (
<Routes>

  <Route path="/" element={<WelcomePage />}>

  </Route>

<Route path="/home" element={<HomePage />} />
<Route path="/home/:PhylumId" element={<PhylumDetail />} />

</Routes>
  )
}

export default App