import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { RUTAS } from '../../../Core/Routes/rutas'
import { ROLES } from '../../../Shared/Constants/roles'
import { authService } from '../Services/authService'

const DEMO_USERNAMES = ['admin', 'cuentadante', 'instructor', 'aprendiz', 'aprendix']

export const loginRules = {
    identificador: {
        required: 'Ingresa tu correo o usuario.',
        validate: (value) => {
            const normalizedValue = value.trim().toLowerCase()
            const isEmail = /^\S+@\S+\.\S+$/.test(normalizedValue)
            return DEMO_USERNAMES.includes(normalizedValue) || isEmail || 'Ingresa un correo válido o un usuario de prueba.'
        },
    },
    password: {
        validate: (value, values) => {
            const identifier = values.identificador?.trim().toLowerCase()
            return DEMO_USERNAMES.includes(identifier) || Boolean(value) || 'Ingresa tu contraseña.'
        },
        deps: ['identificador'],
    },
}

export default function useLoginForm() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        setError,
        clearErrors,
        formState,
    } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
    })

    const onSubmit = async (values) => {
        clearErrors(['identificador', 'password', 'root.server'])

        try {
            const session = await authService.login(values)
            navigate(session.rol === ROLES.ADMIN ? RUTAS.admin.categorias : '/sesion')
        } catch (error) {
            if (error.message === 'Revisa el correo y la contraseña e inténtalo de nuevo.') {
                setError('password', {
                    type: 'server',
                    message: 'Correo o contraseña incorrectos.',
                })
                return
            }

            setError('root.server', {
                type: 'server',
                message: error.message,
            })
        }
    }

    return {
        register,
        formState,
        onSubmit: handleSubmit(onSubmit),
    }
}
