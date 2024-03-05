<template>
    <div id="app" >
      <Navbar />
      <div class="m-10 flex flex-row">
        <div class="basis-3/12">
          <SearchBox />
        </div>
        <div class="basis-9/12">
          <div class="flex flex-wrap justify-center">
            <CourseCard 
              v-for="index in 6"
              :key="index"
            />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import TheWelcome from "../components/TheWelcome.vue";
  import Navbar from "../components/Navbar.vue";
  import CourseCard from "../components/ToCourseCard.vue";
  import SearchBox from "../components/SearchBox.vue";
  </script>
  