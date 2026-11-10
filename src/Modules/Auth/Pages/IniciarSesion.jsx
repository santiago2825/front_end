import { ArrowRight, KeyRound, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import { RUTAS } from '../../../Core/Routes/rutas'
import { loginData } from '../Data/Informacion'
import CampoAuth from '../Components/CampoAuth'
import AuthLayout from '../Components/AuthLayout'
import useLoginForm, { loginRules } from '../Hooks/useLoginForm'

export default function IniciarSesion() {
    const {
        register,
        onSubmit,
        formState: { errors, isSubmitting },
    } = useLoginForm()

    return (
        <AuthLayout
            eyebrow="Qué bueno tenerte de vuelta"
            title="Inicia sesión"
            description="Ingresa a StockMind para continuar con la gestión de tus recursos."
            asideTitle="Todo tu inventario, en un solo lugar."
            asideText="Accede a las herramientas de gestión diseñadas para la comunidad SENA."
        >
            <form onSubmit={onSubmit} noValidate>
                <CampoAuth
                    icono={Mail}
                    nombre="identificador"
                    placeholder="Correo electrónico o usuario de prueba"
                    autoComplete="username"
                    register={register}
                    error={errors.identificador}
                    reglas={loginRules.identificador}
                />
                <CampoAuth
                    icono={KeyRound}
                    nombre="password"
                    tipo="password"
                    placeholder="Contraseña (solo cuentas registradas)"
                    autoComplete="current-password"
                    register={register}
                    error={errors.password}
                    reglas={loginRules.password}
                    password
                />
                {errors.root?.server && (
                    <p role="alert" className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        {errors.root.server.message}
                    </p>
                )}
                <p className="mb-4 rounded-xl bg-[#f3f8ef] px-4 py-2.5 text-xs leading-5 text-slate-600">
                    {loginData.ayudaDemo}
                </p>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-sena px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(57,169,0,0.2)] transition hover:bg-sena-dark disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? 'Ingresando…' : 'Iniciar sesión'}
                    {!isSubmitting && <ArrowRight size={18} />}
                </button>
            </form>
            <p className="mt-4 text-center text-sm text-slate-500">
                ¿Aún no tienes cuenta?{' '}
                <Link to={RUTAS.registroRol} className="font-bold text-sena-dark hover:underline">Regístrate</Link>
            </p>
        </AuthLayout>
    )
}
