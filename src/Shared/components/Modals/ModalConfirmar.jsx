import Modal from './Modal'
import Boton from '../UI/Boton'

/**
 * Pide confirmación antes de una acción que no se puede deshacer.
 * <ModalConfirmar abierto={Boolean(aBorrar)} titulo="Eliminar categoría" descripcion="..." onConfirmar={borrar} onCerrar={cancelar} />
 */
const ModalConfirmar = ({ abierto, titulo, descripcion, textoConfirmar = 'Eliminar', onConfirmar, onCerrar }) => (
    <Modal abierto={abierto} titulo={titulo} onCerrar={onCerrar} ancho="max-w-[440px]">
        <p className="text-sm leading-relaxed text-texto-medio">{descripcion}</p>
        <div className="mt-6 flex justify-end gap-2">
            <Boton variante="texto" onClick={onCerrar}>Cancelar</Boton>
            <Boton variante="peligro" onClick={onConfirmar}>{textoConfirmar}</Boton>
        </div>
    </Modal>
)

export default ModalConfirmar
