<template>
  <div id="app">
    <Navbar />
    <div class="m-10 flex flex-row">
      <div class="basis-3/12">
        <SearchBox />
      </div>
      <div class="basis-9/12">
        <div class="flex flex-wrap justify-center">
          <CourseCard
            v-for="(course, index) in courses"
            :key="index"
            :imagecourse="course.imageURL"
            :numbercourse="course.numbercourse"
            :namecourse="course.courseName"
            :pricecourse="course.price"
            :numberstudent="course.numberstudent"
            :courseId = "course.courseId"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import CourseCard from "../components/ToCourseCard.vue";
import SearchBox from "../components/SearchBox.vue";
import { ref, onMounted } from "vue";
import axios from "axios";
import  {backendUrl}  from '../port';
const courses = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get(`${backendUrl}/course`);
    console.log(response.data.data);
    courses.value = response.data.data // Replace with your actual backend endpoint
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
});
</script>
