import { Box, IconButton, Tooltip } from "@mui/material";
import { NavLink } from "react-router-dom";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";

export default function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "#ff512f" : "#9e9e9e",
    textDecoration: "none",
  });

  return (
    <Box
      sx={{
        width: 64,
        height: "100vh",
        bgcolor: "#f78400",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 2,
        gap: 2,
      }}
    >
      {/* TAX INVOICE */}
      <Tooltip title="Tax Invoice" placement="right">
        <NavLink to="/invoice" style={linkStyle}>
          <IconButton>
            <DescriptionOutlinedIcon />
          </IconButton>
        </NavLink>
      </Tooltip>

      {/* RECEIPT */}
      <Tooltip title="Receipt" placement="right">
        <NavLink to="/receipt" style={linkStyle}>
          <IconButton>
            <ReceiptLongOutlinedIcon />
          </IconButton>
        </NavLink>
      </Tooltip>

      {/* QUOTATION */}
      <Tooltip title="Quotation" placement="right">
        <NavLink to="/quotation" style={linkStyle}>
          <IconButton>
            <RequestQuoteOutlinedIcon />
          </IconButton>
        </NavLink>
      </Tooltip>
    </Box>
  );
}
