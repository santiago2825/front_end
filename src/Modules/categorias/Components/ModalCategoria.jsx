import { useState } from 'react'
import { useForm } from 'react-hook-form'

import Modal from '../../../Shared/components/Modals/Modal'
import Campo, { claseInput } from '../../../Shared/components/Forms/Campo'
import Boton from '../../../Shared/components/UI/Boton'


/**
 * Crear o editar una categoría. Si recibe "categoria" es edición; si no, es una nueva.
 * La página usa key={categoria?.id ?? 'nueva'} para que el formulario arranque limpio cada vez.
 */
const ModalCategoria = ({ abierto, categoria, onCerrar, onGuardar }) => {
    const [errorServidor, setErrorServidor] = useState('')
    const valores = () => ({ nombre: categoria?.nombre ?? '', descripcion: categoria?.descripcion ?? '' })
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({ defaultValues: valores() })

    const cerrar = () => {
        reset(valores())
        setErrorServidor('')
        onCerrar()
    }

    const guardar = async (datos) => {
        setErrorServidor('')
        try {
            await onGuardar({ nombre: datos.nombre.trim(), descripcion: datos.descripcion.trim() })
            cerrar()
        } catch (error) {
            setErrorServidor(error.message || 'No se pudo guardar la categoría.')
        }
    }

    return (
        <Modal
            abierto={abierto}
            titulo={categoria ? 'Editar categoría' : 'Nueva categoría'}
            descripcion="Las categorías agrupan los elementos del inventario."
            onCerrar={cerrar}
            ancho="max-w-[480px]"
        >
            <form onSubmit={handleSubmit(guardar)} noValidate className="space-y-4">
                <Campo etiqueta="Nombre" htmlFor="nombre" error={errors.nombre?.message}>
                    <input
                        id="nombre"
                        maxLength={30}
                        placeholder="Ej: Tecnología"
                        className={claseInput}
                        {...register('nombre', { validate: (valor) => valor.trim().length >= 3 || 'El nombre debe tener al menos 3 caracteres' })}
                    />
                </Campo>
                <Campo etiqueta="Descripción (opcional)" htmlFor="descripcion" error={errors.descripcion?.message}>
                    <textarea
                        id="descripcion"
                        rows={3}
                        maxLength={200}
                        placeholder="¿Qué tipo de elementos incluye?"
                        className={claseInput}
                        {...register('descripcion')}
                    />
                </Campo>

                {errorServidor && <p role="alert" className="text-sm text-peligro">{errorServidor}</p>}

                <div className="flex justify-end gap-2 pt-2">
                    <Boton variante="texto" onClick={cerrar}>Cancelar</Boton>
                    <Boton type="submit" disabled={isSubmitting}>{categoria ? 'Guardar cambios' : 'Crear categoría'}</Boton>
                </div>
            </form>
        </Modal>
    )
}

export default ModalCategoria
