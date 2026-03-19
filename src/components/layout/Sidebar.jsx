import { useState } from "react";
import WhiteLogo from "../../assets/white-logo.png";
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import StorefrontIcon from "@mui/icons-material/Storefront";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";


const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, to: "/super-admin/dashboard" },
  { text: "Users Management", icon: <PeopleIcon />, to: "/super-admin/users-management" },
  { text: "Dealers Management", icon: <StorefrontIcon />, to: "/super-admin/dealers-management" },
  { text: "Vehicles Overview", icon: <DirectionsCarIcon />, to: "/super-admin/vehicles-overview" },
  { text: "Bookings", icon: <BookOnlineIcon />, to: "/super-admin/bookings" },
  { text: "Transactions", icon: <ReceiptLongIcon />, to: "/super-admin/transactions" },
  { text: "Disputes", icon: <ReportProblemIcon />, to: "/super-admin/disputes" },
  { text: "KYC & Approvals", icon: <VerifiedUserIcon />, to: "/super-admin/kyc" },
  { text: "Logout", icon: <LogoutIcon />, to: "/super-admin/logout" },
];

const Sidebar = ({ width = "20%" }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sidebarBg = "#282828";
  const location = useLocation();
  
  return (
    <Box
      sx={{
        width,
        minWidth: 200,
        backgroundColor: sidebarBg,
        color: "white",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box sx={{ px: 2, py: 2, display: "flex", justifyContent: "center" }}>
        <Link to="/super-admin/dashboard">
          <img src={WhiteLogo} alt="All Star Rides" style={{ width: "80%", height: "auto" }} />
        </Link>
      </Box>

      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <ListItemButton
              key={item.text}
              component={Link}
              to={item.to}
              onClick={() => setSelectedIndex(index)}
              sx={{
                mb: 1,
                borderRadius: 2,
                px: 2,
                py: 1,
                backgroundColor: isSelected ? "white" : "transparent",
                mx: isSelected ? 1.5 : 0,
                "&:hover": { backgroundColor: isSelected ? "white" : "#3a3a3a" },
              }}
            >
              <ListItemIcon sx={{ color: isSelected ? sidebarBg : "white", minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  color: isSelected ? sidebarBg : "white",
                  fontWeight: isSelected ? "bold" : "normal",
                }}
              />
            </ListItemButton>
          );
        })}
      </List>
    </Box>
  );
};

export default Sidebar;