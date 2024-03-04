<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <section class="mt-6 flex items-center justify-center">
        <div
          class="p-4 items-center justify-center text-center bg-white w-3/4 shadow-lg rounded-lg"
        >
          <div class="flex items-end justify-end">
            
              <router-link
                to="/editprofile"
                class="inline-flex items-center justify-center px-4 py-1 text-base font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-gray-200 bg-slate-100 outline outline-offset-2 outline-gray-200"
              >
                Edit
              </router-link>
            
          </div>
          <div class="flex justify-center items-center my-3">
            <div class="hidden lg:flex justify-center">
              <img
                src="https://cdn.discordapp.com/attachments/914474333273989140/1211369005814644768/image.png?ex=65edf24d&is=65db7d4d&hm=3651b4838ac07e4dfd09efaca6075f045a5577e2ce6f86e2c2663052ddc26848&"
                class="w-3/4"
              />
            </div>
          </div>
          <div class="flex justify-center items-center my-3">
            <div class="hidden lg:mt-0 lg:flex justify-center">
              <img
                src="https://i.pinimg.com/736x/b1/7e/c8/b17ec85df0ccceef39bb881a3613f0c2.jpg"
                class="w-40 h-40 rounded-full"
              />
            </div>
          </div>
          <h5 class="text-xl font-semibold my-3">Username</h5>
          <div class="flex items-center justify-center my-3">
            <div
              class="bg-gray-200 w-1/2 items-center justify-center rounded-lg shadow-lg p-3"
            >
                <h6 class="text-lg font-semibold mb-4">ชื่อ</h6>
                <h6 class="text-lg font-semibold mb-4">นามสกุล</h6>
              <h6 class="text-lg font-semibold mb-4">อีเมล</h6>
              <h6 class="text-lg font-semibold">รหัสผ่าน</h6>
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
};
</script>
