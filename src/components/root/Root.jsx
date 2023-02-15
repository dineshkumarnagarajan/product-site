import React from "react";
import Box from "@mui/material/Box";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "../pageNotFound/PageNotFound";
import NoDataPage from "../noDataPage/NoDataPage";
import ComingSoonPage from "../comingSoonPage/ComingSoonPage";
import Products from "../products/Products";
function Root() {
  return (
    <div>
      <Box component="main" sx={{ flexGrow: 1, p: 1, width: '94vw', float: 'right' }}>
        <Routes>

          <Route path={`/dashboard`} element={<ComingSoonPage />} />
          <Route path={`*`} element={<PageNotFound />} />
          <Route path={`/products`} element={<Products />} />

        </Routes>
      </Box>
    </div>
  );
}

export default Root;
