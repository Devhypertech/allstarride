import DashboardLayout from "../../components/layout/DashboardLayout";
import {
  Typography,
  Grid,
  Paper,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { People, Storefront, BookOnline, MonetizationOn } from "@mui/icons-material";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar } from "recharts";

const user = {
  name: "John Doe",
  role: "Super Admin",
  avatar: "",
};

// Stats cards
const stats = [
  { title: "Total Registered Users", value: 1240, icon: <People />, color: "#3f51b5" },
  { title: "Total Dealers", value: 87, icon: <Storefront />, color: "#009688" },
  { title: "Active Bookings", value: 52, icon: <BookOnline />, color: "#ff9800" },
  { title: "Platform Revenue (Monthly)", value: "$18,240", icon: <MonetizationOn />, color: "#4caf50" },
];

// Dummy data for charts
const monthlyUsers = [
  { month: "Jan", users: 120 },
  { month: "Feb", users: 210 },
  { month: "Mar", users: 150 },
  { month: "Apr", users: 300 },
  { month: "May", users: 200 },
  { month: "Jun", users: 350 },
];

const revenueData = [
  { month: "Jan", revenue: 12000 },
  { month: "Feb", revenue: 15000 },
  { month: "Mar", revenue: 14000 },
  { month: "Apr", revenue: 18000 },
  { month: "May", revenue: 16000 },
  { month: "Jun", revenue: 20000 },
];

// Dummy recent bookings
const recentBookings = [
  { id: "B001", username: "Alice", dealer: "Star Dealers", vehicle: "Tesla Model 3", amount: "$250", status: "Active" },
  { id: "B002", username: "Bob", dealer: "Luxury Wheels", vehicle: "BMW X5", amount: "$300", status: "Completed" },
  { id: "B003", username: "Charlie", dealer: "AutoHub", vehicle: "Audi A6", amount: "$280", status: "Pending" },
  { id: "B004", username: "David", dealer: "Premium Cars", vehicle: "Mercedes C200", amount: "$320", status: "Active" },
  { id: "B005", username: "Eva", dealer: "Star Dealers", vehicle: "Porsche Macan", amount: "$400", status: "Completed" },
];

const SuperAdminDashboard = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" color="white">
            Dashboard Overview
          </Typography>
          <Typography variant="body2" color="white">
            Welcome back! Here's what's happening today
          </Typography>
        </Box>

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {stats.map((stat) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.title} sx={{ display: "flex" }}>
              <Paper
                sx={{
                  p: 2,
                  borderRadius: 3,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  width: "100%",
                  height: 130,
                  bgcolor: "#282828",
                  color: "#fff",
                  flex: 1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: stat.color,
                    color: "white",
                    p: 1.5,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                    height: 50,
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </Box>

                <Box sx={{ flex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 2,
                      overflow: "hidden",
                      height: "2.6em",
                      lineHeight: 1.3,
                      whiteSpace: "normal",
                    }}
                  >
                    {stat.title}
                  </Typography>

                  <Typography variant="h5" fontWeight={600}>
                    {stat.value}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Charts Section */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex" }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "#282828",
                color: "#fff",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Monthly User Growth
              </Typography>

              <Box sx={{ flex: 1, minHeight: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyUsers}>
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#222",
                        border: "none",
                        borderRadius: 6,
                        color: "#fff",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="users"
                      stroke="#3f51b5"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: "flex" }}>
            <Paper
              sx={{
                p: 3,
                borderRadius: 3,
                bgcolor: "#282828",
                color: "#fff",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" gutterBottom>
                Revenue Trend
              </Typography>

              <Box sx={{ flex: 1, minHeight: 280 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#222",
                        border: "none",
                        borderRadius: 6,
                        color: "#fff",
                      }}
                    />
                    <Bar
                      dataKey="revenue"
                      fill="#4caf50"
                      radius={[6, 6, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Recent Bookings Table */}
        <Paper sx={{ p: 3, borderRadius: 3, mt: 3, bgcolor: "#282828", color: "#fff" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Recent Bookings
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {["Booking ID", "Username", "Dealer Name", "Vehicle", "Amount", "Status", "Action"].map(
                    (header) => (
                      <TableCell key={header} sx={{ color: "#fff" }}>
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {recentBookings.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell sx={{ color: "#fff" }}>{row.id}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.username}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.dealer}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.vehicle}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.amount}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{row.status}</TableCell>
                    <TableCell>
                      <Button variant="contained" size="small">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </DashboardLayout>
  );
};

export default SuperAdminDashboard;