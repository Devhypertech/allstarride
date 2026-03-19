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
  { label: "Total Dealers", value: 2500 },
  { label: "KYC Approved", value: 2100 },
  { label: "Pending Approvals", value: 78 },
  { label: "Total Revenue", value: "$56,980" },
];

const dealers = [
  {
    dealername: "Alice Motors",
    email: "alice@example.com",
    phone: "+1 234 567 890",
    vehicles: 24,
    revenue: "$12,450",
    joined: "12 Jan 2024",
    status: "Approved",
  },
  {
    dealername: "Bob Auto",
    email: "bob@example.com",
    phone: "+1 555 777 222",
    vehicles: 15,
    revenue: "$8,320",
    joined: "2 Feb 2024",
    status: "Rejected",
  },
  {
    dealername: "Charlie Cars",
    email: "charlie@example.com",
    phone: "+1 999 888 111",
    vehicles: 32,
    revenue: "$15,600",
    joined: "21 Mar 2024",
    status: "Approved",
  },
  {
    dealername: "Delta Wheels",
    email: "delta@example.com",
    phone: "+1 444 555 666",
    vehicles: 18,
    revenue: "$10,200",
    joined: "5 Apr 2024",
    status: "Pending",
  },
  {
    dealername: "Echo Motors",
    email: "echo@example.com",
    phone: "+1 777 888 999",
    vehicles: 9,
    revenue: "$4,800",
    joined: "10 May 2024",
    status: "Rejected",
  },
];

const getStatusColor = (status) => {
  if (status === "Approved") return "success";
  if (status === "Rejected") return "error";
  if (status === "Pending") return "primary";
};

const DealerManagement = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>
        
        <Typography variant="h5">Dealers Management</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>Manage car dealers and their KYC verification status</Typography>

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
            placeholder="Search dealer by name or email..."
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
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </TextField>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                        {[
                            "Dealer Name",
                            "Contact",
                            "Total Vehicles",
                            "Revenue Generated",
                            "Joined Date",
                            "KYC Status",
                            "Action",
                        ].map((header) => (
                            <TableCell key={header} sx={{ color: "#fff" }}>
                            {header}
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {dealers.map((dealer, index) => (
                        <TableRow key={index}>
                            <TableCell sx={{ color: "#fff" }}>{dealer.dealername}</TableCell>
                            <TableCell sx={{ color: "#fff" }}>
                                <Typography variant="body2">{dealer.email}</Typography>
                                <Typography variant="body2">{dealer.phone}</Typography>
                            </TableCell>
                            <TableCell sx={{ color: "#fff" }}>{dealer.vehicles}</TableCell>
                            <TableCell sx={{ color: "#fff" }}>{dealer.revenue}</TableCell>
                            <TableCell sx={{ color: "#fff" }}>{dealer.joined}</TableCell>
                            <TableCell>
                                <Chip
                                    label={dealer.status}
                                    color={getStatusColor(dealer.status)}
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
                count={dealers.length}
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

export default DealerManagement;