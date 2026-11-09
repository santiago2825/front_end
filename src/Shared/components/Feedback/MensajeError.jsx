// Aviso rojo para errores de una acción (par de MensajeExito)
const MensajeError = ({ children }) => (
    <p role="alert" className="mb-5 rounded-[14px] bg-peligro-fondo px-4 py-3 text-sm font-medium text-peligro">
        {children}
    </p>
)

export default MensajeError
