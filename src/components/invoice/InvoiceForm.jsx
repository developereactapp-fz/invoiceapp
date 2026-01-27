import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Divider,
  Collapse,
  Paper,
} from "@mui/material";
import { useState } from "react";

export default function InvoiceForm() {
  const [openAddress, setOpenAddress] = useState(false);
  const [address, setAddress] = useState({
    name: "",
    address: "",
    country: "",
    trn: "",
  });

  const formattedAddress = `${address.name}
${address.address}
${address.country}
TRN: ${address.trn}`;

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Create Invoice
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={2}>
        Enter invoice details and generate invoice.
      </Typography>

      <Divider sx={{ mb: 3 }} />

      {/* TO ADDRESS COLLAPSED FIELD */}
      <Typography fontWeight={600} mb={1}>
        To Address
      </Typography>

      <TextField
        fullWidth
        multiline
        rows={3}
        value={address.name ? formattedAddress : ""}
        placeholder="Click to add customer address"
        onClick={() => setOpenAddress(true)}
        InputProps={{ readOnly: true }}
        sx={{ mb: 1, cursor: "pointer" }}
      />

      {/* DROPDOWN EDITOR */}
      <Collapse in={openAddress}>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 3,
            borderRadius: 2,
            animation: "fadeIn 0.3s ease-in-out",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Customer Name"
                value={address.name}
                onChange={(e) =>
                  setAddress({ ...address, name: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Address"
                value={address.address}
                onChange={(e) =>
                  setAddress({ ...address, address: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Country"
                value={address.country}
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="TRN"
                value={address.trn}
                onChange={(e) =>
                  setAddress({ ...address, trn: e.target.value })
                }
              />
            </Grid>
          </Grid>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button
              variant="contained"
              onClick={() => setOpenAddress(false)}
            >
              Done
            </Button>
          </Box>
        </Paper>
      </Collapse>

      {/* INVOICE NUMBER & DATE */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={6}>
          <TextField fullWidth label="Invoice Number" />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

      {/* DESCRIPTION */}
      <TextField
        fullWidth
        multiline
        rows={2}
        label="Description"
        sx={{ mb: 3 }}
      />

      {/* QTY & PRICE */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={6}>
          <TextField fullWidth type="number" label="Quantity" />
        </Grid>
        <Grid item xs={6}>
          <TextField fullWidth type="number" label="Price" />
        </Grid>
      </Grid>

      {/* GENERATE BUTTON */}
   <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
      <Button
        variant="contained"
        sx={{
          minWidth: 180,
          height: 50,
          fontWeight: 700,
          fontSize: "1rem",
          textTransform: "none",
          color: "#fff",

          /* Base gradient */
          background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",

          /* Initial subtle glow (for idle state) */
          boxShadow:
            "0 4px 12px rgba(221,36,118,0.25), 0 0 8px rgba(255,81,47,0.25)",

          borderRadius: "12px",
          transition: "all 0.4s ease",

          /* Hover Glow & Movement */
          "&:hover": {
            background: "linear-gradient(90deg, #dd2476 0%, #ff512f 100%)",
            boxShadow:
              "0 8px 30px rgba(221,36,118,0.45), 0 0 18px rgba(255,81,47,0.6)",
            transform: "translateY(-2px) scale(1.05)",
          },

          /* Active / Pressed */
          "&:active": {
            transform: "translateY(0px) scale(0.98)",
            boxShadow:
              "0 5px 18px rgba(221,36,118,0.5), 0 0 12px rgba(255,81,47,0.45)",
          },
        }}
      >
        Generate Invoice
      </Button>
    </Box>
    </Box>
  );
}
