import { Typography, Divider, Box } from "@mui/material";

export default function InvoicePreview() {
  return (
    <Box>
      <Typography fontWeight={600} mb={2}>
        Invoice Preview
      </Typography>

      <Typography fontWeight={700}>Invoice UI/UX Design</Typography>
      <Typography variant="body2" mb={2}>
        Invoice #: INV-006489162154
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography fontWeight={600}>FROM</Typography>
          <Typography variant="body2">Budiono Siregar</Typography>
        </Box>
        <Box>
          <Typography fontWeight={600}>BILLED TO</Typography>
          <Typography variant="body2">Sid Vicious</Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Typography>Website Design — $240</Typography>
      <Typography>Mobile Responsive — $120</Typography>

      <Divider sx={{ my: 2 }} />

      <Typography fontWeight={600}>Total: $342.00</Typography>
    </Box>
  );
}
