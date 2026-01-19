<script setup>

    import { reactive, ref } from 'vue'
    import Alerta from './Alerta.vue'

    const busqueda = reactive({
        ciudad: '',
        pais: '',
    })

    const error = ref('')

    const paises = [
        { codigo: 'US', nombre: 'Estados Unidos' },
        { codigo: 'MX', nombre: 'México' },
        { codigo: 'AR', nombre: 'Argentina' },
        { codigo: 'CO', nombre: 'Colombia' },
        { codigo: 'CR', nombre: 'Costa Rica' },
        { codigo: 'ES', nombre: 'España' },
        { codigo: 'PE', nombre: 'Perú' }
    ]

    const consultarClima = () => {
        if (Object.values(busqueda).includes('')) {
            error.value = 'All the fields are mandatory'
            return
        }

        error.value = ''
    }

</script>

<template>
    <form
        class="formulario"
        @submit.prevent="consultarClima"
    >

        <Alerta v-if="error">{{ error }}</Alerta>

        <div class="campo">
            <label for="ciudad">City:</label>
            <input 
                type="text"
                id="ciudad"
                placeholder="City"
                v-model="busqueda.ciudad"
            >
        </div>

        <div class="campo">
            <label for="pais">Country:</label>
            <select
                id="pais"
                v-model="busqueda.pais"
            >
                <option value="">-- Select a country --</option>
                <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
            </select>
        </div>

        <input type="submit" value="Check Weather">

    </form>
</template>