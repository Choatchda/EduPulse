<template>
  <div id="app">
    <Navbar />
    <div class="w-full flex flex-col gap-5 px-3 md:px-16 lg:px-28 md:flex-row text-[#161931]">
      <aside class="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
        <!-- Sidebar content -->
      </aside>
      <main class="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div class="p-2 md:p-4">
          <div class="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
            <h2 class="pl-6 text-3xl font-bold sm:text-xl">Profile</h2>

            <div class="grid max-w-2xl mx-auto mt-8">
              <div class="flex flex-col items-center justify-center space-y-5 sm:flex-row sm:space-y-0">

                <!-- Profile picture -->
                <img class="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                  src="https://cdn.discordapp.com/attachments/1214039159514210355/1214178440593539113/a99ab961c8f8c7d29b5f7136e0b19ca4.png?ex=65f82aca&is=65e5b5ca&hm=46d5f7639090398193da0c86f1c1978dfdcecf29c72a160dd56823aacfe95088&"
                  alt="Bordered avatar">
              </div>

              <!-- Form for profile details -->
              <form @submit.prevent="submitProfileForm" class="mt-8 space-y-6">

                <!-- First name input -->
                <div class="flex flex-col items-center w-full mb-2 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                  <div class="w-full">
                    <label for="first_name"
                      class="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Your first
                      name</label>
                    <input type="text" id="first_name" v-model="formData.firstName"
                      class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Your first name" required>
                  </div>

                  <!-- Last name input -->
                  <div class="w-full">
                    <label for="last_name"
                      class="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Your last
                      name</label>
                    <input type="text" id="last_name" v-model="formData.lastName"
                      class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                      placeholder="Your last name" required>
                  </div>
                </div>

                <!-- Email input -->
                <div class="mb-2 sm:mb-6">
                  <label for="email"
                    class="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Your email</label>
                  <input type="email" id="email" v-model="formData.email"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    placeholder="Your email" required>
                </div>

                <!-- Password input (disabled) -->
                <div class="mb-2 sm:mb-6">
                  <label for="Password"
                    class="block mb-2 text-sm font-medium text-indigo-900 dark:text-black">Password</label>
                  <input type="text" id="Password"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                    value="xxxxxx" disabled>
                </div>

                <!-- Submit button -->
                <div class="flex justify-end">
                  <button type="submit"
                    class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: ''
      }
    };
  },
  methods: {
    async submitProfileForm() {
      try {
        // Send a POST request to your backend endpoint
        const response = await axios.post('YOUR_BACKEND_ENDPOINT_URL', this.formData);

        // Log the response from the backend
        console.log('Response from backend:', response.data);

        // Optionally, you can reset the form fields after successful submission
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  }
};
</script>