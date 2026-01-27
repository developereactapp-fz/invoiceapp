import { Box, IconButton } from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import ListAltIcon from "@mui/icons-material/ListAlt";

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: 64,
        bgcolor: "#1f1f1f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 2,
        gap: 2,
      }}
    >
      <IconButton>
        <DescriptionIcon sx={{ color: "#fff" }} />
      </IconButton>
      <IconButton>
        <ListAltIcon sx={{ color: "#9ca3af" }} />
      </IconButton>
    </Box>
  );
}
