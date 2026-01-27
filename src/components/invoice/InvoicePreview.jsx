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

export default function InvoicePreview({ data }) {
    function numberToWords(num) {
  const ones = [
    "", "One", "Two", "Three", "Four", "Five",
    "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen",
    "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];

  const tens = [
    "", "", "Twenty", "Thirty", "Forty",
    "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];

  if (!num || num === 0) return "Zero";

  if (num < 20) return ones[num];

  if (num < 100)
    return tens[Math.floor(num / 10)] +
      (num % 10 ? " " + ones[num % 10] : "");

  if (num < 1000)
    return ones[Math.floor(num / 100)] +
      " Hundred" +
      (num % 100 ? " " + numberToWords(num % 100) : "");

  if (num < 1000000)
    return numberToWords(Math.floor(num / 1000)) +
      " Thousand" +
      (num % 1000 ? " " + numberToWords(num % 1000) : "");

  return "";
}

  return (
    <Box sx={{ fontSize: 13 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mb: 7,
        }}
      >
        {/* LEFT TITLE (UNCHANGED) */}
        <Typography sx={{ fontWeight: 700, alignItems: "center", letterSpacing: 1 }}>
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
      <Box sx={{ display: "flex", justifyContent: "right", mb: 2 }}>
        <Box textAlign="right">
          <Typography fontWeight={600}>HOLIDAYXTREMETOURISM LLC</Typography>
          <Typography>Deira, Fijri Murar</Typography>
          <Typography>Dubai</Typography>
          <Typography>TRN: 104402382600003</Typography>
          <Typography>Date: 17/01/2026</Typography>
          <Typography>Invoice No: 38011</Typography>
        </Box>
      </Box>

      {/* TOP INFO */}
      {/* TO ADDRESS (DYNAMIC) */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Box>
          <Typography fontWeight={600}>To:</Typography>
          <Typography whiteSpace="pre-line">
            {data.toAddress}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      {/* TABLE (UI SAME, DATA DYNAMIC) */}
      <TableContainer component={Paper} variant="outlined" 
        sx={{ border: "1px solid #000" }}>
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
  <TableCell sx={{ border: "1px solid #000" }}>
    1
  </TableCell>
  <TableCell sx={{ border: "1px solid #000" }}>
    {data.description}
  </TableCell>
  <TableCell align="right" sx={{ border: "1px solid #000" }}>
    {data.qty}
  </TableCell>
  <TableCell align="right" sx={{ border: "1px solid #000" }}>
    {data.price}
  </TableCell>
  <TableCell align="right" sx={{ border: "1px solid #000" }}>
    {data.vat}
  </TableCell>
  <TableCell align="right" sx={{ border: "1px solid #000" }}>
    {data.total}
  </TableCell>
</TableRow>
{Array.from({ length: 6 }).map((_, index) => (
  <TableRow key={`empty-${index}`}>
    <TableCell sx={{ border: "1px solid #000" }}>&nbsp;</TableCell>
    <TableCell sx={{ border: "1px solid #000" }}>&nbsp;</TableCell>
    <TableCell sx={{ border: "1px solid #000" }}>&nbsp;</TableCell>
    <TableCell sx={{ border: "1px solid #000" }}>&nbsp;</TableCell>
    <TableCell sx={{ border: "1px solid #000" }}>&nbsp;</TableCell>
    <TableCell sx={{ border: "1px solid #000" }}>&nbsp;</TableCell>
  </TableRow>
))}
<TableRow>
  <TableCell sx={{ border: "1px solid #000" }} />
  <TableCell
    sx={{ border: "1px solid #000", fontWeight: 700 }}
  >
    GRAND TOTAL
  </TableCell>
  <TableCell
    align="right"
    sx={{ border: "1px solid #000", fontWeight: 700 }}
  >
    {data.qty}
  </TableCell>
  <TableCell
    align="right"
    sx={{ border: "1px solid #000", fontWeight: 700 }}
  >
    {data.price}
  </TableCell>
  <TableCell
    align="right"
    sx={{ border: "1px solid #000", fontWeight: 700 }}
  >
    {data.vat}
  </TableCell>
  <TableCell
    align="right"
    sx={{ border: "1px solid #000", fontWeight: 700 }}
  >
    {data.total}
  </TableCell>
</TableRow>

          </TableBody>
        </Table>
      </TableContainer>

      {/* AMOUNT IN WORDS (UNCHANGED) */}

      <Typography sx={{ mt: 2 }}>
        <strong>Amount in Words:</strong>{" "}
        AED {numberToWords(Math.round(Number(data.total)))} Only.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* FOOTER (UNCHANGED) */}
      <Box sx={{ textAlign: "center", fontSize: 12 , marginTop: 20 }}>
        <Typography sx={{fontSize: 15}}>
          Phone: +971507555393 | P.O. Box: 76823, UAE
        </Typography>
        <Typography sx={{fontSize: 17}}>
          www.holidayxtreme.com | info@holidayxtreme.com
        </Typography>
      </Box>
    </Box>
  );
}
