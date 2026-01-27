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
          height: 48,
          fontWeight: 600,
          fontSize: "0.95rem",
          color: "#fff",
          textTransform: "none",
          borderRadius: "12px",

          /* Gradient background */
          background: "linear-gradient(45deg, #ff6b2c, #ff9a3c)",

          /* Initial glow */
          boxShadow: "0px 4px 15px rgba(255,107,44,0.35)",

          /* Smooth animation */
          transition: "all 0.3s ease",

          /* Pulsing glow animation */
          animation: "pulseGlow 2.5s infinite ease-in-out",

          "@keyframes pulseGlow": {
            "0%": {
              boxShadow: "0px 4px 15px rgba(255,107,44,0.35)",
            },
            "50%": {
              boxShadow: "0px 8px 30px rgba(255,107,44,0.6)",
            },
            "100%": {
              boxShadow: "0px 4px 15px rgba(255,107,44,0.35)",
            },
          },

          /* Hover effect */
          "&:hover": {
            background: "linear-gradient(45deg, #ff9a3c, #ff6b2c)",
            boxShadow: "0px 10px 35px rgba(255,107,44,0.8)",
            transform: "scale(1.06)",
            animation: "none", // stop pulse on hover
          },

          /* Click effect */
          "&:active": {
            transform: "scale(0.97)",
            boxShadow: "0px 5px 18px rgba(255,107,44,0.7)",
          },
        }}
      >
        Generate Invoice
      </Button>
</Box>
    </Box>
  );
}
