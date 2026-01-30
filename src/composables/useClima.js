import axios from "axios";
import { computed, ref } from 'vue';

export default function useClima() {

    const clima = ref({})
    const cargando = ref(false)
    const error = ref('')

    const obtenerClima = async ({ ciudad, pais }) => {
        // Import API Key ....
        const key = import.meta.env.VITE_API_KEY;
        cargando.value = true
        clima.value = {}

        try {
            // Get Lat and Long
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},
                        ${pais}&limit=1&appid=${key}`;

            const { data } = await axios(url);
            console.log(data);
            const { lat, lon } = data[0];

            // Get the weather
            const urlClimna = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
            const {data: resultado} = await axios(urlClimna);

            clima.value = resultado

        } catch {
            error.value = 'City not found'
        } finally {
            cargando.value = false
        }
    }

    const mostrarClima = computed(() => {
        return Object.values(clima.value).length > 0
    })

    const formatearTemperatura = temperatura => parseInt(temperatura - 273.15)

    return {
        obtenerClima,
        clima,
        mostrarClima,
        formatearTemperatura,
        cargando,
        error,
    }
}