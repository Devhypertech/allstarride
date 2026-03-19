import { Box } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children, user }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar width="20%" />
      
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Header user={user} />
        <Box sx={{ flexGrow: 1, backgroundColor: "#f5f5f5", overflowY: "auto" }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;