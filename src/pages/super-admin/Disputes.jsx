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

const user = { name: "John Doe", role: "Super Admin", avatar: "" };

// Stats cards
const stats = [
  { label: "Total Disputes", value: 120 },
  { label: "Open Disputes", value: 32 },
  { label: "In Review", value: 25 },
  { label: "Resolved", value: 63 },
];

// Dummy disputes data
const disputes = [
  {
    id: "D001",
    bookingId: "B001",
    user: "Alice",
    dealer: "Alice Motors",
    amount: "$500",
    priority: "High",
    status: "Open",
    date: "Feb 20, 2026",
  },
  {
    id: "D002",
    bookingId: "B002",
    user: "Bob",
    dealer: "Bob Auto",
    amount: "$300",
    priority: "Medium",
    status: "Resolved",
    date: "Mar 1, 2026",
  },
  {
    id: "D003",
    bookingId: "B003",
    user: "Charlie",
    dealer: "Charlie Cars",
    amount: "$700",
    priority: "High",
    status: "In Review",
    date: "Mar 5, 2026",
  },
  {
    id: "D004",
    bookingId: "B004",
    user: "Delta",
    dealer: "Delta Wheels",
    amount: "$150",
    priority: "Low",
    status: "Open",
    date: "Mar 10, 2026",
  },
];

// Status color mapping
const getStatusColor = (status) => {
  if (status === "Open") return "error";
  if (status === "Resolved") return "success";
  if (status === "In Review") return "warning";
};

// Priority color mapping
const getPriorityColor = (priority) => {
  if (priority === "High") return "error";
  if (priority === "Medium") return "warning";
  if (priority === "Low") return "success";
};

const DisputesManagement = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>

        {/* Heading */}
        <Typography variant="h5">Disputes Management</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
          Monitor and resolve disputes between user and dealer
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
            placeholder="Search disputes by ID, user, or dealer..."
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
            <MenuItem value="Open">Open</MenuItem>
            <MenuItem value="In Review">In Review</MenuItem>
            <MenuItem value="Resolved">Resolved</MenuItem>
          </TextField>
        </Paper>

        {/* Disputes Table */}
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Dispute ID",
                    "Booking ID",
                    "User",
                    "Dealer",
                    "Amount",
                    "Priority",
                    "Status",
                    "Date",
                    "Actions",
                  ].map((header) => (
                    <TableCell key={header} sx={{ color: "#fff" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {disputes.map((d, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{d.id}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{d.bookingId}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{d.user}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{d.dealer}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{d.amount}</TableCell>
                    <TableCell>
                      <Chip label={d.priority} color={getPriorityColor(d.priority)} variant="outlined" />
                    </TableCell>
                    <TableCell>
                      <Chip label={d.status} color={getStatusColor(d.status)} variant="outlined" />
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>{d.date}</TableCell>
                    <TableCell>
                      <IconButton color="info"><VisibilityIcon /></IconButton>
                      <IconButton color="warning"><EditIcon /></IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={disputes.length}
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

export default DisputesManagement;