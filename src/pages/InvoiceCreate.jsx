import { Box, Grid, Paper, Button, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import InvoiceForm from "../components/invoice/InvoiceForm";
import InvoicePreview from "../components/invoice/InvoicePreview";

export default function InvoiceCreate() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* HEADER */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button startIcon={<ArrowBackIcon />}>Back Home</Button>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button variant="outlined">Add Draft</Button>
          <Button variant="contained">Send Invoice</Button>
        </Box>
      </Box>

      {/* AI BANNER */}
      <Paper
        sx={{
          mb: 3,
          p: 2,
          bgcolor: "#fff2e8",
          border: "1px solid #ffd7bd",
        }}
      >
        <Typography>✨ Need AI help?</Typography>
      </Paper>

      {/* 🔥 TRUE 6 / 6 GRID */}
      <Grid container spacing={3} sx={{ width: "100%" }}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <InvoiceForm />
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              position: "sticky",
              top: 24,
              height: "calc(100vh - 220px)",
              overflow: "auto",
            }}
          >
            <InvoicePreview />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
