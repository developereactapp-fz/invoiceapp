import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import InvoiceCreate from "./pages/InvoiceCreate";
import InvoiceData from "./pages/InvoiceData";

export default function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<InvoiceCreate />} />
        <Route path="/invoices" element={<InvoiceData />} />
      </Routes>
    </MainLayout>
  );
}
