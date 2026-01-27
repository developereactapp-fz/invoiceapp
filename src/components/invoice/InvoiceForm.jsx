import { Typography, TextField, Grid, Button, Box } from "@mui/material";

export default function InvoiceForm() {
  return (
    <Box>
      <Typography variant="h6">Create Invoice</Typography>
      <Typography color="text.secondary" mb={2}>
        Generate and manage invoices quickly.
      </Typography>

      <TextField fullWidth label="Billed To" sx={{ mb: 2 }} />

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField fullWidth label="Invoice Number" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Currency" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Issued Date" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth label="Due Date" />
        </Grid>
      </Grid>

      <TextField fullWidth label="Project Detail" sx={{ mt: 2 }} />

      <Typography fontWeight={600} mt={3}>
        Items
      </Typography>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={4}>
          <TextField fullWidth label="Item" />
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth label="QTY" />
        </Grid>
        <Grid item xs={3}>
          <TextField fullWidth label="Cost" />
        </Grid>
        <Grid item xs={2}>
          <TextField fullWidth label="Amount" />
        </Grid>
      </Grid>

      <Button sx={{ mt: 2 }}>+ Add Item</Button>
    </Box>
  );
}
