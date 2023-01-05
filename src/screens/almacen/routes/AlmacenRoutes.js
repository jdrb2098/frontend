import { Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom/dist";

import Solped from "../";
import NuevaSolicitudScreen from "../nuevaSolicitudScreen";
import ReportesScreen from "../ReportesScreen";
import HistorialPedidosScreen from "../HistorialPedidosScreen";
import Almacen from "../";
import { OrdenCompraScreen } from "../OrdenCompraScreen";



const AlmacenRoutes = () => {
  return (
    <Routes>

      <Route index element={<Almacen />} />

      <Route path="nueva-solicitud" element={<NuevaSolicitudScreen />} />

      <Route path="reportes" element={<ReportesScreen />} />

      <Route path="historial-solped" element={<HistorialPedidosScreen />}/>

<Route path="ordenCompra" element={<OrdenCompraScreen/>}/>

      <Route path="/*" element={<Navigate to="/dashboard" />} />

    </Routes>
  );
};

export default AlmacenRoutes;
