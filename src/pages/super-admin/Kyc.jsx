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
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const user = {
  name: "John Doe",
  role: "Super Admin",
  avatar: "",
};

const stats = [
  { label: "Total Submissions", value: 145 },
  { label: "Pending Review", value: 32 },
  { label: "Approved", value: 90 },
  { label: "Rejected", value: 23 },
];

const kycs = [
  {
    dealername: "Alice Motors",
    email: "alice@example.com",
    submissionDate: "12 Feb 2026",
    status: "Pending",
  },
  {
    dealername: "Bob Auto",
    email: "bob@example.com",
    submissionDate: "05 Feb 2026",
    status: "Approved",
  },
  {
    dealername: "Charlie Cars",
    email: "charlie@example.com",
    submissionDate: "22 Jan 2026",
    status: "Rejected",
  },
  {
    dealername: "Delta Wheels",
    email: "delta@example.com",
    submissionDate: "10 Feb 2026",
    status: "Pending",
  },
  {
    dealername: "Echo Motors",
    email: "echo@example.com",
    submissionDate: "02 Feb 2026",
    status: "Approved",
  },
];

const getStatusColor = (status) => {
  if (status === "Approved") return "success";
  if (status === "Rejected") return "error";
  if (status === "Pending") return "warning";
  return "default";
};

const KYCApprovals = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>
        
        {/* Heading */}
        <Typography variant="h5">KYC & Approvals</Typography>
        <Typography variant="body2" sx={{ mb: 3 }}>
          Review and approve dealer KYC documents
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
            {stats.map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
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
            placeholder="Search dealer..."
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
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="approved">Approved</MenuItem>
            <MenuItem value="rejected">Rejected</MenuItem>
          </TextField>
        </Paper>

        {/* Table */}
        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Dealer Name",
                    "Email",
                    "Submission Date",
                    "Status",
                    "Actions",
                  ].map((header) => (
                    <TableCell key={header} sx={{ color: "#fff" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {kycs.map((k, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{k.dealername}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{k.email}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{k.submissionDate}</TableCell>

                    <TableCell>
                      <Chip
                        label={k.status}
                        color={getStatusColor(k.status)}
                        variant="outlined"
                      />
                    </TableCell>

                    <TableCell>
                      <IconButton color="info">
                        <VisibilityIcon />
                      </IconButton>

                      <IconButton color="success">
                        <CheckCircleIcon />
                      </IconButton>

                      <IconButton color="error">
                        <CancelIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Pagination
            count={kycs.length}
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

export default KYCApprovals;