<template>
  <div id="app">
    <navbar />
    <section style="background: var(--bg--gradient);">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1
            class="max-w-2xl mb-4 text-6xl font-bold tracking-tight leading-none text-neutral-800"
          >
            Start <span class="max-w-2xl mb-4 text-6xl font-bold tracking-tight leading-none text-white">learning</span> <br> From your favorite teacher
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl "
          >
          Education is the passport to the future, for tomorrow belongs to those who prepare for it today.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-gray-100 bg-black"
          >
            Explore Course
          </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="https://cdn.discordapp.com/attachments/914474333273989140/1213178857675563028/juicy-girl-working-at-home.gif?ex=65f487db&is=65e212db&hm=7e966321a5d2c8b4a9bf1805f66e5a0537ffe8824339a95a89203660f8447005&"
            alt="mockup"
          />
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    navbar: Navbar,
  },
};
</script>
