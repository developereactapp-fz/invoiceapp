import { Box, InputBase, IconButton, Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";

export default function Topbar() {
  return (
    <Box
      sx={{
        height: 64,
        px: 3,
        bgcolor: "#2b2b2b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
      <Box fontWeight={600}>FluxBill.ID</Box>

      <Box
        sx={{
          width: 420,
          bgcolor: "#3a3a3a",
          borderRadius: 2,
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        <SearchIcon sx={{ mr: 1 }} />
        <InputBase
          placeholder="Quick Search..."
          sx={{ color: "#fff", width: "100%" }}
        />
      </Box>

      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton color="inherit"><DownloadIcon /></IconButton>
        <IconButton color="inherit"><ShareIcon /></IconButton>
        <Avatar sx={{ width: 32, height: 32 }} />
      </Box>
    </Box>
  );
}
