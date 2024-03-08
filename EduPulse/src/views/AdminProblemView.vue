<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <!-- Section 1 -->
      <section>
        <div class="flex flex-row justify-center gap-8 items-center">
          <div class="hidden lg:mt-0 lg:flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/914474333273989140/1211369005814644768/image.png?ex=65edf24d&is=65db7d4d&hm=3651b4838ac07e4dfd09efaca6075f045a5577e2ce6f86e2c2663052ddc26848"
              class="w-3/4"
            />
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="mt-6 flex items-center justify-center">
        <!-- First div with Tailwind CSS classes -->

        <div class="justify-center items-center p-4 bg-white w-3/4 shadow-lg rounded-lg  ">
  <h1 class="text-5xl font-bold text-red-400 text-center mb-8">ปัญหา</h1>
  <div v-for="(item, index) in mockupData" :key="index" class="justify-center items-center p-4 bg-[#F5F7F9] h-60 w-2/3 shadow-lg rounded-lg mx-auto flex-col justify-center pt-12  border-gray-500 mb-8">
    <div class="flex items-center text-bold">
      <img
        class="h-12 w-12 rounded-full"
        :src="item.image"
        alt=""
      />
      <label for="courseName" class="text-base	 font-bold leading-6 text-gray-900 pl-5">{{ item.name }}</label>
    </div>
    <div class="pt-6">
      <label for="courseName" class="text-base	  font- font-medium leading-6 text-gray-900 pl-5">ปัญหา: {{ item.problem }}</label>
    </div>
    <div class="pt-6">
      <label for="courseName" class="text-base	   font-medium leading-6 text-gray-900 pl-5">คำอธิบายเพิ่มเติม: {{ item.additionalDescription }}</label>
    </div>
  </div>
</div>

      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      mockupData: [
        {
          name: "bosseiei",
          problem: "First mockup problem",
          additionalDescription: "First mockup additional description First mockup additional description",
          image: "https://placekitten.com/256/256",
        },
        {
          name: "anotherUser",
          problem: "Second mockup problem",
          additionalDescription: "Second mockup additional description",
          image: "https://placekitten.com/256/256", // Placeholder image for variety
        },
        {
          name: "testUser",
          problem: "Third mockup problem",
          additionalDescription: "Third mockup additional description",
          image: "https://placekitten.com/256/256", // Placeholder image for variety
        },
      ],
    };
  },
};
</script>
