import { cloneElement, isValidElement } from 'react'

// Clase para inputs, selects y textareas (así todos se ven igual)
export const claseInput =
    'w-full rounded-[12px] border-2 border-borde bg-white px-4 py-2.5 text-sm text-text-primary outline-none transition-all placeholder:text-texto-tenue focus:border-sena focus:shadow-[0_0_0_4px_rgba(73,169,25,0.1)] aria-[invalid=true]:border-peligro'

/**
 * Etiqueta + campo + mensaje de error.
 * <Campo etiqueta="Nombre" htmlFor="nombre" error={errores.nombre}>
 *     <input id="nombre" className={claseInput} />
 * </Campo>
 * Cuando hay error, el campo se marca como inválido y se asocia con su mensaje (lectores de pantalla).
 */
const Campo = ({ etiqueta, htmlFor, error, children, className = '' }) => {
    const idError = `${htmlFor}-error`
    const campo = isValidElement(children) && error
        ? cloneElement(children, { 'aria-invalid': true, 'aria-describedby': idError })
        : children

    return (
        <div className={className}>
            <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-text-primary">
                {etiqueta}
            </label>
            {campo}
            {error && <p id={idError} role="alert" className="mt-1.5 text-sm text-peligro">{error}</p>}
        </div>
    )
}

export default Campo
