import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import StockMind from '../../../assets/Capa 1.svg'
import { RUTAS } from '../../../Core/Routes/rutas'

export default function AuthLayout({ children, eyebrow, title, description, asideTitle, asideText }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#f6faf3] px-4 py-8 sm:px-6">
            <div className="grid w-full max-w-4xl overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.11)] lg:min-h-[560px] lg:grid-cols-[1fr_0.85fr]">
                <section className="flex flex-col justify-center px-6 py-8 sm:px-9 lg:px-11">
                    <div className="mb-6 flex items-center justify-between gap-3">
                        <Link to={RUTAS.inicio} className="inline-flex w-fit">
                            <img src={StockMind} alt="StockMind" className="h-10 w-auto" />
                        </Link>
                        <Link
                            to={RUTAS.inicio}
                            className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 transition hover:border-sena/30 hover:bg-[#f6faf3] hover:text-sena-dark sm:text-sm"
                        >
                            <ArrowLeft size={16} />
                            Volver al inicio
                        </Link>
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-sena">{eyebrow}</span>
                    <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.035em] text-slate-900">{title}</h1>
                    <p className="mb-6 mt-2 max-w-md text-sm leading-6 text-slate-500">{description}</p>
                    {children}
                </section>
                <aside className="relative hidden flex-col justify-end overflow-hidden bg-gradient-to-br from-[#39a900] to-[#216900] p-10 text-white lg:flex">
                    <div aria-hidden="true" className="absolute -right-24 -top-20 h-80 w-80 rounded-full border-[48px] border-white/10" />
                    <div aria-hidden="true" className="absolute -right-4 top-20 h-40 w-40 rounded-full border border-white/20" />
                    <div className="relative z-10">
                        <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider">
                            StockMind · SENA
                        </span>
                        <h2 className="max-w-sm text-3xl font-extrabold leading-tight tracking-tight">{asideTitle}</h2>
                        <p className="mt-4 max-w-sm leading-7 text-white/80">{asideText}</p>
                    </div>
                </aside>
            </div>
        </main>
    )
}
