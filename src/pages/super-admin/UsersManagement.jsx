import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
} from "@mui/material";
import Pagination from "../../components/common/Pagination";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const user = {
  name: "John Doe",
  role: "Super Admin",
  avatar: "",
};

const stats = [
  { label: "Total Users", value: 1245 },
  { label: "Active Users", value: 980 },
  { label: "Suspended Users", value: 45 },
  { label: "New This Month", value: 120 },
];

const users = [
  {
    username: "alice",
    email: "alice@example.com",
    phone: "+1 234 567 890",
    bookings: 12,
    joined: "12 Jan 2024",
    status: "Active",
  },
  {
    username: "bob",
    email: "bob@example.com",
    phone: "+1 555 777 222",
    bookings: 3,
    joined: "2 Feb 2024",
    status: "Suspended",
  },
  {
    username: "charlie",
    email: "charlie@example.com",
    phone: "+1 999 888 111",
    bookings: 7,
    joined: "21 Mar 2024",
    status: "Active",
  },
];

const getStatusColor = (status) => {
  if (status === "Active") return "success";
  if (status === "Suspended") return "error";
  return "default";
};

const UserManagement = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>
        
        <Typography variant="h5">Users Management</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}> Manage and monitor all registered users on your platform</Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.label}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "#282828",
                  borderRadius: 3,
                  height: 120,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontSize: 13,
                    fontWeight: 300,
                    color: "#fff",
                    opacity: 0.8,
                    mb: 0.5,
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: "#fff",
                    lineHeight: 1,
                  }}
                >
                  {item.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Paper
          sx={{
            p: 2,
            mb: 3,
            bgcolor: "#282828",
            borderRadius: 3,
            display: "flex",
            gap: 2,
          }}
        >
          <TextField
            placeholder="Search users..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              input: { color: "#fff" },
              fieldset: { borderColor: "#555" },
            }}
          />

          <TextField
            select
            size="small"
            defaultValue="all"
            sx={{
              minWidth: 180,
              input: { color: "#fff" },
              fieldset: { borderColor: "#555" },
            }}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
          </TextField>
        </Paper>

        {/* Users Table */}
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Username",
                    "Email",
                    "Phone",
                    "Total Bookings",
                    "Joined Date",
                    "Status",
                    "Action",
                  ].map((header) => (
                    <TableCell key={header} sx={{ color: "#fff" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {users.map((u, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{u.username}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{u.email}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{u.phone}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{u.bookings}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{u.joined}</TableCell>

                    <TableCell>
                      <Chip
                        label={u.status}
                        color={getStatusColor(u.status)}
                        variant="outlined"
                      />
                    </TableCell>

                    <TableCell>
                      <IconButton color="info">
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton color="warning">
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error">
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={24}
            page={0}
            rowsPerPage={5}
            onPageChange={() => {}}
            onRowsPerPageChange={() => {}}
          />
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default UserManagement;