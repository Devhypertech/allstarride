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
  { label: "Total Revenue", value: "$120,500" },
  { label: "Total Platform Fees", value: "$12,400" },
  { label: "Net Dealer Payouts", value: "$108,100" },
  { label: "Pending Payouts", value: "$5,500" },
];

// Dummy transactions data
const transactions = [
  {
    id: "T001",
    bookingId: "B001",
    user: "Alice",
    dealer: "Alice Motors",
    gross: "$1,200",
    fee: "$120",
    net: "$1,080",
    status: "Completed",
    date: "Feb 28, 2026",
  },
  {
    id: "T002",
    bookingId: "B002",
    user: "Bob",
    dealer: "Bob Auto",
    gross: "$800",
    fee: "$80",
    net: "$720",
    status: "Pending",
    date: "Mar 3, 2026",
  },
  {
    id: "T003",
    bookingId: "B003",
    user: "Charlie",
    dealer: "Charlie Cars",
    gross: "$1,500",
    fee: "$150",
    net: "$1,350",
    status: "Completed",
    date: "Mar 15, 2026",
  },
];

// Status colors
const getStatusColor = (status) => {
  if (status === "Completed") return "success";
  if (status === "Pending") return "warning";
  if (status === "Failed") return "error";
};

const Transactions = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>

        {/* Heading */}
        <Typography variant="h5">Transactions</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
          Monitor all financial transactions and payouts
        </Typography>
        
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
            placeholder="Search transactions..."
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
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Failed">Failed</MenuItem>
          </TextField>
        </Paper>

        {/* Transactions Table */}
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Transaction ID",
                    "Booking ID",
                    "User",
                    "Dealer",
                    "Gross Amount",
                    "Platform Fee",
                    "Net Payout",
                    "Status",
                    "Date",
                    "Action",
                  ].map((header) => (
                    <TableCell key={header} sx={{ color: "#fff" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {transactions.map((t, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{t.id}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.bookingId}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.user}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.dealer}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.gross}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.fee}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.net}</TableCell>
                    <TableCell>
                      <Chip label={t.status} color={getStatusColor(t.status)} variant="outlined" />
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>{t.date}</TableCell>
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
            count={transactions.length}
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

export default Transactions;