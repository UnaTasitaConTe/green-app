<template>
  <div class="bg-green-50 py-10 cursor-default	select-none">
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

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 bg-green-100 rounded-lg">
    <!-- Imagen de la papelera -->
    <div class="row-span-5 flex flex-col items-center justify-center text-center rounded-lg p-4">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">{{ datos?.title }}</h2>
      <img :src="datos?.path" :alt="datos?.title" class="object-cover" />
    </div>

    <!-- Detalles y ejemplos -->
    <div class="col-span-2 row-span-5 flex flex-col justify-start rounded-lg p-6">
      <p class="text-lg text-gray-600 mb-4">{{ datos?.description }}</p>
      <h3 class="text-lg font-semibold text-gray-800 mb-2">¿Qué puedes reciclar aquí?</h3>
      <ul class="list-disc list-inside space-y-2">
        <li v-for="example in datos?.examples" :key="example" class="text-gray-600">
          {{ example }}
        </li>
      </ul>
    </div>
  </div>

  <div class="p-6 ">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">¿Tienes dudas sobre el reciclaje?</h2>
    <p class="text-gray-600 mb-4">Escribe tu pregunta y te ayudaremos a resolverla.</p>
    <div class="flex items-center space-x-4">
      <input v-model="query" type="text" placeholder="¿Qué puedo reciclar aquí?"
        class="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
      <button @click="askChatGPT"
        class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-400 disabled:bg-gray-300"
        :disabled="loading">
        {{ loading ? "Consultando..." : "Preguntar" }}
      </button>
    </div>
    <div v-if="response" class="mt-6">
      <h3 class="text-lg font-semibold text-gray-800">Respuesta:</h3>
      <p class="text-gray-600 mt-2">{{ response }}</p>
    </div>
    <div v-if="error" class="mt-6 text-red-500">
      {{ error }}
    </div>
  </div>

</template>

<script lang="ts" setup>
import reciclable from '~/domain/client/data/reciclable';
const route = useRoute();
const datos = reciclable.find(e => e.title === route.params.id);

import { ref } from "vue";

const query = ref("");
const response = ref(null);
const error: Ref<null | string> = ref(null);
const loading = ref(false);

const askChatGPT = async () => {
  if (!query.value.trim()) return;
  loading.value = true;
  response.value = null;
  error.value = null;

  try {
    const res = await fetch("/api/chatgpt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: query.value }),
    });

    const data = await res.json();

    if (data.message) {
      throw new Error(data.message);
    }

    response.value = data.response;
  } catch (err) {
    error.value = "Hubo un problema al conectar con el servicio. Inténtalo de nuevo.";
  } finally {
    loading.value = false;
  }
};


</script>

<style></style>