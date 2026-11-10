import {
    MapPin,
    Mail
} from 'lucide-react'
import {
    FaFacebookF,
    FaInstagram,
    FaXTwitter
} from 'react-icons/fa6'
const Contactos = () => {
    return (
        <section
            id="contacto"
            className="scroll-mt-32 relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-[8%] lg:py-24"
        >
            <div className="mx-auto flex max-w-300 flex-col items-start justify-between gap-12 lg:flex-row lg:items-center lg:gap-20">
                <div className="flex-1">
                    <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-sena sm:text-sm">
                        Contacto Directo
                    </span>
                    <h2 className="my-5 text-3xl font-extrabold leading-[1.1] tracking-[-0.035em] text-slate-900 sm:text-4xl lg:text-5xl">
                        Hablemos de
                        <br />
                        <span className="font-extrabold text-sena-dark">
                            Gestión Eficiente
                        </span>
                    </h2>
                    <div className="mt-10">
                        <div className="mb-7 flex items-center gap-5 border-b border-slate-200 pb-5">
                            <MapPin
                                size={32}
                                strokeWidth={2}
                                className="shrink-0 text-sena"
                            />
                            <div>
                                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                                    Visítanos
                                </span>
                                <p className="text-base font-medium text-slate-700 sm:text-lg">
                                    SENA Centro de Comercio y Servicios, Popayán
                                </p>
                            </div>
                        </div>
                        <div className="mb-7 flex items-center gap-5 border-b border-slate-200 pb-5">
                            <Mail
                                size={32}
                                strokeWidth={2}
                                className="shrink-0 text-sena"
                            />
                            <div>
                                <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-slate-500">
                                    Escríbenos
                                </span>
                                <p className="break-all text-base font-medium text-slate-700 sm:text-lg">
                                    soporte.stockmind@sena.edu.co
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-1 justify-center">
                    <div className="absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(57,169,0,0.1)_0%,rgba(255,255,255,0)_70%)]" />
                    <div className="relative z-10 w-full rounded-3xl border border-slate-100 bg-[#fbfdf9] p-7 text-left shadow-[0_16px_45px_rgba(15,23,42,0.05)] sm:p-9">
                        <p className="mb-6 text-lg font-bold text-slate-800 sm:text-xl">
                            Síguenos en{' '}
                            <span className="text-sena">
                                @SENACauca
                            </span>
                        </p>
                        <div className="flex flex-col gap-4">
                            <a
                                href="https://www.facebook.com/SENACauca"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-xl px-3 py-2 text-base font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:bg-white hover:text-sena sm:text-lg"
                            >
                                <FaFacebookF
                                    size={22}
                                    className="transition-transform duration-300 group-hover:scale-125"
                                />
                                <span>Facebook</span>
                            </a>
                            <a
                                href="https://www.instagram.com/senacomunica/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-xl px-3 py-2 text-base font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:bg-white hover:text-sena sm:text-lg"
                            >
                                <FaInstagram
                                    size={22}
                                    className="transition-transform duration-300 group-hover:scale-125"
                                />
                                <span>Instagram</span>
                            </a>
                            <a
                                href="https://twitter.com/SENAComunica"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-4 rounded-xl px-3 py-2 text-base font-medium text-slate-600 transition-all duration-300 hover:translate-x-1 hover:bg-white hover:text-sena sm:text-lg"
                            >
                                <FaXTwitter
                                    size={22}
                                    className="transition-transform duration-300 group-hover:scale-125"
                                />
                                <span>Twitter / X</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contactos