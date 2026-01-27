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

            // Get the weather
            const urlClimna = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const dataClima = await axios(urlClimna);

            console.log(dataClima)
        } catch(error) {
            console.log(error)
        }


        // Get the weather


    }

    return {
        obtenerClima,
    }
}