import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SupplyChainLeadership from "./pages/SupplyChainLeadership"
import SupplyChainOperations from "./pages/SupplyChainOperations"
import Finanace from "./pages/Finanace"
import HeadOfFinance from "./pages/HeadOfFinance"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/supply-chain-leadership" element={<SupplyChainLeadership />} />
        <Route path="/supply-chain-operations" element={<SupplyChainOperations />} />
        <Route path="finance" element={<Finanace />} />
        <Route path="cfo/head-of-finance" element={<HeadOfFinance />} />
      </Routes>
    </Router>
  )
}

export default App
