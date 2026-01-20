<script setup>
    import Formulario from './components/Formulario.vue';
    import useClima from './composables/useClima';

    const { obtenerClima } = useClima(); 
</script>

<template>
    <h1 class="titulo">Weather Explorer</h1>

    <div class="contenedor buscador-clima">
        <Formulario />
    </div>
</template>