import { ArrowRight, BriefcaseBusiness, KeyRound, Mail, UserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RUTAS } from '../../../Core/Routes/rutas'
import AuthLayout from '../Components/AuthLayout'
import CampoAuth from '../Components/CampoAuth'
import SelectAuth from '../Components/SelectAuth'
import useRegistroForm, { registroRules } from '../Hooks/useRegistroForm'

const OPCIONES_ROL = [
    { value: 'Aprendiz', label: 'Aprendiz' },
    { value: 'Instructor', label: 'Instructor' },
]

export default function Registro() {
    const {
        register,
        onSubmit,
        confirmPasswordRules,
        formState: { errors, isSubmitting },
    } = useRegistroForm()

    return (
        <AuthLayout
            eyebrow="Únete a StockMind"
            title="Crea tu cuenta"
            description="Regístrate para acceder a las herramientas de gestión de inventario."
            asideTitle="Empieza a gestionar de forma más inteligente."
            asideText="Tu cuenta de demostración se guarda únicamente en este navegador. No se envían datos a un servidor."
        >
            <form onSubmit={onSubmit} noValidate>
                <CampoAuth
                    icono={UserRound}
                    nombre="nombre"
                    placeholder="Nombre completo"
                    autoComplete="name"
                    register={register}
                    error={errors.nombre}
                    reglas={registroRules.nombre}
                />
                <CampoAuth
                    icono={Mail}
                    nombre="correo"
                    tipo="email"
                    placeholder="Correo electrónico"
                    autoComplete="email"
                    register={register}
                    error={errors.correo}
                    reglas={registroRules.correo}
                />
                <SelectAuth
                    icono={BriefcaseBusiness}
                    nombre="rol"
                    placeholder="Selecciona tu rol"
                    opciones={OPCIONES_ROL}
                    register={register}
                    error={errors.rol}
                    reglas={registroRules.rol}
                />
                <CampoAuth
                    icono={KeyRound}
                    nombre="password"
                    tipo="password"
                    placeholder="Contraseña (mínimo 8 caracteres)"
                    autoComplete="new-password"
                    register={register}
                    error={errors.password}
                    reglas={registroRules.password}
                    password
                />
                <CampoAuth
                    icono={KeyRound}
                    nombre="confirmarPassword"
                    tipo="password"
                    placeholder="Confirma tu contraseña"
                    autoComplete="new-password"
                    register={register}
                    error={errors.confirmarPassword}
                    reglas={confirmPasswordRules}
                    password
                />
                {errors.root?.server && (
                    <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errors.root.server.message}
                    </p>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sena px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(57,169,0,0.2)] transition hover:bg-sena-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? 'Creando cuenta…' : 'Crear cuenta'}
                    {!isSubmitting && <ArrowRight size={18} />}
                </button>
            </form>
            <p className="mt-4 text-center text-sm text-slate-500">
                ¿Ya tienes cuenta?{' '}
                <Link to={RUTAS.login} className="font-bold text-sena-dark hover:underline">Inicia sesión</Link>
            </p>
        </AuthLayout>
    )
}
