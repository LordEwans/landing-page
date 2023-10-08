<template>
  <header class="grid grid-cols-3 py-[.2em] w-full z-30 will-change-transform">
    <div class="mx-[1.5em] my-[1em] block text-base">
      <nuxt-link to="/" class="uppercase font-black text-white"
        >BottleHub DAO</nuxt-link
      >
    </div>
    <nav class="flex justify-self-center">
      <ul class="flex">
        <li class="partials">
          <nuxt-link to="#features" class="partials">Features</nuxt-link>
        </li>
        <li class="partials">
          <nuxt-link to="#trading" class="partials">Ecosystem</nuxt-link>
        </li>
        <li class="partials">
          <nuxt-link to="#resources" class="partials">Resources</nuxt-link>
        </li>
        <li class="partials">
          <nuxt-link to="#faq" class="partials">FAQ</nuxt-link>
        </li>
      </ul>
      <!-- <button>
        <img src="assets/img/animated/day.svg" alt="Default" />
      </button> -->
    </nav>
    <div class="justify-self-end">
      <nuxt-link to="#start" class="btn btn-md text-xs mx-6 my-1 btn-accent">Create Wallet</nuxt-link>
    </div>
  </header>
</template>

<style>
li.partials {
  @apply inline mx-5 my-5 font-semibold
}
.partials {
  @apply inline-block uppercase font-bold text-white text-xs;
}
</style>
