/**
 * Botones para filtrar por una opción (ej. estado).
 * conteos es opcional: { Todos: 10, Pendiente: 2 }
 */
const FiltroChips = ({ opciones = [], valor, onCambiar, conteos = {} }) => (
    <div className="mb-6 flex flex-wrap gap-2">
        {opciones.map((opcion) => {
            const activo = opcion === valor
            return (
                <button
                    key={opcion}
                    type="button"
                    aria-pressed={activo}
                    onClick={() => onCambiar(opcion)}
                    className={`rounded-full border-2 px-4 py-1.5 text-sm font-semibold transition-colors ${
                        activo
                            ? 'border-sena bg-sena text-white'
                            : 'border-borde bg-white text-texto-medio hover:border-[#cbd5e1]'
                    }`}
                >
                    {opcion}
                    {conteos[opcion] !== undefined && (
                        <span className={`ml-2 ${activo ? 'text-white/80' : 'text-texto-tenue'}`}>{conteos[opcion]}</span>
                    )}
                </button>
            )
        })}
    </div>
)

export default FiltroChips
