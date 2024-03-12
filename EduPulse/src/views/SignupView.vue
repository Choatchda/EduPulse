<template>
  <div
    id="signup"
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="text-6xl font-bold font-orbitron text-black mb-4 custom-font">
      Edupulse
    </h1>

    <!-- Sign-up box -->
    <div class="w-1/2 bg-gray-300 bg-opacity-20 p-4 rounded-lg">
      <h1 class="text-4xl font-bold font-orbitron text-black mb-4 custom-font">
        Signup
      </h1>
      <form @submit.prevent="submitForm">
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- First Name -->
          <div class="sm:col-span-3">
            <label
              for="first_name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                type="text"
                id="first_name"
                v-model="formData.first_name"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                required
              />
            </div>
          </div>

          <!-- Last Name -->
          <div class="sm:col-span-3">
            <label
              for="last_name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
              <input
                type="text"
                id="last_name"
                v-model="formData.last_name"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                required
              />
            </div>
          </div>
        </div>

        <!-- Age and Gender -->
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- Age -->
          <div class="sm:col-span-3">
            <label
              for="age"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Age</label
            >
            <div class="mt-2">
              <input
                type="number"
                id="age"
                v-model="formData.age"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                required
              />
            </div>
          </div>

          <!-- Gender -->
          <div class="sm:col-span-3">
            <label
              for="selectedGender"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Gender</label
            >
            <div class="mt-2">
              <div class="relative">
                <select
                  v-model="formData.selectedGender"
                  class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option disabled value="">เลือกเพศของคณ</option>
                  <option  value="เพศชาย">เพศชาย</option>
                  <option value="เพศหญิง">เพศหญิง</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <!-- Triangle icon indicating select is clickable -->
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M10 12.586l-4.293-4.293a1 1 0 0 1 1.414-1.414L10 10.758l3.879-3.879a1 1 0 0 1 1.414 1.414l-4.586 4.586a1 1 0 0 1-1.414 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Username -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
            <input
              type="text"
              id="username"
              v-model="formData.username"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <!-- Email -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Email</label
          >
          <div class="mt-2">
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <!-- Password -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="mt-2">
            <input
              type="password"
              id="password"
              v-model="formData.password"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="confirm_password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Confirm Password</label
          >
          <div class="mt-2">
            <input
              type="password"
              id="confirm_password"
              v-model="formData.confirm_password"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              required
            />
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-center items-center">
          <button
            type="submit"
            class="flex w-1/2 mt-6 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
          </button>
        </div>
      </form>

      <!-- Sign in Link -->
      <div class="text-gray-600 text-center">
        <p>
          Already have an account?
          <router-link to="/signin" class="text-blue-500">Sign in</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import  {backendUrl}  from '../port';
export default {
  data() {
    return {
      formData: {
        first_name: "",
        last_name: "",
        age: null,
        selectedGender: null,
        username: "",
        email: "",
        password: "",
        confirm_password: "",
      },
    };
  },
  methods: {
    async submitForm() {
      console.log('REGISTER')
      try {
        // Send form data to backend
        const response = await axios.post(
          `${backendUrl}/register`,
          this.formData
        );

        // Optionally handle success response here
        console.log(response.data);

        // Clear form after successful submission
        this.formData = {
          first_name: "",
          last_name: "",
          age: null,
          selectedGender: null,
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        };
        Swal.fire({
  title: "Register successful",
  text: "",
  icon: "success"
}).then(() => {
  window.location.href = "/signin"; // Replace "/" with the desired URL
});
      } catch (error) {
        // Handle error
        console.error("Error submitting form:", error);
      }
    },
  },
};
</script>
