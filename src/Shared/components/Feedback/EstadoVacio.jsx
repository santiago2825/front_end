import { SearchX } from 'lucide-react'

const EstadoVacio = ({ titulo, descripcion, icono: Icono = SearchX, children }) => (
    <div className="flex flex-col items-center rounded-[20px] border-2 border-dashed border-[#e2e8f0] bg-white px-6 py-14 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-panel text-texto-tenue">
            <Icono size={24} />
        </div>
        <h3 className="font-bold text-text-primary">{titulo}</h3>
        {descripcion && <p className="mt-1 max-w-95 text-sm text-texto-suave">{descripcion}</p>}
        {children && <div className="mt-5">{children}</div>}
    </div>
)

export default EstadoVacio
