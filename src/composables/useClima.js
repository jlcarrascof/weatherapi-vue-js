export default function useClima() {
    const obtenerClima = ({ ciudad, pais }) => {
        // Import API Key ....
        const key = import.meta.env.VITE_API_KEY;

        // Get Lat and Long
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},
                    ${pais}&limit=1&appid=${key}`;

        // Get the weather


    }

    return {
        obtenerClima,
    }
}