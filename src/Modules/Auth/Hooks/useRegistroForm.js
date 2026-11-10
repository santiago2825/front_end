import { useEffect } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { authService } from '../Services/authService'

export const registroRules = {
    nombre: {
        required: 'Ingresa tu nombre.',
        validate: (value) => Boolean(value.trim()) || 'El nombre no puede estar vacío.',
    },
    correo: {
        required: 'Ingresa tu correo.',
        pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: 'Ingresa un correo válido.',
        },
    },
    rol: {
        required: 'Selecciona un rol.',
    },
    password: {
        required: 'Crea una contraseña.',
        minLength: {
            value: 8,
            message: 'La contraseña debe tener al menos 8 caracteres.',
        },
    },
    confirmarPassword: {
        required: 'Confirma tu contraseña.',
    },
}

export default function useRegistroForm() {
    const navigate = useNavigate()
    const {
        control,
        register,
        handleSubmit,
        trigger,
        setError,
        clearErrors,
        formState,
    } = useForm({
        mode: 'onTouched',
        reValidateMode: 'onChange',
    })
    const password = useWatch({ control, name: 'password', defaultValue: '' })
    const confirmation = useWatch({ control, name: 'confirmarPassword', defaultValue: '' })

    useEffect(() => {
        if (confirmation) {
            trigger('confirmarPassword')
        }
    }, [confirmation, password, trigger])

    const onSubmit = async (values) => {
        clearErrors(['correo', 'root.server'])

        try {
            await authService.register(values)
            navigate('/sesion')
        } catch (error) {
            if (error.message === 'Ya existe una cuenta registrada con ese correo.') {
                setError('correo', { type: 'server', message: error.message })
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
        password,
        onSubmit: handleSubmit(onSubmit),
        confirmPasswordRules: {
            ...registroRules.confirmarPassword,
            validate: (value) => value === password || 'Las contraseñas no coinciden.',
        },
    }
}
