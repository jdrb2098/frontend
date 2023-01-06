import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom/dist";
import { OrdenCompra } from '../../Orden_compra';
import { OrdenCompraScreen } from '../../almacen/OrdenCompraScreen';

export const OrdenesRoutes = () => {
  return 
  (

    <Routes>

    <Route index element={<OrdenCompra />} />

    <Route path="ordenesCompras" element={<OrdenCompraScreen />} />

    <Route path="/*" element={<Navigate to="/dashboard" />} />

  </Routes>
);
    
}
export default OrdenesRoutes;