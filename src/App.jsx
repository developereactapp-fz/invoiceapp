
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "./layout/Sidebar";
import InvoiceCreate from "./pages/InvoiceCreate";

export default function App() {
  return (
    <BrowserRouter>
        
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* SIDEBAR */}
        <Sidebar />

        {/* MAIN CONTENT */}
        <Box sx={{ flex: 1, p: 2 }}>
          <Routes>
            {/* Default Redirect */}
            <Route path="/" element={<Navigate to="/invoice" replace />} />

            {/* DOCUMENT PAGES */}
            <Route
              path="/invoice"
              element={<InvoiceCreate type="invoice" />}
            />
            <Route
              path="/receipt"
              element={<InvoiceCreate type="receipt" />}
            />
            <Route
              path="/quotation"
              element={<InvoiceCreate type="quotation" />}
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
