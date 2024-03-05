<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <!-- Section 1 -->
      <section>
        <div class="flex flex-row justify-center gap-8 items-center">
          <div class="hidden lg:mt-0 lg:flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/914474333273989140/1211369005814644768/image.png?ex=65edf24d&is=65db7d4d&hm=3651b4838ac07e4dfd09efaca6075f045a5577e2ce6f86e2c2663052ddc26848&"
              class="w-3/4"
            />
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="mt-6 flex items-center justify-center">
        <div class="justify-center items-center p-4 bg-white w-2/4 shadow-lg rounded-lg">
          <h1 class="text-5xl font-bold text-black text-center pb-24">เพิ่มคอร์สเรียน</h1>

          <!-- Form Grid 1 -->
          <div class="sm:col-span-2 mb-4 flex flex-wrap justify-center gap-24">
            <div class="flex-col mb-6 flex item-center w-1/3 ">
              <label for="courseName" class="text-sm font-medium leading-6 text-gray-900"
                >ชื่อคอร์สเรียน:</label
              >
              <input
                type="text"
                id="courseName"
                name="courseName"
                class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400  py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>
            <div class="flex-col mb-6 flex">
              <label for="teacher" class="text-sm font-medium leading-6 text-gray-900"
                >ครูผู้สอน:</label
              >
              <input
                type="text"
                id="teacher"
                name="teacher"
                class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400  py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>
          </div>

          <!-- Form Grid 2 -->
          <div class="sm:col-span-2 mb-4 flex flex-wrap justify-center gap-24">
            <div class="flex-col mb-6 flex item-center w-1/3">
              <label for="Subject" class="text-sm font-medium leading-6 text-gray-900"
                >กลุ่มวิชา:</label
              >
              <input
                type="text"
                id="Subject"
                name="Subject"
                class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400  py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>
            <div class="flex-col mb-6 flex">
              <label for="price" class="text-sm font-medium leading-6 text-gray-900"
                >ราคา:</label
              >
              <input
                type="text"
                id="price"
                name="price"
                class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400  py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>
          </div>


          <!-- Form Grid 3 -->
        
          <div class="sm:col-span-2 mb-4 flex flex-wrap justify-center gap-24">
            <div class="flex-col mb-6 flex item-center w-2/3">
              <label for="Subject" class="text-sm font-medium leading-6 text-gray-900"
                >ชั่วโมงเรียน:</label
              >
              <input
                type="text"
                id="Subject"
                name="Subject"
                class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400  py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder=""
              />
            </div>
         
          </div>
          <div class="flex justify-center">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32">
          เพิ่ม
        </button>
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
};
</script>
