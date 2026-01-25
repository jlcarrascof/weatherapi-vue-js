import axios from "axios";

export default function useClima() {
    const obtenerClima = async ({ ciudad, pais }) => {
        // Import API Key ....
        const key = import.meta.env.VITE_API_KEY;

        try {
            // Get Lat and Long
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},
                        ${pais}&limit=1&appid=${key}`;

            const { data } = await axios(url);
            const { lat, lon } = data[0];
            
            console.log(lat)
            console.log(lon)            
        } catch(error) {
            console.log(error)
        }


        // Get the weather


    }

    return {
        obtenerClima,
    }
}