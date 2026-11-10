import { SearchX } from 'lucide-react'

import Boton from '../../Shared/Components/UI/Boton'
import { RUTAS } from './rutas'

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-background px-5 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-white text-text-secondary shadow-sm">
                <SearchX size={28} />
            </div>
            <h1 className="text-2xl font-bold text-text-primary">Página no encontrada</h1>
            <p className="mt-2 max-w-95 text-sm text-text-secondary">
                La dirección que buscas no existe o fue movida.
            </p>
            <Boton to={RUTAS.inicio} className="mt-6">Volver al inicio</Boton>
        </main>
    )
}
