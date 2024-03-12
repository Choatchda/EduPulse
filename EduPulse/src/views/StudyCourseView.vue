<template>
  <div id="app">
    <Navbar />
    <div class="container mx-auto flex justify-center items-center h-screen">
      <div v-if="course" class="flex flex-col items-center">
        <h2 class="text-xl font-semibold">{{ course.name }}</h2>
        <video controls class="w-full max-w-lg">
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
        const response = await axios.get("/api/course"); // Adjust the API endpoint according to your backend setup
        this.course = response.data;
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    },
  },
};
</script>