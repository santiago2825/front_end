import { ROLES } from '../../../Shared/Constants/roles'

const USERS_KEY = 'stockmind.auth.users'
const SESSION_KEY = 'stockmind.auth.session'

const DEMO_ROLES = {
    admin: ROLES.ADMIN,
    cuentadante: ROLES.CUENTADANTE,
    instructor: ROLES.INSTRUCTOR,
    aprendiz: ROLES.APRENDIZ,
    aprendix: ROLES.APRENDIZ,
}

const readUsers = () => {
    const storedUsers = localStorage.getItem(USERS_KEY)
    if (!storedUsers) return []

    const users = JSON.parse(storedUsers)
    if (!Array.isArray(users)) {
        throw new Error('No se pudieron leer las cuentas guardadas en este navegador.')
    }

    return users
}

const hashPassword = async (password, salt) => {
    const encoded = new TextEncoder().encode(`${salt}:${password}`)
    const digest = await crypto.subtle.digest('SHA-256', encoded)
    return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, '0')).join('')
}

const saveSession = (user) => {
    const session = {
        nombre: user.nombre,
        correo: user.correo,
        rol: user.rol,
    }
    localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    return session
}

export const authService = {
    getSession() {
        const storedSession = localStorage.getItem(SESSION_KEY)
        return storedSession ? JSON.parse(storedSession) : null
    },

    async login({ identificador, password }) {
        const normalizedIdentifier = identificador.trim().toLowerCase()
        const demoRole = DEMO_ROLES[normalizedIdentifier]

        if (demoRole) {
            return saveSession({
                nombre: `Usuario ${demoRole}`,
                correo: '',
                rol: demoRole,
            })
        }

        const user = readUsers().find(
            (registeredUser) => registeredUser.correo === normalizedIdentifier
        )
        if (!user || !password) {
            throw new Error('Revisa el correo y la contraseña e inténtalo de nuevo.')
        }

        const passwordHash = await hashPassword(password, user.salt)
        if (passwordHash !== user.passwordHash) {
            throw new Error('Revisa el correo y la contraseña e inténtalo de nuevo.')
        }

        return saveSession(user)
    },

    async register({ nombre, correo, password, rol }) {
        const normalizedEmail = correo.trim().toLowerCase()
        const users = readUsers()

        if (users.some((user) => user.correo === normalizedEmail)) {
            throw new Error('Ya existe una cuenta registrada con ese correo.')
        }

        const salt = Array.from(crypto.getRandomValues(new Uint8Array(16)))
            .map((byte) => byte.toString(16).padStart(2, '0'))
            .join('')
        const user = {
            nombre: nombre.trim(),
            correo: normalizedEmail,
            rol,
            salt,
            passwordHash: await hashPassword(password, salt),
        }

        localStorage.setItem(USERS_KEY, JSON.stringify([...users, user]))
        return saveSession(user)
    },

    logout() {
        localStorage.removeItem(SESSION_KEY)
    },
}
