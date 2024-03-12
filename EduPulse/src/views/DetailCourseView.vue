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
            <BuyCourseCard nameeachcourse="คอร์สภาษาไทย" priceeachcourse="1500" username="Choatchda"  @buy-success="handleBuySuccess" />
        </div>
      </div>
      <div class="bg-white rounded-lg shadow-lg w-1/2 p-4 m-4 grid gap-3">
        <h2 class="font-semibold text-xl">รายละเอียดคอร์ส</h2>
        <p class="text-base font-medium">คอร์ส : </p>
        <p class="text-base font-medium">กลุ่มวิชา : ม.ปลาย แข่งขัน</p>
        <p class="text-base font-medium">ครูผู้สอน : </p>
        <p class="text-base font-medium">คอร์สนี้เหมาะสำหรับ :  </p>
        <p class="text-base font-medium">จำนวนหนังสือเรียน : 1 เล่ม</p>
        <p class="text-base font-medium">วันที่เริ่มเรียน : 06/01/2024 เป็นต้นไป</p>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import BuyCourseCard from "../components/BuyCourseCard.vue";
export default {
  components: {
    Navbar: Navbar,
    BuyCourseCard: BuyCourseCard,
  },
};
</script>
