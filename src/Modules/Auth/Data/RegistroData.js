import StockMind from '../../../assets/Capa 1.svg'
import Sena from '../../../assets/SENAblanco.svg'
import AprendizFoto from '../../../assets/aprendizlogo.png'
import InstructorFoto from '../../../assets/InstructorLogo.png'
import { RUTAS } from '../../../Core/Routes/rutas'

// Pantalla "elige tu rol"
export const registroData = {
    logo: StockMind,
    titulo: 'Bienvenido, Miembro SENA',
    descripcion: 'Por favor, para continuar, selecciona el rol con el que interactuarás en el sistema.',
    roles: [
        { nombre: 'APRENDIZ', ruta: RUTAS.registroAprendiz, descripcion: 'Regístrate como aprendiz', tipo: 'aprendiz' },
        { nombre: 'INSTRUCTOR', ruta: RUTAS.registroInstructor, descripcion: 'Regístrate como instructor', tipo: 'instructor' },
    ],
    login: { texto: '¿Ya tienes cuenta?', enlace: 'Iniciar Sesión', ruta: RUTAS.login },
}

// Lo que cambia entre el registro de aprendiz y el de instructor.
// Todo lo demás (campos comunes, validaciones, diseño) es un único componente.
export const registroRoles = {
    aprendiz: {
        rol: 'Aprendiz',
        panel: {
            foto: AprendizFoto,
            alt: 'Aprendiz',
            titulo: '¡Bienvenido Aprendiz!',
            descripcion: 'Completa tu información para crear tu cuenta en StockMind.',
        },
        formulario: { logo: StockMind, titulo: 'Crear cuenta', subtitulo: 'Regístrate como aprendiz', boton: 'REGISTRARSE' },
        tiposIdentificacion: ['C.C.', 'C.E.', 'T.I.'],
        // Un aprendiz pertenece a una ficha (tabla aprendices.id_ficha)
        camposExtra: [{ nombre: 'ficha', tipo: 'text', icono: 'Hash', placeholder: 'Código de ficha', requerido: 'El código de ficha es obligatorio', patron: { valor: /^\d{5,10}$/, mensaje: 'Solo números (5 a 10 dígitos)' } }],
    },
    instructor: {
        rol: 'Instructor',
        panel: {
            foto: InstructorFoto,
            alt: 'Instructor',
            titulo: '¡Bienvenido Instructor!',
            descripcion: 'Completa tu información para crear tu cuenta en StockMind.',
        },
        formulario: { logo: StockMind, titulo: 'Crear cuenta', subtitulo: 'Regístrate como instructor', boton: 'REGISTRARSE' },
        tiposIdentificacion: ['C.C.', 'C.E.'],
        // Un instructor tiene tipo y especialidad (tabla instructores)
        camposExtra: [
            { nombre: 'tipo_instructor', tipo: 'select', icono: 'BriefcaseBusiness', placeholder: 'Tipo de instructor', requerido: 'Selecciona el tipo de instructor', opciones: ['Planta', 'Contratista'] },
            { nombre: 'especialidad_instructor', tipo: 'text', icono: 'BookOpen', placeholder: 'Especialidad', requerido: 'La especialidad es obligatoria' },
        ],
    },
}

export const logoSena = Sena
