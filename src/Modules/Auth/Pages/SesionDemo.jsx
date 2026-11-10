import { Navigate, useNavigate } from 'react-router-dom'
import { LogOut, ShieldCheck } from 'lucide-react'
import { RUTAS } from '../../../Core/Routes/rutas'
import useAuth from '../Hooks/useAuth'

export default function SesionDemo() {
    const navigate = useNavigate()
    const { session, logout } = useAuth()

    if (!session) return <Navigate to={RUTAS.login} replace />

    const cerrarSesion = () => {
        logout()
        navigate(RUTAS.login)
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f6faf3] px-4 py-10">
            <section className="w-full max-w-xl rounded-3xl border border-slate-200/80 bg-white p-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-12">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#effbe9] text-sena">
                    <ShieldCheck size={32} />
                </div>
                <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-sena">Sesión iniciada</p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
                    ¡Hola, {session.nombre}!
                </h1>
                <p className="mt-3 text-slate-600">
                    Ingresaste con el rol <strong className="text-slate-900">{session.rol}</strong>.
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Este es un acceso de demostración sin backend. Los paneles y datos reales requieren conexión a un servidor.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                    <button
                        type="button"
                        onClick={() => navigate(RUTAS.inicio)}
                        className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                    >
                        Volver al inicio
                    </button>
                    <button
                        type="button"
                        onClick={cerrarSesion}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-sena px-5 py-3 text-sm font-bold text-white transition hover:bg-sena-dark"
                    >
                        <LogOut size={17} />
                        Cerrar sesión
                    </button>
                </div>
            </section>
        </main>
    )
}
