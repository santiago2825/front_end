import { Routes, Route } from 'react-router-dom'


// import { ROLES } from '../../Shared/Constants/roles'

import AuthRoutes from '../../Modules/Auth/Routes/AuthRoutes'
// import AprendizRoutes from '../../Modules/Aprendiz/Routes/AprendizRoutes'
// import InstructorRoutes from '../../Modules/Instructor/Routes/InstructorRoutes'
// import CuentadanteRoutes from '../../Modules/Cuentadante/Routes/CuentadanteRoutes'
// import AdminRoutes from '../../Modules/Administrador/Routes/AdminRoutes'



const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route path="/aprendiz/*" element={(ROLES.APRENDIZ, <AprendizRoutes />)} />
            <Route path="/instructor/*" element={(ROLES.INSTRUCTOR, <InstructorRoutes />)} />
            <Route path="/cuentadante/*" element={(ROLES.CUENTADANTE, <CuentadanteRoutes />)} />
            <Route path="/admin/*" element={(ROLES.ADMIN, <AdminRoutes />)} /> */}
            <Route path="/*" element={<AuthRoutes />} />
        </Routes>
    )
}

export default AppRoutes
