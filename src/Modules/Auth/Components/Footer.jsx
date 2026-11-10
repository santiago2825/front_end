import LogoBlanco from '../../../assets/LOGO FULL.svg'

const Footer = () => {
    return (
        <footer className="bg-sena-dark px-5 pb-5 pt-12 text-white sm:px-8 lg:px-[8%] lg:pt-14">

            <div className="mb-10 grid gap-9 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-12">

                <div>
                    <img
                        src={LogoBlanco}
                        alt="StockMind"
                        className="mb-5 h-12 w-auto brightness-0 invert sm:h-14"
                    />

                    <p className="max-w-md text-sm leading-7 text-white/80">
                        Solución integral para la gestión administrativa de bienes y suministros del{' '}
                        <strong>
                            Servicio Nacional de Aprendizaje (SENA)
                        </strong>.
                    </p>
                </div>

                <div>
                    <h4 className="relative mb-5 text-lg font-bold after:mt-2 after:block after:h-0.5 after:w-8 after:bg-white/70 after:content-['']">
                        Plataforma
                    </h4>

                    <ul className="list-none space-y-2.5 p-0">
                        <li className="text-sm text-white/75">
                            Uso exclusivo SENA
                        </li>
                        <li className="text-sm text-white/75">
                            Control de Inventario
                        </li>
                        <li className="text-sm text-white/75">
                            Gestión de Elementos
                        </li>
                        <li className="text-sm text-white/75">
                            Toma de Decisiones
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="relative mb-5 text-lg font-bold after:mt-2 after:block after:h-0.5 after:w-8 after:bg-white/70 after:content-['']">
                        Integral
                    </h4>

                    <ul className="list-none space-y-2.5 p-0">
                        <li className="text-sm text-white/75">
                            Alta Disponibilidad
                        </li>
                        <li className="text-sm text-white/75">
                            Tiempo Real
                        </li>
                        <li className="text-sm text-white/75">
                            Integridad de Datos
                        </li>
                        <li className="text-sm text-white/75">
                            Escalabilidad
                        </li>
                    </ul>
                </div>

            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-xs text-white/75 sm:flex-row sm:text-sm">

                <div>
                    <span>
                        © 2026 STOCKMIND | ADSO | SENA
                    </span>
                </div>

                <div className="flex items-center gap-2.5">
                    <span>Colombia</span>
                    <span className="w-6.25 rounded-xs text-xl">
                        🇨🇴
                    </span>
                </div>

            </div>

        </footer>
    )
}

export default Footer