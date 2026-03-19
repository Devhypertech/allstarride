import { TablePagination, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Pagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
}) => {
  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      rowsPerPage={rowsPerPage}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPageOptions={[5, 10, 25]}
      ActionsComponent={(subprops) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={(e) => subprops.onPageChange(e, subprops.page - 1)}
            disabled={subprops.page === 0}
            sx={{
              color: "#fff",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={(e) => subprops.onPageChange(e, subprops.page + 1)}
            disabled={subprops.page >= Math.ceil(subprops.count / subprops.rowsPerPage) - 1}
            sx={{
              color: "#fff",
              "&:hover": { backgroundColor: "#333" },
            }}
          >
            <ChevronRight />
          </IconButton>
        </div>
      )}
      sx={{
        color: "#fff",
        borderTop: "1px solid #444",
        backgroundColor: "#282828",
        ".MuiTablePagination-selectIcon": { color: "#fff" },
        ".MuiTablePagination-actions": { color: "#fff" },
        ".MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows": {
          color: "#fff",
          fontSize: 13,
        },
        ".MuiTablePagination-selectRoot": {
          "& .MuiSelect-select": { color: "#fff" },
        },
      }}
    />
  );
};

export default Pagination;