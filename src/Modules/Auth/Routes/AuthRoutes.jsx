import { Routes, Route } from 'react-router-dom'


import NotFound from '../../../Core/Routes/NotFound'

import Inicio from '../Pages/Inicio'




const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default AuthRoutes
