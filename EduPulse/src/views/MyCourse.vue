<template>
  <div id="app">
    <Navbar />
    <div class="m-10 flex flex-row">
      <div class="basis-3/12">
        <SearchBox />
      </div>
      <div class="basis-9/12">
        <div class="flex flex-wrap justify-center">
          <StudyCourseCard
            v-for="course in Object.values(courseDetails)"
            :key="course.id"
            :courseId = "course.course.courseId"
            :imageURL = "course.course.imageURL"
            :namecourse="course.course.courseName"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import StudyCourseCard from "../components/StudyCourseCard.vue";
import SearchBox from "../components/SearchBox.vue";
import axios from "axios";

export default {
  components: {
    Navbar: Navbar,
    StudyCourseCard: StudyCourseCard,
    SearchBox: SearchBox,
  },
  data() {
    return {
      studyCourses: [],
      courseDetails: {}, // Object to store course details
    };
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      this.fetchUserData(userId);
    }
  },
  methods: {
    async fetchUserData(userId) {
      try {
        // Assuming your backend endpoint for fetching user data is '/user/:userId'
        const response = await axios.get(`http://localhost:3000/user/${userId}`);
        this.studyCourses = response.data.user.courseIds;
        console.log(this.studyCourses);
        this.fetchCourseDetails(); // Call the method to fetch course details
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
    async fetchCourseDetails() {
      try {
        // Assuming your backend endpoint for fetching course details is '/course/:courseId'
        for (const courseId of this.studyCourses) {
          const response = await axios.get(`http://localhost:3000/course/${courseId}`);
          this.courseDetails[courseId] = response.data;
          console.log(this.courseDetails); // Update the courseDetails object
        }
      } catch (error) {
        console.error("Error fetching course details:", error);
      }
    },
  },
};
</script>
