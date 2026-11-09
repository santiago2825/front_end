// Nombres de rol tal como los entrega la API (tabla roles.nombre_rol)
export const ROLES = {
    ADMIN: 'Administrador',
    INSTRUCTOR: 'Instructor',
    APRENDIZ: 'Aprendiz',
    CUENTADANTE: 'Cuentadante',
}

// Si un usuario tiene varios roles (tabla rol_usuario), se abre el panel del primero de esta lista
export const PRIORIDAD_ROLES = [ROLES.ADMIN, ROLES.CUENTADANTE, ROLES.INSTRUCTOR, ROLES.APRENDIZ]