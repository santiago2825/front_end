import { useState } from 'react'
import { Boxes, Pencil, Plus, Search } from 'lucide-react'

import StatCard from '../../../Shared/components/Cards/StatCard'
import Tabla from '../../../Shared/components/Tables/Tabla'
import Boton from '../../../Shared/components/UI/Boton'
import EstadoVacio from '../../../Shared/components/Feedback/EstadoVacio'
import EstadoCarga from '../../../Shared/components/Feedback/EstadoCarga'
import MensajeExito from '../../../Shared/components/Feedback/MensajeExito'
import MensajeError from '../../../Shared/components/Feedback/MensajeError'
import ModalConfirmar from '../../../Shared/components/Modals/ModalConfirmar'
import { incluyeTexto } from '../../../Shared/Utils/texto'

import ModalCategoria from '../Components/ModalCategoria'
import { useCategorias } from '../Hooks/usecategorias'
import { claseInput } from '../../../Shared/components/Forms/Campo'

// Categorías (Administrador): crear, editar y eliminar
const Categorias = () => {
    const {
        categorias,
        loading: cargando,
        error,
        recargarCategorias: recargar,
        crearCategoria: crear,
        actualizarCategoria: actualizar,
        eliminarCategoria: eliminar,
    } = useCategorias()
    const [busqueda, setBusqueda] = useState('')
    // undefined = modal cerrado, null = categoría nueva, objeto = editando esa categoría
    const [enEdicion, setEnEdicion] = useState(undefined)
    const [porEliminar, setPorEliminar] = useState(null)
    const [mensaje, setMensaje] = useState('')
    const [errorAccion, setErrorAccion] = useState('')

    const filtradas = categorias.filter((c) => incluyeTexto(c.nombre + c.descripcion, busqueda))

    const guardar = async (datos) => {
        setErrorAccion('')
        try {
            if (enEdicion) {
                await actualizar(enEdicion.id, datos)
                setMensaje(`Se actualizó la categoría ${datos.nombre}`)
            } else {
                await crear(datos)
                setMensaje(`Se creó la categoría ${datos.nombre}`)
            }
            await recargar()
        } catch (fallo) {
            setErrorAccion(fallo.message || 'No se pudo guardar la categoría.')
            throw fallo
        }
    }

    const confirmarEliminar = async () => {
        const categoria = porEliminar
        setPorEliminar(null)
        setMensaje('')
        setErrorAccion('')
        try {
            await eliminar(categoria.id)
            setMensaje(`Se eliminó la categoría ${categoria.nombre}`)
            await recargar()
        } catch (fallo) {
            setErrorAccion(fallo.message || 'No se pudo eliminar la categoría.')
        }
    }

    return (
        <section>
            {mensaje && <MensajeExito>{mensaje}</MensajeExito>}
            {errorAccion && <MensajeError>{errorAccion}</MensajeError>}

            <div className="mb-8 w-full max-w-xs">
                <StatCard etiqueta="Total de categorías" valor={categorias.length} icono={Boxes} />
            </div>

            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-lg font-bold text-text-primary">Categorías</h2>
                    <p className="text-sm text-texto-suave">Gestiona las categorías disponibles en el sistema.</p>
                </div>
                <Boton icono={Plus} onClick={() => setEnEdicion(null)}>Nueva categoría</Boton>
            </div>

            <div className="relative mb-5">
                <Search size={18} aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-texto-tenue" />
                <label htmlFor="buscar-categoria" className="sr-only">Buscar categoría</label>
                <input
                    id="buscar-categoria"
                    type="search"
                    placeholder="Buscar categoría..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className={`${claseInput} pl-11`}
                />
            </div>

            <EstadoCarga cargando={cargando} error={error} onReintentar={recargar}>
                {filtradas.length > 0 ? (
                    <Tabla columnas={['Categoría', 'Descripción', '']} descripcion="Lista de categorías">
                        {filtradas.map((categoria) => (
                            <tr key={categoria.id}>
                                <td className="font-semibold text-text-primary">{categoria.nombre}</td>
                                <td className="max-w-[450px]">{categoria.descripcion || '—'}</td>
                                <td>
                                    <div className="flex justify-end gap-2">
                                        <Boton
                                            variante="secundario"
                                            icono={Pencil}
                                            className="px-3 py-1.5"
                                            aria-label={`Editar ${categoria.nombre}`}
                                            onClick={() => setEnEdicion(categoria)}
                                        >
                                            Editar
                                        </Boton>
                                        <Boton
                                            variante="peligro"
                                            className="px-3 py-1.5"
                                            aria-label={`Eliminar ${categoria.nombre}`}
                                            onClick={() => setPorEliminar(categoria)}
                                        >
                                            Eliminar
                                        </Boton>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </Tabla>
                ) : (
                    <EstadoVacio
                        icono={Boxes}
                        titulo={busqueda ? 'No hay categorías con esa búsqueda' : 'Todavía no hay categorías'}
                        descripcion={busqueda ? 'Prueba con otro nombre.' : 'Crea la primera categoría.'}
                    />
                )}
            </EstadoCarga>

            <ModalCategoria
                key={enEdicion?.id ?? 'nueva'}
                abierto={enEdicion !== undefined}
                categoria={enEdicion}
                onCerrar={() => setEnEdicion(undefined)}
                onGuardar={guardar}
            />

            <ModalConfirmar
                abierto={Boolean(porEliminar)}
                titulo="Eliminar categoría"
                descripcion={porEliminar ? `¿Eliminar la categoría "${porEliminar.nombre}"? Esta acción no se puede deshacer.` : ''}
                onConfirmar={confirmarEliminar}
                onCerrar={() => setPorEliminar(null)}
            />
        </section>
    )
}

export default Categorias