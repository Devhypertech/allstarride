import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SuperAdminDashboard from "../pages/super-admin/Dashboard";
import SuperAdminUserManagement from "../pages/super-admin/UsersManagement";
import SuperAdminDealerManagement from "../pages/super-admin/DealersManagement";
import SuperAdminVehiclesOverview from "../pages/super-admin/VehiclesOverview";
import SuperAdminBookings from "../pages/super-admin/Bookings";
import SuperAdminTransactions from "../pages/super-admin/Transactions";
import SuperAdminDisputes from "../pages/super-admin/Disputes"
import SuperAdminKYC from "../pages/super-admin/Kyc"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SuperAdminDashboard />} />

        <Route path="/super-admin/dashboard" element={<SuperAdminDashboard />} /> 
        <Route path="/super-admin/users-management" element={<SuperAdminUserManagement />}/>
        <Route path="/super-admin/dealers-management" element={<SuperAdminDealerManagement />}/>
        <Route path="/super-admin/vehicles-overview" element={<SuperAdminVehiclesOverview />}/>
        <Route path="/super-admin/bookings" element={<SuperAdminBookings />}/>
        <Route path="/super-admin/transactions" element={<SuperAdminTransactions />}/>
        <Route path="/super-admin/disputes" element={<SuperAdminDisputes />}/>
        <Route path="/super-admin/kyc" element={<SuperAdminKYC />}/>

        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;