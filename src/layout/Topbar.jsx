import { Box, InputBase, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import logo from "../assets/logo.png";

export default function Topbar() {
  return (
    <Box
      sx={{
        height: 100,
        px: 3,
        bgcolor: "#2b2b2b",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "#fff",
      }}
    >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
    <img
      src={logo}
      alt="Company Logo"
      style={{
        height: 86,
        objectFit: "contain",
      }}
    /></Box>

      <Box
        sx={{
          width: 400,
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

      <Box>
        <IconButton color="inherit">
          <DownloadIcon />
        </IconButton>
        <IconButton color="inherit">
          <ShareIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
