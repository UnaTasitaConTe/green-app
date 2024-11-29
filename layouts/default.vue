<template>
  <div class="bg-green-200 min-h-screen">
    <div class="drawer">
      <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col">
        <!-- Navbar -->
        <div class="navbar bg-green-300	 w-full">
          <div class="flex-none lg:hidden">
            <label for="my-drawer-3" aria-label="open sidebar" class="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                class="inline-block h-6 w-6 stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                </path>
              </svg>
            </label>
          </div>
          <NuxtLink class="mx-2 flex-1 px-2 " to="/"><button class="btn btn-ghost rounded-lg" >
            <img src="/logo-green.png" alt="logo del reciclaje" style="width: 30px;"> GREEN APP</button>
          </NuxtLink>
          <div class="hidden flex-none lg:block">
            <ul class="menu menu-horizontal">
              <!-- Navbar menu content here -->
              <li><a>No sabes donde reciclar??</a></li>
              <!-- <li><a>Navbar Item 2</a></li> -->
            </ul>
          </div>
        </div>
        <main class="">
          <slot />
        </main>

      </div>
      <div class="drawer-side">
        <label for="my-drawer-3" aria-label="close sidebar" class="drawer-overlay"></label>
        <ul class="menu bg-green-300 min-h-full w-80 p-4">
          <li><a>No sabes donde reciclar??</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>
<style>
  ::-webkit-scrollbar {
    width: 0; /* Oculta la barra por defecto */
  }
  html {
    scrollbar-width: thin; /* Solo visible al interactuar */
  }
</style>
