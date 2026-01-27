import { Box } from "@mui/material";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }) {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Topbar />
      <Box sx={{ flex: 1, display: "flex" }}>
        <Sidebar />
<Box
  sx={{
    flex: 1,
    p: 3,
    width: "100%",
    maxWidth: "100%",
  }}
>
  {children}
</Box>      </Box>
    </Box>
  );
}
