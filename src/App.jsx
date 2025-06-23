import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SupplyChainLeadership from "./pages/SupplyChainLeadership"
import SupplyChainOperations from "./pages/SupplyChainOperations"
import Finanace from "./pages/Finanace"
import HeadOfFinance from "./pages/HeadOfFinance"
import ProtectedRoute from "../ProtectedRoute"

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route 
          path="/supply-chain-leadership" 
          element={
            <ProtectedRoute>
              <SupplyChainLeadership/>
            </ProtectedRoute>
          }
          />
        <Route 
          path="/supply-chain-operations"
          element={
            <ProtectedRoute>
              <SupplyChainOperations />
            </ProtectedRoute>
          }
        />
        <Route path="/finance"
          element={
            <ProtectedRoute>
              <Finanace/>
            </ProtectedRoute>
          }
        />
        <Route path="/cfo/head-of-finance"
          element={
            <ProtectedRoute>
              <HeadOfFinance />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
