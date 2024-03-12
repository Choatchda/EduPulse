<template>
  <div id="app">
  <Navbar />
  <div class="flex items-center justify-center h-screen">
    <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-4">ซื้อคอร์ส</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="courseName" class="block text-sm font-medium text-gray-600">ชื่อคอร์ส</label>
          <input v-model="courseName" type="text" id="courseName" class="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div class="mb-4">
          <label for="coursePrice" class="block text-sm font-medium text-gray-600">ราคา</label>
          <input v-model="coursePrice" type="number" id="coursePrice" class="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div class="mb-4">
          <label for="tel" class="block text-sm font-medium text-gray-600">โทรศัพท์</label>
          <input v-model="tel" type="tel" id="tel" class="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div class="mb-4">
        <h1> เลขที่บัญชี : 148-3-85387-0 </h1>
        <h1> ชื่อ : นายโชตชฎา อุปโยคิน </h1>
    
          <label for="image" class="block text-sm font-medium text-gray-600">อัปโหลดรูปภาพ</label>
          <input type="file" accept="image/*" @change="handleImageUpload" class="mt-1 p-2 border rounded-md w-full" />
          <div v-if="image" class="mt-2">
            <img :src="image" alt="Uploaded Image" class="w-24 h-24 object-cover rounded-md" />
            <button @click="clearImage" class="mt-1 px-2 py-1 bg-red-500 text-white rounded-md">ลบ</button>
          </div>
        </div>
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">ยืนยัน</button>
      </form>
    </div>
  </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import { ref } from 'vue';
import axios from 'axios';

const courseName = ref('');
const coursePrice = ref('');
const tel = ref('');
const image = ref('');

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      image.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  image.value = '';
};

const submitForm = () => {
  const formData = new FormData();
  formData.append('courseName', courseName);
  formData.append('coursePrice', coursePrice);
  formData.append('tel', tel);
  formData.append('state', รออนุมัติ);
  formData.append('date', )

  if (image) {
    formData.append('image', image);
  }

  axios.post('/api/buy-course', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(response => {
    // Handle success
    console.log(response.data);
  }).catch(error => {
    // Handle error
    console.error(error);
  });
};
</script>

<style>
/* Add your CSS styles here if needed */
</style>
