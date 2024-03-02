<template>
  <div id="app">
    <navbar />
    <section style="background: var(--bg--gradient)">
      <div
        class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12"
      >
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="max-w-2xl mb-4 text-6xl font-bold text-neutral-800">
            Start
            <span class="max-w-2xl mb-4 text-6xl font-bold text-white"
              >learning</span
            >
            <br />
            From your favorite teacher
          </h1>
          <p
            class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl"
          >
            Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today.
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
    <div class="m-10">
      <section class="flex flex-row items-center">
        <div
          class="hidden lg:mt-0 lg:col-span-5 lg:flex basis-1/2 justify-center"
        >
          <img
            src="https://cdn.discordapp.com/attachments/914474333273989140/1213539797008912475/juicy-lettering-online-education-with-a-guy-who-learns-at-the-computer.png?ex=65f5d802&is=65e36302&hm=7f4b2f02058ced8a37d0d7b9a9927b56908978183846d84f35cfffa70afe86f0&"
          />
        </div>
        <div class="basis-1/2justify-center">
          <div class="justify-center items-center">
            <h5 class="mb-8 text-4xl font-bold text-neutral-800">
              Benefit from our online learning
            </h5>
          </div>

          <div class="flex flex-row items-center mb-4">
            <font-awesome-icon icon="fa-solid fa-book" class="fa-xl" />
            <p class="max-w-2xl font-semibold text-xl ml-5">Short course</p>
          </div>
          <div class="flex flex-row items-center mb-4">
            <font-awesome-icon icon="fa-solid fa-user" class="fa-xl" />
            <p class="max-w-2xl font-semibold text-xl ml-5">
              Learn with expert
            </p>
          </div>
        </div>
      </section>
      <section class="justify-center items-center mt-10">
          <h5 class="text-4xl font-bold text-neutral-800  text-center">
            Our Explore Course
          </h5>
          <p class="font-light text-gray-700 m-4 md:text-base lg:text-lg  text-center">
            With these programs, you can build valuable skills, earn career credentials, and make progress toward a degree before you even enroll. 
          </p>
          <div class="flex flex-wrap justify-center items-center">
            <CourseCard 
              v-for="index in 3"
              :key="index"
            />
          </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import CourseCard from "../components/ToCourseCard.vue";

export default {
  components: {
    navbar: Navbar,
    CourseCard: CourseCard,
  },
};
</script>
