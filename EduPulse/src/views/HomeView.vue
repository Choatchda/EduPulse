<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import Navbar from '../components/Navbar.vue';
import CourseCard from '../components/ToCourseCard.vue';
</script>

<template>
  <div>
    <Navbar />
    <!-- <TheWelcome /> -->
    <div class="p-4">
      <CourseCard />
    </div>
  </div>
</template>
