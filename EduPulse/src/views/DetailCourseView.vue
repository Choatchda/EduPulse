<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <div class="flex flex-row justify-center items-center">
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex basis-1/2 justify-center">
          <img
            src="https://www.rmittraining.com/content/dam/rmit-training/blogs-and-news/establishing-study-habits.png"
            alt="mockup"
            class="h-64 w-3/4 rounded-xl shadow-lg"
          />
        </div>
        <div class="basis-1/2 justify-center flex">
          <BuyCourseCard
          :courseId="courseDetails.courseId"
          :houreachcourse="courseDetails.hour" 
            :nameeachcourse="courseDetails.courseName" 
            :priceeachcourse="courseDetails.price" 
            :username="courseDetails.teacherName" 
            @buy-success="handleBuySuccess"
          />
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg w-1/2 p-4 m-4 grid gap-3">
        <h2 class="font-semibold text-xl">รายละเอียดคอร์ส</h2>
        <p class="text-base font-medium">คอร์ส : {{ courseDetails.courseName }}</p>
        <p class="text-base font-medium">กลุ่มวิชา : {{ courseDetails.subject }}</p>
        <p class="text-base font-medium">ครูผู้สอน : {{ courseDetails.teacherName }}</p>
        <p class="text-base font-medium">คอร์สนี้เหมาะสำหรับ : นักเรียนทั่วไป </p>
        <p class="text-base font-medium">จำนวนหนังสือเรียน : 0 เล่ม</p>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "../components/Navbar.vue";
import BuyCourseCard from "../components/BuyCourseCard.vue";
import  {backendUrl}  from '../port';

export default {
  components: {
    Navbar: Navbar,
    BuyCourseCard: BuyCourseCard,
  },
  data() {
    return {
      courseDetails: {},
    };
  },
  mounted() {
    this.fetchCourseDetails();
  },
  methods: {
    async fetchCourseDetails() {
      const { courseId } = this.$route.params;

      try {
        const response = await axios.get(`${backendUrl}/course/${courseId}`);
        this.courseDetails = response.data.course;
        console.log(this.courseDetails.courseId);
      } catch (error) {
        console.error('Error fetching course details:', error);
      }
    },
    handleBuySuccess() {
      // Handle buy success event if needed
    },
  },
};
</script>
