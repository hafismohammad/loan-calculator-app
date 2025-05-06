import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Typography, Paper, Button, Box, TablePagination
} from '@mui/material';

const AmortizationTable = ({
  schedule,
  currency,
  conversionRate,
  onReset
}) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  if (!schedule.length) return null;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedRows = schedule.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box mt={4}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6">
          Amortization Schedule ({currency})
        </Typography>
        <Button variant="outlined" color="secondary" onClick={onReset}>
          Reset
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Month</strong></TableCell>
              <TableCell><strong>Principal</strong></TableCell>
              <TableCell><strong>Interest</strong></TableCell>
              <TableCell><strong>Remaining Balance</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.month}>
                <TableCell>{row.month}</TableCell>
                <TableCell>
                  {(parseFloat(row.principal) * conversionRate).toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {(parseFloat(row.interest) * conversionRate).toFixed(2)} {currency}
                </TableCell>
                <TableCell>
                  {(parseFloat(row.balance) * conversionRate).toFixed(2)} {currency}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={schedule.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25, 50]}
        />
      </TableContainer>
    </Box>
  );
};

export default AmortizationTable;
