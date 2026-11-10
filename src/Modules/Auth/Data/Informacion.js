import StockMind from '../../../assets/Capa 1.svg'
import { RUTAS } from '../../../Core/Routes/rutas'

export const loginData = {
    titulo: 'Inicia Sesión',
    correoPlaceholder: 'Correo Electrónico',
    passwordPlaceholder: 'Contraseña',
    olvidarPassword: '¿Olvidaste tu contraseña?',
    botonLogin: 'INICIAR SESIÓN',
    ayudaDemo: 'Modo de prueba: escribe admin, cuentadante, instructor o aprendiz en el campo de usuario. No necesitas contraseña.',
    logo: { stockmind: StockMind },
    lateral: {
        titulo: '¡Bienvenido a StockMind!',
        descripcion: 'Ingresa tus datos personales y comienza tu jornada con nosotros.',
        botonRegistro: 'REGISTRARSE',
    },
    rutas: { inicio: RUTAS.inicio, registro: RUTAS.registroRol },
}
