<template>
  <div id="app">
    <Navbar />
    <div class="container mx-auto flex justify-center items-center h-screen">
      <div v-if="course" class="flex flex-col items-center">
        <h1 class="text-xl font-semibold">{{ course.courseName }}</h1>
        <video controls class="w-screen h-screen">
          <source :src="course.videoURL" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";
import  {backendUrl}  from '../port';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      course: null,
    };
  },
  mounted() {
    // Fetch data from the database using Axios
    this.fetchCourseData();
  },
  methods: {
    async fetchCourseData() {
      try {
        // Assuming courseId is a route parameter
        const courseId = this.$route.params.courseId;

        // Adjust the API endpoint and pass courseId as a parameter
        const response = await axios.get(`${backendUrl}/course/${courseId}`);
        
        this.course = response.data.course;
        console.log(this.course);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    },
  },
};
</script>
