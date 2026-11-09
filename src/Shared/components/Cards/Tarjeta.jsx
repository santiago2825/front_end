/**
 * Caja blanca base para agrupar contenido.
 * titulo y accion (ej. un botón) son opcionales.
 */
const Tarjeta = ({ titulo, accion, children, className = '' }) => (
    <section className={`rounded-[20px] border border-superficie bg-white p-6 shadow-[0_4px_15px_rgba(0,0,0,0.03)] ${className}`}>
        {(titulo || accion) && (
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                {titulo && <h2 className="text-base font-bold text-text-primary">{titulo}</h2>}
                {accion}
            </div>
        )}
        {children}
    </section>
)

export default Tarjeta
