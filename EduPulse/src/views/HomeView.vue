<script setup>
import TheWelcome from "../components/TheWelcome.vue";
import Navbar from "../components/Navbar.vue";
import CourseCard from "../components/ToCourseCard.vue";
import SearchBox from "@/components/SearchBox.vue";
</script>

<template>
  <div>
    <Navbar />
    <!-- <TheWelcome /> -->
    <div class="m-10 flex flex-row">
      <div class="basis-3/12">
        <SearchBox />
      </div>
      <div class="basis-9/12">
        <div class="flex flex-wrap justify-center">
          <CourseCard 
            v-for="index in 5"
            :key="index"
          />
        </div>
      </div>
      <!-- <CourseCard /> -->
    </div>
  </div>
</template>
