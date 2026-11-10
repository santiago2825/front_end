import pasos from "../Data/Pasos"

export default function Nosotros(){
    return(
        <>
            <section
                id="nosotros"
                className="scroll-mt-32 overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[8%] lg:py-24"
            >
                <div className="mx-auto max-w-[1200px]">
                    <div className="mb-20 flex flex-col items-center gap-12 lg:mb-24 lg:flex-row lg:gap-16">
                        <div className="flex-[1.5]">
                            <span className="mb-4 block text-xs font-extrabold uppercase tracking-[0.16em] text-sena sm:text-sm">
                                Nuestra Misión
                            </span>
                            <h2 className="mb-6 text-3xl font-extrabold leading-[1.12] tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
                                Gestión Inteligente para el SENA
                            </h2>
                            <p className="mb-5 text-base leading-8 text-slate-600">
                                StockMind nace para transformar la administración de
                                recursos institucionales. Facilitamos el registro
                                detallado de cada elemento, permitiendo un control
                                preciso de su{' '}
                                <strong className="font-bold text-slate-900">
                                    identificación, estado y responsable
                                </strong>{' '}
                                en tiempo real.
                            </p>
                            <p className="mb-5 text-base leading-8 text-slate-600">
                                Nuestra plataforma no solo organiza; optimiza la toma
                                de decisiones mediante reportes detallados y una
                                gestión integral de entradas y salidas, garantizando
                                que cada herramienta esté donde debe estar.
                            </p>
                        </div>
                        <div className="grid w-full flex-1 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                            <div className="rounded-3xl border border-[#e5efdf] bg-gradient-to-br from-[#f7fcf4] to-white p-7 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1">
                                <h3 className="mb-1 text-4xl font-extrabold tracking-tight text-sena">
                                    100%
                                </h3>
                                <p className="font-medium text-slate-500">
                                    Control Digital
                                </p>
                            </div>
                            <div className="rounded-3xl border border-[#e5efdf] bg-gradient-to-br from-[#f7fcf4] to-white p-7 text-center shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-transform duration-300 hover:-translate-y-1">
                                <h3 className="mb-1 text-4xl font-extrabold tracking-tight text-sena">
                                    Real-Time
                                </h3>
                                <p className="font-medium text-slate-500">
                                    Consultas
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mb-10 text-center sm:mb-12">
                            <h3 className="mb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-sena sm:text-sm">
                                Proceso de Inicio
                            </h3>
                            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
                                ¿Cómo empezar en StockMind?
                            </h2>
                        </div>
                        <div className="mx-auto max-w-[1100px]">
                            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
                                {pasos.map((paso, index) => {
                                    const Icono = paso.icono
                                    return (
                                        <div
                                            key={index}
                                            className={`group rounded-3xl border border-slate-100 bg-[#f8faf8] px-6 py-8 text-center shadow-[0_8px_24px_rgba(15,23,42,0.035)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#39a900]/30 hover:bg-white hover:shadow-[0_20px_40px_rgba(57,169,0,0.1)] lg:col-span-2 ${
                                                index === 3
                                                    ? 'lg:col-start-2'
                                                    : index === 4
                                                        ? 'lg:col-start-4'
                                                        : ''
                                            }`}
                                        >
                                            <div className="mx-auto mb-5 flex h-[68px] w-[68px] items-center justify-center rounded-2xl bg-exito-fondo text-sena transition-all duration-300 group-hover:rotate-[5deg] group-hover:scale-105 group-hover:bg-sena group-hover:text-white">
                                                <Icono size={30} strokeWidth={2} />
                                            </div>
                                            <h4 className="mb-3 text-lg font-bold text-slate-900">
                                                {paso.titulo}
                                            </h4>
                                            <p className="text-sm leading-6 text-slate-500">
                                                {paso.descripcion}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}