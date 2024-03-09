<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <section>
        <div class="flex flex-row justify-center gap-8 items-center">
          <div class="hidden lg:mt-0 lg:flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/914474333273989140/1211369005814644768/image.png?ex=65edf24d&is=65db7d4d&hm=3651b4838ac07e4dfd09efaca6075f045a5577e2ce6f86e2c2663052ddc26848&"
              class="w-3/4"
            />
          </div>
          <h1 class="max-w-2xl text-5xl font-bold text-red-400">แจ้งปัญหา</h1>
        </div>
      </section>
      <section class="mt-6 flex items-center justify-center">
        <div
          class="text-center justify-center items-center p-4 bg-white w-3/4 shadow-lg rounded-lg"
        >
          <form @submit.prevent="submitForm">
            <div class="sm:col-span-4 mb-4">
              <label
                for="problem"
                class="text-sm font-medium leading-6 text-gray-900"
                >ปัญหาที่พบ :</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  v-model="formData.problem"
                  id="problem"
                  name="problem"
                  class="w-1/4 bg-white border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-400 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  placeholder="ปัญหาที่พบ"
                />
              </div>
            </div>
            <div class="col-span-full mb-4">
              <label
                for="about"
                class="block text-sm font-medium leading-6 text-gray-900"
                >คำอธิบายเพิ่มเติม :</label
              >
              <div class="mt-2">
                <textarea
                  id="about"
                  v-model="formData.description"
                  name="description"
                  rows="3"
                  class="w-1/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg focus:ring-4 focus:ring-gray-100 bg-black"
            >
              ยืนยัน
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios"; // Import Axios for making HTTP requests

export default {
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      formData: {
        problem: '',
        description: ''
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        // Make an HTTP POST request to your backend endpoint
        const response = await axios.post('', this.formData);

        // Handle success response
        console.log(response.data); // Log the response data
      } catch (error) {
        // Handle error
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>