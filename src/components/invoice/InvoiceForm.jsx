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

export default function InvoiceForm({ onGenerate }) {
const [openAddress, setOpenAddress] = useState(false);

  const [address, setAddress] = useState({
    name: "",
    address: "",
    country: "",
    trn: "",
  });

  const [form, setForm] = useState({
    description: "",
    qty: 1,
    price: 0,
    invoiceNo: "",
  });

  const formattedAddress = `${address.name}
${address.address}
${address.country}
TRN: ${address.trn}`;

  const handleGenerate = () => {
    onGenerate({
      toAddress: formattedAddress,
      description: form.description,
      qty: form.qty,
      price: form.price,
      invoiceNo: form.invoiceNo,
    });
  };

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
          <TextField
            fullWidth
            label="Invoice Number"
            value={form.invoiceNo}
            onChange={(e) =>
              setForm({ ...form, invoiceNo: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="date"
            label="Date"
            value={new Date().toISOString().split("T")[0]}
            InputLabelProps={{ shrink: true }}
            disabled
          />
        </Grid>
      </Grid>

      {/* DESCRIPTION */}
      <TextField
        fullWidth
        multiline
        rows={2}
        label="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
        sx={{ mb: 3 }}
      />

      {/* QTY & PRICE */}
      <Grid container spacing={2} mb={3}>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            label="Quantity"
            value={form.qty}
            onChange={(e) =>
              setForm({ ...form, qty: Number(e.target.value) })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            type="number"
            label="Price"
            value={form.price}
            onChange={(e) =>
              setForm({ ...form, price: Number(e.target.value) })
            }
          />
        </Grid>
      </Grid>

      {/* GENERATE BUTTON */}
  <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 3 }}>
      <Button
        
        variant="contained" onClick={handleGenerate}
        disableElevation
        sx={{
          position: "relative",
          overflow: "visible",
          minWidth: 190,
          height: 52,
          fontWeight: 700,
          fontSize: "1rem",
          textTransform: "none",
          color: "#fff",
          borderRadius: "12px",

          /* Base gradient */
          background: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",

          /* No default shadow */
          boxShadow: "none",

          /* Animation keyframe reference */
          animation: "neonPulse 3s ease-in-out infinite",

          /* Hover strengthens glow & pulse */
          "&:hover": {
            animation: "neonPulse 1.8s ease-in-out infinite",
            transform: "translateY(-2px)",
          },

          "&:active": {
            transform: "scale(0.97)",
          },

          /* Glowing border */
          "&::before": {
            content: '""',
            position: "absolute",
            top: "-6px",
            left: "-6px",
            right: "-6px",
            bottom: "-6px",
            borderRadius: "inherit",
            background:
              "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)",
            filter: "blur(14px)",
            zIndex: -1,
            opacity: 0.6,
            animation: "neonGlow 3s ease-in-out infinite",
          },

          /* More intense glow while hovered */
          "&:hover::before": {
            opacity: 1,
          },

          /* Pulsing deeper inner shadow */
          "&::after": {
            content: '""',
            position: "absolute",
            inset: "0px",
            borderRadius: "inherit",
            boxShadow:
              "0 0 20px rgba(255,81,47,0.3), 0 0 30px rgba(221,36,118,0.5)",
            zIndex: -2,
            animation: "innerGlow 3s ease-in-out infinite",
          },
        }}
      >
        Generate Invoice
      </Button>

      {/* Keyframes for animation */}
      <style>
        {`
          @keyframes neonPulse {
            0% { filter: brightness(1) }
            50% { filter: brightness(1.25) }
            100% { filter: brightness(1) }
          }

          @keyframes neonGlow {
            0% { opacity: 0.3; filter: blur(12px) }
            50% { opacity: 0.8; filter: blur(18px) }
            100% { opacity: 0.3; filter: blur(12px) }
          }

          @keyframes innerGlow {
            0% { box-shadow: 0 0 20px rgba(255,81,47,0.3), 0 0 30px rgba(221,36,118,0.5) }
            50% { box-shadow: 0 0 28px rgba(255,81,47,0.5), 0 0 50px rgba(221,36,118,0.7) }
            100% { box-shadow: 0 0 20px rgba(255,81,47,0.3), 0 0 30px rgba(221,36,118,0.5) }
          }
        `}
      </style>
    </Box>

    </Box>
  );
}
