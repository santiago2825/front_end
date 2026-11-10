// Lista desplegable con el mismo estilo que CampoAuth.
// opciones: ['Planta', 'Contratista']  o  [{ value: 1, label: 'Centro X' }]
const SelectAuth = ({ icono: Icono, nombre, placeholder, opciones = [], register, error, reglas, disabled = false }) => {
    const id = `campo-${nombre}`

    return (
        <div className="mb-3">
            <div className="group relative">
                {Icono && (
                    <Icono
                        size={18}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors group-focus-within:text-sena"
                    />
                )}

                <label htmlFor={id} className="sr-only">{placeholder}</label>
                <select
                    id={id}
                    disabled={disabled}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                    {...register(nombre, reglas)}
                    className={`w-full rounded-xl border bg-[#F3F4F6] py-3 pr-4 text-sm text-text-primary outline-none transition-all duration-300 focus:bg-white focus:ring-4 focus:ring-sena/10 disabled:opacity-60 ${
                        Icono ? 'pl-[42px]' : 'pl-4'
                    } ${error ? 'border-red-400' : 'border-transparent focus:border-sena/30'}`}
                >
                    <option value="">{placeholder}</option>
                    {opciones.map((opcion) => {
                        const { value, label } = typeof opcion === 'object' ? opcion : { value: opcion, label: opcion }
                        return <option key={value} value={value}>{label}</option>
                    })}
                </select>
            </div>

            {error && (
                <p id={`${id}-error`} role="alert" className="mt-1 px-1 text-xs font-medium text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    )
}

export default SelectAuth
