<template>
  <div class="bg-green-50 py-10 cursor-default select-none	">
    <div class="container mx-auto text-center px-6">
      <h1 class="text-3xl md:text-5xl font-bold text-green-900">
        ¡Bienvenidos a Green App!
      </h1>
      <p class="mt-6 text-lg md:text-xl text-green-700 leading-relaxed">
        Green App es tu aliado para construir un mundo más limpio y sostenible. Nuestra plataforma te ayuda a aprender,
        organizar
        y practicar el reciclaje de manera eficiente, promoviendo la preservación de los recursos naturales y el cuidado
        del medio
        ambiente. A través de esta app, descubrirás qué materiales puedes reciclar, dónde llevarlos y cómo hacer que tus
        acciones
        diarias contribuyan al bienestar del planeta.
      </p>
      <p class="mt-4 text-lg font-semibold text-green-800">
        ¡Únete al cambio, comienza hoy con Green App!
      </p>
    </div>
  </div>

  <div class="bg-green-100 py-6 cursor-default	select-none	">
    <div class="container mx-auto text-center px-4">
      <h1 class="text-2xl md:text-4xl font-bold ">
        ¡Reciclar importa!
      </h1>
      <p class="mt-4 md:text-lg">
        Reciclar es esencial para cuidar nuestro planeta. Nos permite reducir la cantidad de desechos que generamos,
        ahorrar recursos naturales y disminuir la contaminación ambiental. Al separar correctamente nuestros residuos,
        contribuimos a la construcción de un futuro más sostenible para las próximas generaciones.
        <span class="font-semibold">¡Pequeñas acciones pueden tener un gran impacto!</span>
      </p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-5 mb-5">
    <CardReciclable v-for="papelera in reciclable" 
    @callback="push"
    :title="papelera.title" :type="papelera.type" :description="papelera.description" :image="papelera.path"></CardReciclable>
  </div>
</template>

<script lang="ts" setup>
import reciclable from '~/domain/client/data/reciclable';

function push(title: string) {
  const router = useRouter();
  router.push(title);
}

</script>

<style></style>