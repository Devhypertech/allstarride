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

// Stats cards
const stats = [
  { label: "Total Vehicles", value: 1200 },
  { label: "Available", value: 850 },
  { label: "Booked", value: 300 },
  { label: "Maintenance", value: 50 },
  { label: "Avg. Rating", value: "4.6" },
];

const vehicles = [
  {
    name: "Toyota Camry",
    dealer: "Alice Motors",
    category: "Sedan",
    price: "$50",
    availability: "Available",
    bookings: 12,
    rating: 4.7,
  },
  {
    name: "Honda Civic",
    dealer: "Bob Auto",
    category: "Sedan",
    price: "$45",
    availability: "Booked",
    bookings: 8,
    rating: 4.5,
  },
  {
    name: "Ford Ranger",
    dealer: "Charlie Cars",
    category: "Pickup",
    price: "$70",
    availability: "Maintenance",
    bookings: 5,
    rating: 4.2,
  },
  {
    name: "BMW X5",
    dealer: "Delta Wheels",
    category: "SUV",
    price: "$120",
    availability: "Available",
    bookings: 20,
    rating: 4.8,
  },
  {
    name: "Audi A4",
    dealer: "Echo Motors",
    category: "Sedan",
    price: "$95",
    availability: "Booked",
    bookings: 15,
    rating: 4.6,
  },
];

const getAvailabilityColor = (availability) => {
  if (availability === "Available") return "success";
  if (availability === "Booked") return "warning";
  if (availability === "Maintenance") return "error";
};

const VehicleOverview = () => {
  return (
    <DashboardLayout user={user}>
      <Box sx={{ bgcolor: "#000000e4", color: "#fff", minHeight: "100vh", p: 3 }}>
        
        <Typography variant="h5">Vehicle Overview</Typography>
        <Typography variant="body2" sx={{ mb: 3, color: "#fff" }}>
          Manage all vehicles and monitor their status and performance
        </Typography>

        <Grid container spacing={2} sx={{ mb: 3 }}>
            {stats.map((item) => (
                <Grid item xs={12} sm={6} md={2.4} key={item.label} sx={{ flex: 1 }}>
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
            placeholder="Search vehicle by name or dealer..."
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
            <MenuItem value="all">All Availability</MenuItem>
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Booked">Booked</MenuItem>
            <MenuItem value="Maintenance">Maintenance</MenuItem>
          </TextField>
        </Paper>

        <Paper sx={{ p: 3, borderRadius: 3, bgcolor: "#282828" }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {[
                    "Vehicle Name",
                    "Dealer",
                    "Category",
                    "Price/Day",
                    "Availability",
                    "Total Bookings",
                    "Rating",
                    "Actions",
                  ].map((header) => (
                    <TableCell key={header} sx={{ color: "#fff" }}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {vehicles.map((v, index) => (
                  <TableRow key={index}>
                    <TableCell sx={{ color: "#fff" }}>{v.name}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{v.dealer}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{v.category}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{v.price}</TableCell>
                    <TableCell>
                      <Chip
                        label={v.availability}
                        color={getAvailabilityColor(v.availability)}
                        variant="outlined"
                      />
                    </TableCell>
                    <TableCell sx={{ color: "#fff" }}>{v.bookings}</TableCell>
                    <TableCell sx={{ color: "#fff" }}>{v.rating}</TableCell>
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
            count={vehicles.length}
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

export default VehicleOverview;