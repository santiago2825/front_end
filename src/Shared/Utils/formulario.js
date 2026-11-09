// Con react-hook-form, un grupo de checkboxes devuelve una lista; pero si solo hay uno
// devuelve texto o false. Esta función siempre entrega una lista.
export const comoLista = (valor) => (Array.isArray(valor) ? valor : valor ? [valor] : [])
