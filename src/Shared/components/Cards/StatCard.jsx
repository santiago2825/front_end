const estilos = {
    verde: 'bg-exito-fondo text-sena',
    ambar: 'bg-[#fffbeb] text-[#d97706]',
    azul: 'bg-[#eff6ff] text-[#2563eb]',
    rojo: 'bg-peligro-fondo text-peligro',
}

const StatCard = ({ etiqueta, valor, icono: Icono, color = 'verde', detalle }) => {
    return (
        <article className="flex items-center gap-3.75 rounded-[20px] border border-superficie bg-white p-5 shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
            <div className={`flex h-11.25 w-11.25 shrink-0 items-center justify-center rounded-xl ${estilos[color]}`}>
                <Icono size={19} strokeWidth={2} />
            </div>
            <div>
                <span className="block text-[0.85rem] text-texto-suave">{etiqueta}</span>
                <span className="text-[1.4rem] font-bold text-[#1e293b]">{valor}</span>
                {detalle && <span className="block text-xs text-texto-tenue">{detalle}</span>}
            </div>
        </article>
    )
}

export default StatCard
