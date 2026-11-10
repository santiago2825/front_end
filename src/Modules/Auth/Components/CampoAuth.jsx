import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

/**
 * Campo de texto de las pantallas de acceso (login y registro).
 * Si password=true muestra el botón para ver u ocultar la contraseña.
 * El placeholder también es la etiqueta (oculta visualmente) para lectores de pantalla.
 */
const CampoAuth = ({ icono: Icono, nombre, tipo = 'text', placeholder, register, error, reglas, password = false, autoComplete }) => {
    const [visible, setVisible] = useState(false)
    const id = `campo-${nombre}`

    return (
        <div className="mb-3 w-full">
            <div className="group relative">
                <Icono
                    size={18}
                    strokeWidth={2}
                    aria-hidden="true"
                    className={`pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${
                        error ? 'text-red-500' : 'text-gray-500 group-focus-within:text-sena'
                    }`}
                />

                <label htmlFor={id} className="sr-only">{placeholder}</label>
                <input
                    id={id}
                    type={password && visible ? 'text' : tipo}
                    placeholder={placeholder}
                    autoComplete={autoComplete}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                    {...register(nombre, reglas)}
                    className={`w-full rounded-xl border bg-[#F3F4F6] px-[42px] py-3 pr-11 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-white focus:ring-4 ${
                        error
                            ? 'border-red-400 focus:border-red-400 focus:ring-red-500/10'
                            : 'border-transparent focus:border-sena/30 focus:ring-sena/10'
                    }`}
                />

                {password && (
                    <button
                        type="button"
                        onClick={() => setVisible((v) => !v)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border-none bg-transparent p-1.5 text-gray-500 transition-colors hover:text-sena"
                        aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                        aria-pressed={visible}
                    >
                        {visible ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                )}
            </div>

            {error && (
                <p id={`${id}-error`} role="alert" className="mt-1 px-1 text-xs font-medium text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    )
}

export default CampoAuth
