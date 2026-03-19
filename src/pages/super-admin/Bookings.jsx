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
  Stack,
} from "@mui/material";
import Pagination from "../../components/common/Pagination";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// Dummy user
const user = { name: "John Doe", role: "Super Admin", avatar: "" };

// Stats cards
const stats = [
  { label: "Total Bookings", value: 324 },
  { label: "Active Bookings", value: 120 },
  { label: "Completed", value: 180 },
  { label: "Cancelled", value: 24 },
];

// Dummy bookings data
const bookings = [
  {
    id: "B001",
    user: "Alice",
    dealer: "Alice Motors",
    vehicle: "Tesla Model 3",
    period: { from: "Feb 20, 2026", to: "Mar 30, 2026" },
    duration: "10 days",
    amount: "$1,200",
    status: "Completed",
  },
  {
    id: "B002",
    user: "Bob",
    dealer: "Bob Auto",
    vehicle: "BMW X5",
    period: { from: "Mar 1, 2026", to: "Mar 5, 2026" },
    duration: "5 days",
    amount: "$800",
    status: "Confirmed",
  },
  {
    id: "B003",
    user: "Charlie",
    dealer: "Charlie Cars",
    vehicle: "Audi Q7",
    period: { from: "Mar 10, 2026", to: "Mar 20, 2026" },
    duration: "10 days",
    amount: "$1,500",
    status: "Cancelled",
  },
];

// Status color mapping
const getStatusColor = (status) => {
  if (status === "Completed") return "success";
  if (status === "Cancelled") return "error";
  if (status === "Confirmed") return "primary";
};

const BookingsManagement = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>
        
        {/* Heading */}
        <Typography variant="h5">Bookings Management</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
          Monitor and manage all bookings on your platform
        </Typography>

        {/* Stats Cards */}
        <Grid container spacing={2} sx={{ mb: 3 }}>
          {stats.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.label} sx={{ flex: 1 }}>
              <Paper
                sx={{
                  p: 3,
                  bgcolor: "#282828",
                  borderRadius: 3,
                  height: 120,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Typography sx={{ fontSize: 13, fontWeight: 300, color: "#fff", opacity: 0.8, mb: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography sx={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1 }}>
                  {item.value}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Search + Filter */}
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
            placeholder="Search bookings..."
            variant="outlined"
            size="small"
            fullWidth
            sx={{ input: { color: "#fff" }, fieldset: { borderColor: "#555" } }}
          />
          <TextField
            select
            size="small"
            defaultValue="all"
            sx={{ minWidth: 180, input: { color: "#fff" }, fieldset: { borderColor: "#555" } }}
          >
            <MenuItem value="all">All Status</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Confirmed">Confirmed</MenuItem>
            <MenuItem value="Cancelled">Cancelled</MenuItem>
          </TextField>
        </Paper>

        {/* Bookings Table */}
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Booking ID",
                    "User",
                    "Dealer",
                    "Vehicle",
                    "Booking Period",
                    "Duration",
                    "Amount",
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
                {bookings.map((b, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{b.id}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{b.user}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{b.dealer}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{b.vehicle}</TableCell>
                    <TableCell>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <CalendarTodayIcon sx={{ color: "#aaa" }} />
                        <Stack direction="column" spacing={0.3}>
                          <Typography variant="body2" sx={{ color: "#fff" }}>{b.period.from}</Typography>
                          <Typography variant="body2" sx={{ color: "#fff" }}>{b.period.to}</Typography>
                        </Stack>
                      </Stack>
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>{b.duration}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{b.amount}</TableCell>
                    <TableCell>
                      <Chip label={b.status} color={getStatusColor(b.status)} variant="outlined" />
                    </TableCell>
                    <TableCell>
                      <IconButton color="info"><VisibilityIcon /></IconButton>
                      <IconButton color="warning"><EditIcon /></IconButton>
                      <IconButton color="error"><DeleteIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={bookings.length}
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

export default BookingsManagement;