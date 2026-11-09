const formato = new Intl.DateTimeFormat('es-CO', { day: 'numeric', month: 'short', year: 'numeric' })

// "2026-09-24" -> "24 sept 2026"
export const formatearFecha = (fecha) => formato.format(new Date(`${fecha}T00:00:00`))

// Fecha de hoy en formato "2026-09-30" (para inputs type="date").
// Usa la fecha LOCAL: toISOString() da la fecha UTC y en Colombia, después de las 7 p. m., ya sería "mañana".
export const fechaHoy = () => {
    const ahora = new Date()
    const mes = String(ahora.getMonth() + 1).padStart(2, '0')
    const dia = String(ahora.getDate()).padStart(2, '0')
    return `${ahora.getFullYear()}-${mes}-${dia}`
}
