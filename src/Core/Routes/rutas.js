import { ROLES, PRIORIDAD_ROLES } from '../../Shared/Constants/roles'

// Única fuente de verdad de las URLs. Úsalas en <Link>, navigate() y los menús.
const crearRutas = (base, extras = {}) => ({
    base,
    home: `${base}/home`,
    notificaciones: `${base}/notificaciones`,
    perfil: `${base}/perfil`,
    editarPerfil: `${base}/perfil/editar`,
    ...extras,
})

export const RUTAS = {
    inicio: '/',
    login: '/login',
    registroRol: '/registropaso1',
    registroAprendiz: '/registroaprendiz',
    registroInstructor: '/registroinstructor',

    aprendiz: crearRutas('/aprendiz', {
        elementos: '/aprendiz/elementos',
        reportes: '/aprendiz/reportes',
        reportarDano: '/aprendiz/reportes/reportar-dano',
    }),
    instructor: crearRutas('/instructor', {
        ambientes: '/instructor/ambientes',
        reportes: '/instructor/reportes',
        prestamos: '/instructor/prestamos',
    }),
    cuentadante: crearRutas('/cuentadante', {
        ambientes: '/cuentadante/ambientes',
        elementos: '/cuentadante/elementos',
        asignaciones: '/cuentadante/asignaciones',
        prestamos: '/cuentadante/prestamos',
        traslados: '/cuentadante/traslados',
        reportes: '/cuentadante/reportes',
    }),
    admin: crearRutas('/admin', {
        centros: '/admin/centros',
        ambientes: '/admin/ambientes',
        inventario: '/admin/inventario',
        categorias: '/admin/categorias',
        movimientos: '/admin/movimientos',
        reportes: '/admin/reportes',
        usuarios: '/admin/usuarios',
    }),
}

const PANEL_POR_ROL = {
    [ROLES.ADMIN]: RUTAS.admin.home,
    [ROLES.CUENTADANTE]: RUTAS.cuentadante.home,
    [ROLES.INSTRUCTOR]: RUTAS.instructor.home,
    [ROLES.APRENDIZ]: RUTAS.aprendiz.home,
}

// Página de inicio del panel que le corresponde a una lista de roles
export const rutaPanelDe = (roles = []) => {
    const rol = PRIORIDAD_ROLES.find((r) => roles.includes(r))
    return rol ? PANEL_POR_ROL[rol] : RUTAS.login
}

// Títulos de la cabecera para las rutas comunes a todos los paneles (perfil y notificaciones)
export const titulosComunes = (rutas) => ({
    [rutas.perfil]: 'Mi perfil',
    [rutas.editarPerfil]: 'Editar datos',
    [rutas.notificaciones]: 'Notificaciones',
})
