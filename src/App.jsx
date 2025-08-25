import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SupplyChainLeadership from "./pages/SupplyChainLeadership"
import SupplyChainOperations from "./pages/SupplyChainOperations"
import Finanace from "./pages/Finanace"
import HeadOfFinance from "./pages/HeadOfFinance"
import ProtectedRoute from "../ProtectedRoute"
import CPO from "./pages/CPO"
import LandingPage from "./pages/LandingPage"
import SuperAdmin from "./pages/SuperAdmin"
import CompanyAdmin from "./pages/CompanyAdminAccount"
import CompanyAdminLogin from "./pages/CompanyAdminLogin"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/super-admin/login" element={<SuperAdmin />} />
        <Route path="/company-admin/login" element={<CompanyAdminLogin />} />
        <Route path="/account/company-admin" element={<CompanyAdmin />} />
        <Route path="/login" element={<Login />} />
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
        <Route path="/cpo"
          element={
            <ProtectedRoute>
              <CPO />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
