import { Box, IconButton, Avatar, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Header = ({ user }) => {
  return (
    <Box
      sx={{
        height: 80,
        backgroundColor: "#282828",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        px: 4,
        py:5,
      }}
    >
      <IconButton color="inherit">
        <NotificationsIcon sx={{ color: "white" }} />
      </IconButton>

      <Avatar alt={user.name} src={user.avatar || ""} sx={{ ml: 3 }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          ml: 1,
          color: "white",
        }}
      >
        <Typography variant="body1">{user.name}</Typography>
        <Typography variant="subtitle2">{user.role}</Typography>
      </Box>
    </Box>
  );
};

export default Header;