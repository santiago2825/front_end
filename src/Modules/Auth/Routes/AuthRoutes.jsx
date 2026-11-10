import { Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { Boxes } from 'lucide-react'

import NotFound from '../../../Core/Routes/NotFound'
import { RUTAS } from '../../../Core/Routes/rutas'
import { ROLES } from '../../../Shared/Constants/roles'
import PanelLayout from '../../../Shared/Layouts/PanelLayout'
import { authService } from '../Services/authService'
import Categorias from '../../categorias/Pages/Categorias'
import Inicio from '../Pages/Inicio'
import IniciarSesion from '../Pages/IniciarSesion'
import Registro from '../Pages/Registro'
import SesionDemo from '../Pages/SesionDemo'

const PANEL_ADMIN = {
    enlaces: [
        {
            id: 'categorias',
            titulo: 'Categorías',
            ruta: RUTAS.admin.categorias,
            icono: Boxes,
            exacto: true,
        },
    ],
    rutaPerfil: RUTAS.admin.categorias,
    rutaNotificaciones: RUTAS.admin.categorias,
    titulosExtra: {
        [RUTAS.admin.home]: 'Administración',
    },
}

function RequerirAdmin() {
    const session = authService.getSession()

    if (!session) return <Navigate to={RUTAS.login} replace />
    if (session.rol !== ROLES.ADMIN) return <Navigate to="/sesion" replace />

    return <Outlet />
}

const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<IniciarSesion />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/registropaso1" element={<Registro />} />
            <Route path="/registroaprendiz" element={<Registro />} />
            <Route path="/registroinstructor" element={<Registro />} />
            <Route path="/sesion" element={<SesionDemo />} />
            <Route element={<RequerirAdmin />}>
                <Route path="/admin" element={<PanelLayout panel={PANEL_ADMIN} />}>
                    <Route index element={<Navigate to={RUTAS.admin.categorias} replace />} />
                    <Route path="home" element={<Navigate to={RUTAS.admin.categorias} replace />} />
                    <Route path="categorias" element={<Categorias />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AuthRoutes
