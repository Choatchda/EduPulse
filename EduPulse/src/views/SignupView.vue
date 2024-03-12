<template>
  <div
    id="signup"
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <!-- Header -->
    <h1 class="text-6xl font-bold font-orbitron text-black mb-4 custom-font">
      Edupulse
    </h1>

    <!-- Sign-up box -->
    <div class="w-1/2 bg-gray-300 bg-opacity-20 p-4 rounded-lg">
      <h1 class="text-4xl font-bold font-orbitron text-black mb-4 custom-font">
        Signup
      </h1>
      <form @submit.prevent="submitForm">
        <!-- First Name -->
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first_name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >ชื่อจริง</label
            >
            <div class="mt-2 relative">
              <input
                type="text"
                id="first_name"
                v-model="formData.first_name"
                :class="{
                  'border-gray-400': isFirstNameValid,
                  'border-red-500':
                    !isFirstNameValid && formData.first_name.length > 0,
                  'border-indigo-300': formData.first_name.length === 0,
                }"
                class="bg-indigo-50 border text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="โปรดกรอกชื่อจริง"
                required
              />
            </div>
            <!-- Validation message -->
            <span
              :class="{
                'text-green-500': isFirstNameValid,
                'text-red-500': !isFirstNameValid,
              }"
              class="block mt-1 text-sm"
              aria-hidden="true"
              >{{ firstNameValidationMessage }}</span
            >
          </div>
          <!-- Last Name -->
          <div class="sm:col-span-3">
            <label
              for="last_name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >นามสกุล</label
            >
            <div class="mt-2">
              <input
                type="text"
                id="last_name"
                v-model="formData.last_name"
                :class="{
                  'border-gray-400': isLastNameValid,
                  'border-red-500':
                    !isLastNameValid && formData.last_name.length > 0,
                  'border-indigo-300': formData.last_name.length === 0,
                }"
                class="bg-indigo-50 border text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="โปรดกรอกนามสกุล"
                required
              />
            </div>
            <!-- Validation message -->
            <span
              :class="{
                'text-green-500': isLastNameValid,
                'text-red-500': !isLastNameValid,
              }"
              class="block mt-1 text-sm"
              aria-hidden="true"
              >{{ lastNameValidationMessage }}</span
            >
          </div>
        </div>

        <!-- Age and Gender -->
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <!-- Age -->
          <div class="sm:col-span-3">
            <label
              for="age"
              class="block text-sm font-medium leading-6 text-gray-900"
              >อายุ</label
            >
            <div class="mt-2 relative">
              <input
                type="number"
                id="age"
                v-model="formData.age"
                :class="{
                  'border-gray-400': isAgeValid,
                  'border-red-500': !isAgeValid && formData.age,
                  'border-indigo-300': !formData.age,
                }"
                class="bg-indigo-50 border text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                placeholder="โปรดกรอกอายุ"
                required
              />
            </div>
            <!-- Validation message -->
            <span
              :class="{
                'text-green-500': isAgeValid,
                'text-red-500': !isAgeValid && formData.age,
                'text-red-500': !formData.age,
              }"
              class="block mt-1 text-sm"
              aria-hidden="true"
              >{{ ageValidationMessage }}</span
            >
          </div>
          <!-- Gender -->
          <div class="sm:col-span-3">
            <label
              for="selectedGender"
              class="block text-sm font-medium leading-6 text-gray-900"
              >เพศ</label
            >
            <div class="mt-2 relative">
              <select
                v-model="formData.selectedGender"
                class="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                required
              >
                <option disabled value="">เลือกเพศ</option>
                <option value="Male">เพศชาย</option>
                <option value="Female">เพศหญิง</option>
              </select>
              <span
                class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none"
              >
                <svg
                  class="h-6 w-6 text-gray-400 transform rotate-90"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </span>
            </div>
            <span
              >กรุณาเลือกเพศ</span
            >
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
              :class="{
                'border-gray-400': isUsernameValid,
                'border-red-500':
                  !isUsernameValid && formData.username.length > 0,
                'border-indigo-300': formData.username.length === 0,
              }"
              class="bg-indigo-50 border text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="โปรดกรอก username"
              required
            />
          </div>
          <!-- Validation message -->
          <span
            :class="{
              'text-green-500': isUsernameValid,
              'text-red-500': !isUsernameValid,
            }"
            class="block mt-1 text-sm"
            aria-hidden="true"
            >{{ usernameValidationMessage }}</span
          >
        </div>

        <!-- Email -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="email"
            class="block text-sm font-medium leading-6 text-gray-900"
            >อีเมล</label
          >
          <div class="mt-2">
            <input
              type="email"
              id="email"
              v-model="formData.email"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="โปรดกรอกอีเมล"
              required
            />
          </div>
        </div>

        <!-- Password -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >รหัสผ่าน</label
          >
          <div class="mt-2">
            <input
              type="password"
              id="password"
              v-model="formData.password"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="โปรดกรอกรหัสผ่าน"
              required
            />
          </div>
        </div>

        <!-- Confirm Password -->
        <div class="sm:col-span-4 mt-6">
          <label
            for="confirm_password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >กรอกรหัสผ่านอีกครั้ง</label
          >
          <div class="mt-2">
            <input
              type="password"
              id="confirm_password"
              v-model="formData.confirm_password"
              class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
              placeholder="กรอกรหัสผ่านอีกครั้ง"
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
          มีบัญชีแล้วใช่ไหม?
          <router-link to="/signin" class="text-blue-500">Sign in</router-link>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
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
  computed: {
    isFirstNameValid() {
      const length = this.formData.first_name.length;
      return length >= 5 && length <= 20;
    },
    firstNameValidationMessage() {
      return this.isFirstNameValid
        ? "ถูกต้อง"
        : "ตำเตือน: ชื่อจริงควรอยู่ระหว่าง 5-20 คำ";
    },
    isLastNameValid() {
      const length = this.formData.last_name.length;
      return length >= 5 && length <= 20;
    },
    lastNameValidationMessage() {
      return this.isLastNameValid
        ? "ถูกต้อง"
        : "ตำเตือน: นามสกุลควรอยู่ระหว่าง 5-20 คำ";
    },
    isAgeValid() {
      return this.formData.age >= 15 && this.formData.age <= 19;
    },
    ageValidationMessage() {
      return this.isAgeValid
        ? "ถูกต้อง"
        : "คำเตือน : อายุควรอยู่ระหว่าง 15 - 19 ปี ";
    },
    isUsernameValid() {
      const length = this.formData.username.length;
      return length >= 5 && length <= 20;
    },
    usernameValidationMessage() {
      return this.isUsernameValid
        ? "ถูกต้อง"
        : "คำเตือน: Username ควรอยู่ระหว่าง 5 - 20 คำ";
    },
  },
  methods: {
    async submitForm() {
      // Check if any required field is empty
      if (
        !this.formData.first_name ||
        !this.formData.last_name ||
        !this.formData.age ||
        !this.formData.selectedGender ||
        !this.formData.username ||
        !this.formData.email ||
        !this.formData.password ||
        !this.formData.confirm_password
      ) {
        // Display an alert if any required field is empty
        Swal.fire({
          title: "Please fill in all required fields.",
          icon: "warning",
        });
        return; // Stop form submission
      }

      // Check if password and confirm password match
      if (this.formData.password !== this.formData.confirm_password) {
        // Display an alert if passwords don't match
        Swal.fire({
          title: "Password mismatch",
          text: "Please make sure the passwords match.",
          icon: "error",
        });
        return; // Stop form submission
      }

      // Send form data to backend
      try {
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

        // Redirect to sign-in page after successful registration
        Swal.fire({
          title: "Register successful",
          icon: "success",
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
