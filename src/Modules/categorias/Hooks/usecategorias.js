import { useCallback, useEffect, useState } from "react";
import {
    ActualizarCategoria,
    CrearCategoria,
    EliminarCategoria,
    ObterCategorias,
} from "../Services/apicategorias.js";

export const useCategorias = () => {
    const [categorias, setCategorias] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const recargarCategorias = useCallback(async () => {
        setLoading(true);
        try {
            const data = await ObterCategorias();
            setCategorias(data);
            setError(null);
        } catch (err) {
            setError(err.message || "No se pudieron cargar las categorías.");
        } finally {
            setLoading(false);
        }
    }, []);

    const crearCategoria = (categoria) => CrearCategoria(categoria);
    const actualizarCategoria = (id, categoria) => ActualizarCategoria(id, categoria);
    const eliminarCategoria = (id) => EliminarCategoria(id);

    useEffect(() => {
        const fetchCategorias = async () => {
            try {
                const data = await ObterCategorias();
                setCategorias(data);
                setError(null);
            } catch (err) {
                setError(err.message || "No se pudieron cargar las categorías.");
            } finally {
                setLoading(false);
            }
        };

        fetchCategorias();
    }, []);

    return {
        categorias,
        loading,
        error,
        recargarCategorias,
        crearCategoria,
        actualizarCategoria,
        eliminarCategoria,
    };
};
