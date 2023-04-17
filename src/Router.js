import React from "react";
import { Route, Routes } from "react-router-dom";

import OrderConfirmation from "./pages/confirmation/OrderConfirmation";
import OrderEntry from "./pages/entry/Options";
import OrderSummary from "./pages/summary/OrderSummary";
function Router() {
  return (
    <Routes>
      <Route index element={<OrderEntry />} />
      <Route path="summary" element={<OrderSummary />} />
      <Route path="confirm" element={<OrderConfirmation />} />
    </Routes>
  );
}

export default Router;
