import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetail from "../../features/catalog/ProductDetail";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

export default function ButtonAppBar() {
  const [mode, setMode] = useState(false);
  const displayMode = mode ? "dark" : "light";

  const darkTheme = createTheme({
    palette: {
      mode: displayMode,
    },
  });

  const handleMode = () => setMode(!mode);
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header handleMode={handleMode} />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetail />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}
