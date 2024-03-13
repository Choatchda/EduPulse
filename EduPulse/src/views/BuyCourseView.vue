<template>
  <div id="app">
  <Navbar />
  <div class="flex items-center justify-center h-screen">
    <div class="w-1/2 bg-white border border-gray-200 rounded-lg shadow-lg p-8">
      <h2 class="text-2xl font-bold mb-4">ซื้อคอร์ส</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label for="courseName" class="block text-sm font-medium text-gray-600">ชื่อคอร์ส</label>
          <input v-model="courseName" type="text" id="courseName":readonly="!isFormEditable" class="mt-1 p-2 border rounded-md w-full" required />
        </div>
        <div class="mb-4">
          <label for="coursePrice" class="block text-sm font-medium text-gray-600">ราคา</label>
          <input v-model="coursePrice" type="number" id="coursePrice" :readonly="!isFormEditable" class="mt-1 p-2 border rounded-md w-full" required />
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
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRoute } from 'vue-router';
import  {backendUrl}  from '../port';

const route = useRoute();

const courseName = ref('');
const coursePrice = ref('');
const tel = ref('');
const image = ref('');

const formatDate = () => {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  return `${day}/${month}/${year}`;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    image.value = file; // Store the file directly, not as a data URL
  }
};

const clearImage = () => {
  image.value = '';
};

const submitForm = () => {
  const courseId = route.params.courseId; // Get courseId from URL params

  // Retrieve UserId from local storage
  const userId = localStorage.getItem('userId');

  const formData = new FormData();
  formData.append('name', courseName.value);
  formData.append('price', coursePrice.value);
  formData.append('tel', tel.value);
  formData.append('state', 'รออนุมัติ');
  formData.append('userId', userId);
  formData.append('courseId', courseId);
  formData.append('date', new Date())

  if (image.value instanceof File) {
    formData.append('slipImage', image.value);
  }

  axios.post(`${backendUrl}/payment`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then(response => {
    axios.post(`${backendUrl}/addcourse/${userId}`, { courseId });
    
    // Handle success
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Your request has been submitted successfully.',
    });
    console.log(response.data);
  }).catch(error => {
    // Handle error
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'An error occurred while processing your request.',
    });
    console.error(error);
  });
};

// Fetch course details based on courseId
onMounted(async () => {
  const courseId = route.params.courseId;
  try {
    const courseResponse = await axios.get(`${backendUrl}/course/${courseId}`);
    const course = courseResponse.data.course;
    console.log(course);
    courseName.value = course.courseName; // Set the course details in your form
    coursePrice.value = course.price;
    ;
    // Set other course details as needed
  } catch (error) {
    console.error('Error fetching course details:', error);
  }
});

</script>


<style>
/* Add your CSS styles here if needed */
</style>
