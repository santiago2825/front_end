/**
 * Tabla con el estilo de la app.
 * columnas: títulos de las columnas (un texto vacío '' es la columna de acciones).
 * children: las filas (<tr>...</tr>). Las celdas <td> toman el estilo automáticamente.
 * descripcion: texto opcional para lectores de pantalla.
 */
const Tabla = ({ columnas = [], children, descripcion }) => (
    <div className="overflow-x-auto rounded-[20px] border border-superficie bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
        <table className="w-full min-w-160 text-left text-sm [&_td]:px-5 [&_td]:py-3.5 [&_td]:align-middle [&_td]:text-texto-medio [&_tbody_tr]:border-t [&_tbody_tr]:border-superficie [&_tbody_tr:hover]:bg-[#fafbfc]">
            {descripcion && <caption className="sr-only">{descripcion}</caption>}
            <thead className="bg-background">
                <tr>
                    {columnas.map((columna, indice) => (
                        <th key={columna || `columna-${indice}`} scope="col" className="px-5 py-3 text-xs font-semibold text-texto-suave">
                            {columna || <span className="sr-only">Acciones</span>}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    </div>
)

export default Tabla
