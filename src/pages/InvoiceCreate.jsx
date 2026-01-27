import { Box, Grid, Paper, Button } from "@mui/material";
import InvoiceForm from "../components/invoice/InvoiceForm";
import InvoicePreview from "../components/invoice/InvoicePreview";

export default function InvoiceCreate() {
  return (
    <Box sx={{ width: "100%" }}>
      {/* ACTION BAR */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
        <Button>← Back Home</Button>
        <Box>
          <Button variant="outlined" sx={{ mr: 1 }}>
            Add Draft
          </Button>
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
        ✨ Need AI help?
      </Paper>

      {/* ✅ TRUE LEFT / RIGHT LAYOUT */}
      <Grid container spacing={3}>
        {/* LEFT — CREATE INVOICE */}
        <Grid item xs={12} lg={6}>
          <Paper sx={{ p: 3 }}>
            <InvoiceForm />
          </Paper>
        </Grid>

        {/* RIGHT — PREVIEW */}
        <Grid item xs={12} lg={6}>
          <Paper
            sx={{
              p: 3,
              position: "sticky",
              top: 24,
              height: "fit-content",
            }}
          >
            <InvoicePreview />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
