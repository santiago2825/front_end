import { useEffect, useId, useRef } from 'react'
import { X } from 'lucide-react'

const FOCUSABLES = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

/**
 * Ventana emergente accesible.
 * <Modal abierto={abierto} titulo="Nuevo traslado" onCerrar={() => setAbierto(false)}>...</Modal>
 *
 * Al abrir: el foco entra en la ventana y no se puede salir con Tab, la página de fondo no se desplaza.
 * Al cerrar: el foco vuelve al botón que la abrió. Escape también la cierra.
 */
const Modal = ({ abierto, titulo, descripcion, onCerrar, children, ancho = 'max-w-[560px]', ocultarBarra = false }) => {
    const idTitulo = useId()
    const ventana = useRef(null)
    // Se guarda la última función para no volver a suscribir los eventos en cada render del padre
    const alCerrar = useRef(onCerrar)
    useEffect(() => {
        alCerrar.current = onCerrar
    })

    useEffect(() => {
        if (!abierto) return

        const anterior = document.activeElement
        const overflowPrevio = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        const enfocables = () => Array.from(ventana.current?.querySelectorAll(FOCUSABLES) ?? [])
        // Enfoca el primer campo; si no hay, la propia ventana
        const primero = enfocables().find((el) => !el.hasAttribute('data-cerrar')) ?? ventana.current
        primero?.focus()

        const alPresionar = (evento) => {
            if (evento.key === 'Escape') return alCerrar.current()
            if (evento.key !== 'Tab') return

            const lista = enfocables()
            if (lista.length === 0) return evento.preventDefault()
            const inicio = lista[0]
            const fin = lista[lista.length - 1]
            if (evento.shiftKey && document.activeElement === inicio) {
                evento.preventDefault()
                fin.focus()
            } else if (!evento.shiftKey && document.activeElement === fin) {
                evento.preventDefault()
                inicio.focus()
            }
        }
        document.addEventListener('keydown', alPresionar)

        return () => {
            document.removeEventListener('keydown', alPresionar)
            document.body.style.overflow = overflowPrevio
            anterior?.focus?.()
        }
    }, [abierto])

    if (!abierto) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-text-primary/55 p-3 backdrop-blur-sm sm:items-center sm:p-5"
            // Solo cierra si el clic empezó en el fondo (no al terminar de seleccionar texto dentro)
            onMouseDown={(evento) => evento.target === evento.currentTarget && onCerrar()}
        >
            <div
                ref={ventana}
                role="dialog"
                aria-modal="true"
                aria-labelledby={idTitulo}
                tabIndex={-1}
                className={`max-h-[92vh] w-full overflow-y-auto rounded-t-3xl bg-white p-5 shadow-2xl outline-none sm:rounded-3xl sm:p-7 ${ocultarBarra ? 'scrollbar-hidden' : ''} ${ancho}`}
            >
                <div className="mb-5 flex items-start justify-between gap-4 border-b border-borde pb-4">
                    <div>
                        <h2 id={idTitulo} className="text-xl font-bold tracking-tight text-text-primary">{titulo}</h2>
                        {descripcion && <p className="mt-1.5 text-sm leading-relaxed text-texto-suave">{descripcion}</p>}
                    </div>
                    <button
                        type="button"
                        data-cerrar
                        onClick={onCerrar}
                        aria-label="Cerrar"
                        className="rounded-xl bg-background p-2 text-gray-500 transition-colors hover:bg-borde hover:text-text-primary"
                    >
                        <X size={20} />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}

export default Modal
