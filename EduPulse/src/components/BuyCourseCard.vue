<template>
  <div class="w-3/5 bg-white border border-gray-200 rounded-lg shadow-lg m-5">
    <div class="p-4">
      <h1 class="text-xl mb-4 font-bold text-gray-900 text-center">
        {{ nameeachcourse }}
      </h1>
      <div class="flex flex-row justify-between">
        <div class="items-center justify-center text-center">
          <font-awesome-icon icon="fa-regular fa-clock" class="fa-2xl" />
          <p class="max-w-2xl font-light text-sm">ความยาววิดีโอ</p>
        </div>
        <div class="items-center justify-center text-center">
            <font-awesome-icon icon="fa-solid fa-graduation-cap" class="fa-2xl" />
          <p class="max-w-2xl font-light text-sm">ชั่วโมงเรียน</p>
        </div>
        <div class="items-center justify-center text-center">
          <font-awesome-icon icon="fa-regular fa-calendar-days" class="fa-2xl" />
          <p class="max-w-2xl font-light text-sm">อายุคอร์ส</p>
        </div>

   
      </div>
      <hr class="h-px my-4 border-0 bg-gray-300" />
      <h5 class="text-xl mb-3 font-semibold text-orange-500">฿{{ priceeachcourse }}</h5>
      <div class="mb-2">
        <button
          @click="openBuyModal"
          class="w-full items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100 bg-black"
        >
          Buy Course
        </button>
      </div>
    </div>

    <!-- Buy Modal -->
    <div v-if="isBuyModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Confirmation</h2>
        <p>Are you sure you want to buy "{{ nameeachcourse }}" for ฿{{ priceeachcourse }}?</p>
        <div class="mt-4 flex justify-center">
          <button @click="buyCourse" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Yes</button>
          <button @click="closeBuyModal" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>

    <!-- After Buy Modal -->
    <div v-if="isAfterBuyModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Course Details</h2>
        <div class="mb-4">
          <label for="courseName" class="block text-sm font-medium text-gray-600">Course Name</label>
          <input type="text" id="courseName" :value="nameeachcourse" @input="updateCourseName($event.target.value)" class="mt-1 p-2 border rounded-md w-full" required>
        </div>
         <div class="mb-4">
          <label for="courseCost" class="block text-sm font-medium text-gray-600">Course Cost</label>
          <input type="text" id="courseCost" :value="priceeachcourse" @input="updateCourseCost($event.target.value)" class="mt-1 p-2 border rounded-md w-full" required>
        </div>
          <div class="mb-4">
          <label for="username" class="block text-sm font-medium text-gray-600">Username</label>
          <input type="text" id="username" :value="username" @input="updateUsername($event.target.value)" class="mt-1 p-2 border rounded-md w-full" required>
        </div>
        <div class="mb-4">
          <label for="Tel" class="block text-sm font-medium text-gray-600">Tel</label>
          <input type="tel" id="Tel" :value="tel" @input="updateTel($event.target.value)" class="mt-1 p-2 border rounded-md w-full" required>
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-gray-600">Upload Image</label>
          <input type="file" accept="image/*" @change="handleImageUpload" class="mt-1 p-2 border rounded-md w-full">
          <div v-if="courseImage" class="mt-2">
            <img :src="courseImage" alt="Uploaded Image" class="w-24 h-24 object-cover rounded-md">
          </div>
        </div>
        <button @click="closeAfterBuyModal" class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
      </div>
    </div>
  
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';
import axios from 'axios';

const { emit } = defineEmits(['buy-success', 'update:username', 'update:tel', 'update:image']);

defineProps({
  nameeachcourse: String,
  priceeachcourse: Number,
  tel: String,
  username : String,
  image: String,
});

const isBuyModalOpen = ref(false);
const isAfterBuyModalOpen = ref(false);
const courseImage = ref('');

const openBuyModal = () => {
  isBuyModalOpen.value = true;
};

const closeBuyModal = () => {
  isBuyModalOpen.value = false;
};

const buyCourse = () => {
  isAfterBuyModalOpen.value = true;
  closeBuyModal();

  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate().toString().padStart(2, '0')}/${(currentDate.getMonth() + 1).toString().padStart(2, '0')}/${currentDate.getFullYear()}`;

  // Post data to the backend using Axios
  axios.post('/api/buy-course', {
    name: nameeachcourse,
    price: priceeachcourse,
    tel: tel,
    image: image,
    state : "รออนุมัติ",
    date: formattedDate, 
    username: username
    // Add more data fields as needed
  })
  .then(() => {
    // Emit success event to parent component
    emit('buy-success');
  })
  .catch(error => {
    console.error('Error buying course:', error);
    // Handle error if necessary
  });
};

const closeAfterBuyModal = () => {
  isAfterBuyModalOpen.value = false;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      emit('update:image', reader.result);
    };
    reader.readAsDataURL(file);
  }
};

const updateUsername = (value) => {
  emit('update:username', value);
};

const updateTel = (value) => {
  emit('update:tel', value);
};
</script>