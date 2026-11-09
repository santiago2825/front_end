import { LoaderCircle, AlertTriangle } from 'lucide-react'

import Boton from '../UI/Boton'

/**
 * Envuelve el contenido de una página que depende de la API.
 *   <EstadoCarga cargando={cargando} error={error} onReintentar={recargar}>...</EstadoCarga>
 * Muestra "cargando", o el error con un botón para reintentar, y si todo va bien el contenido.
 */
const EstadoCarga = ({ cargando, error, onReintentar, children }) => {
    if (cargando) {
        return (
            <div role="status" className="flex flex-col items-center justify-center gap-3 py-16 text-text-secondary">
                <LoaderCircle size={28} className="animate-spin text-sena" />
                <p className="text-sm">Cargando...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div role="alert" className="flex flex-col items-center justify-center gap-3 rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
                <AlertTriangle size={28} className="text-red-500" />
                <p className="text-sm font-medium text-text-primary">{error}</p>
                {onReintentar && <Boton variante="secundario" onClick={onReintentar}>Reintentar</Boton>}
            </div>
        )
    }

    return children
}

export default EstadoCarga
