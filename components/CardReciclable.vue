<template>
  <div class="card image-full shadow-xl transition-transform duration-300 hover:scale-105 select-none "
    style="height: 350px;">
    <figure>
      <img :src="image" :alt="type" class="opacity-75" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{{ title }}
      </h2>
      <p>{{ description }}</p>
      <div class="text-center py-6 cursor-pointer hover:text-green-300" @click="clickInCard(title)">
        <p class="font-medium text-lg ">¿No sabes que puedes reciclar?</p>
        <div class="mt-2">
          <svg class="w-6 h-6 mx-auto animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps<{
  title: string,
  description: string,
  image: string,
  type: string
}>();

const emits = defineEmits<{
  (event: "callback", payload: string): void
}>();

function clickInCard(title: string) {
  return emits("callback", title)
}

</script>

<style></style>