import { CheckCircle2 } from "lucide-react";
import servicios from "../Data/Servicios";
export default function Servicios(){
    return(
        <>
            <section
                id="servicios"
                className="scroll-mt-32 bg-[#f7f9f7] px-5 py-20 sm:px-8 lg:px-[8%] lg:py-24"
            >
                <div className="mx-auto max-w-300">
                    <div className="mb-10 text-center sm:mb-14">
                        <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-sena sm:text-sm">
                            Nuestros Servicios
                        </span>
                        <h2 className="my-3 text-3xl font-extrabold tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
                            Soluciones a tu Medida
                        </h2>
                        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
                            Explora las funcionalidades diseñadas específicamente
                            para cada integrante de la comunidad SENA.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {servicios.map((servicio) => {
                            const Icono = servicio.icono
                            return (
                                <div
                                    key={servicio.titulo}
                                    className={`relative rounded-3xl bg-white px-7 py-10 text-center transition-all duration-300 ${
                                        servicio.destacado
                                            ? 'border border-sena/35 shadow-[0_18px_45px_rgba(57,169,0,0.1)] md:-translate-y-2 hover:-translate-y-3'
                                            : 'border border-slate-200/80 shadow-[0_8px_25px_rgba(15,23,42,0.035)] hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]'
                                    }`}
                                >
                                    {servicio.destacado && (
                                        <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-sena px-4 py-1.5 text-xs font-bold text-white">
                                            Más Popular
                                        </span>
                                    )}
                                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#effbe9] text-sena">
                                        <Icono size={32} strokeWidth={1.8} />
                                    </div>

                                    <h3 className="mb-6 text-2xl font-bold text-slate-900">
                                        {servicio.titulo}
                                    </h3>
                                    <ul className="list-none space-y-4 p-0 text-left">
                                        {servicio.caracteristicas.map((caracteristica) => (
                                            <li
                                                key={caracteristica}
                                                className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                                            >
                                                <CheckCircle2
                                                    size={20}
                                                    className="shrink-0 font-bold text-sena"
                                                />
                                                <span>
                                                    {caracteristica}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}