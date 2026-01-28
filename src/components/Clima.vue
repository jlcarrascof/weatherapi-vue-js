<script setup>
    import useClima from '../composables/useClima';

    const { formatearTemperatura } = useClima()

    defineProps({
        clima: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <div class="resultado">
        <h2>Weather in: {{ clima.name }}</h2>
        <p class="actual">{{ formatearTemperatura(clima.main.temp) }}&deg;C</p>
        <div class="temperaturas">
            <p>Min: <span>&deg;C</span></p>
            <p>Max: <span>&deg;C</span></p>
        </div>
    </div>
</template>
