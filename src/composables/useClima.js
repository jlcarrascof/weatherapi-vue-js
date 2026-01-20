export default function useClima() {
    const obtenerClima = (busqueda) => {
        console.log('Consultando....', busqueda);
    }

    return {
        obtenerClima,
    }
}