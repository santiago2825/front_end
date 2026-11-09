import { Link } from 'react-router-dom'

const variantes = {
    primario: 'bg-sena text-white shadow-[0_6px_18px_rgba(57,169,0,0.20)] hover:bg-sena-dark',
    secundario: 'border-2 border-borde bg-white text-text-primary hover:border-[#cbd5e1]',
    peligro: 'border-2 border-[#fecaca] bg-white text-peligro hover:bg-peligro-fondo',
    texto: 'text-texto-suave hover:text-text-primary',
}

/**
 * Botón de la app. Si recibe "to" se comporta como enlace (Link).
 * Ejemplos:
 *   <Boton onClick={guardar}>Guardar</Boton>
 *   <Boton to="/aprendiz/reportes" variante="secundario">Volver</Boton>
 */
const Boton = ({ to, variante = 'primario', icono: Icono, children, className = '', type = 'button', ...props }) => {
    const clases = `inline-flex items-center justify-center gap-2 rounded-[30px] px-5 py-2.5 text-sm font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-60 ${variantes[variante]} ${className}`

    const contenido = (
        <>
            {Icono && <Icono size={16} />}
            {children}
        </>
    )

    if (to) {
        return <Link to={to} className={clases} {...props}>{contenido}</Link>
    }
    return <button type={type} className={clases} {...props}>{contenido}</button>
}

export default Boton
