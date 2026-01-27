import {
  Box,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import logo from "../../assets/logo.png";

export default function InvoicePreview() {
  return (
    <Box sx={{ fontSize: 13 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        {/* LEFT TITLE (UNCHANGED) */}
        <Typography sx={{ fontWeight: 700, letterSpacing: 1 }}>
          TAX INVOICE
        </Typography>

        {/* RIGHT LOGO ONLY (NEW) */}
        <Box>
          <img
            src={logo}
            alt="Company Logo"
            style={{ height: 55, objectFit: "contain" }}
          />
        </Box>
      </Box>

      {/* TOP INFO (UNCHANGED) */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Typography fontWeight={600}>To:</Typography>
          <Typography>Talliwalla D’Souza</Typography>
          <Typography>Adds: Mehra National Park</Typography>
          <Typography>UAE</Typography>
          <Typography>TRN: 100349964900003</Typography>
        </Box>

        <Box textAlign="right">
          <Typography fontWeight={600}>HOLIDAYXTREMETOURISM LLC</Typography>
          <Typography>Deira, Fijri Murar</Typography>
          <Typography>Dubai</Typography>
          <Typography>TRN: 104402382600003</Typography>
          <Typography>Date: 17/01/2026</Typography>
          <Typography>Invoice No: 38011</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* TABLE (UNCHANGED) */}
      <TableContainer component={Paper} variant="outlined">
        <Table size="small">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#e6f0ee" }}>
              <TableCell>#</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Rate</TableCell>
              <TableCell align="right">VAT (5%)</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>
                8 jeeps hire for half day on Saturday 17th January 2026
              </TableCell>
              <TableCell align="right">8</TableCell>
              <TableCell align="right">500.00</TableCell>
              <TableCell align="right">200.00</TableCell>
              <TableCell align="right">4,200.00</TableCell>
            </TableRow>

            {[...Array(4)].map((_, i) => (
              <TableRow key={i}>
                <TableCell colSpan={6}>&nbsp;</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell />
              <TableCell sx={{ fontWeight: 700 }}>GRAND TOTAL</TableCell>
              <TableCell align="right">8</TableCell>
              <TableCell align="right">500.00</TableCell>
              <TableCell align="right">200.00</TableCell>
              <TableCell align="right" sx={{ fontWeight: 700 }}>
                4,200.00
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* AMOUNT IN WORDS (UNCHANGED) */}
      <Typography sx={{ mt: 2 }}>
        <strong>Amount in Words:</strong> AED Four Thousand Two Hundred Only.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* FOOTER (UNCHANGED) */}
      <Box sx={{ textAlign: "center", fontSize: 12 }}>
        <Typography>
          Phone: +971507555393 | P.O. Box: 76823, UAE
        </Typography>
        <Typography>
          www.holidayxtreme.com | info@holidayxtreme.com
        </Typography>
      </Box>
    </Box>
  );
}
