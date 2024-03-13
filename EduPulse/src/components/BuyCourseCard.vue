<template>
  <div class="w-3/5 bg-white border border-gray-200 rounded-lg shadow-lg m-5">
    <div class="p-4">
      <h1 class="text-xl mb-4 font-bold text-gray-900 text-center">
        {{ nameeachcourse }}
      </h1>
      <div class="flex flex-row justify-between">
        <div class="items-center justify-center text-center">
          <font-awesome-icon icon="fa-regular fa-clock" class="fa-2xl" />
          <p class="max-w-2xl font-light text-sm">ความยาววิดีโอ : 0</p>
        </div>
        <div class="items-center justify-center text-center">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" class="fa-2xl" />
          <p class="max-w-2xl font-light text-sm">
            ชั่วโมงเรียน : {{ houreachcourse }}
          </p>
        </div>
        <div class="items-center justify-center text-center">
          <font-awesome-icon icon="fa-regular fa-calendar-days" class="fa-2xl" />
          <p class="max-w-2xl font-light text-sm">อายุคอร์ส</p>
        </div>
      </div>
      <hr class="h-px my-4 border-0 bg-gray-300" />
      <h5 class="text-xl mb-3 font-semibold text-orange-500">
        ฿{{ priceeachcourse }}
      </h5>
      <div class="mb-2">
        <button @click="openBuyModal"
          class="w-full items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100 bg-black">
          Buy Course
        </button>
      </div>
    </div>

    <!-- Buy Modal -->
    <div v-if="isBuyModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Confirmation</h2>
        <p>
          Are you sure you want to buy "{{ nameeachcourse }}" for ฿{{
          priceeachcourse
        }}?
        </p>
        <div class="mt-4 flex justify-center">
          <button @click="buyCourse(courseId)" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
  Yes
</button>
          <button @click="closeBuyModal" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">
            Cancel
          </button>
        </div>
      </div>
    </div>

    <!-- After Buy Modal -->
 
  </div>
</template>

<script setup>

import { ref, defineProps, defineEmits } from "vue";
import axios from "axios";

const courseImage = ref('');

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      courseImage.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const clearImage = () => {
  courseImage.value = '';
};

const { emit } = defineEmits([
  "buy-success",
  "update:username",
  "update:tel",
  "update:image",
]);

defineProps({
  courseId: String,
  houreachcourse: String,
  nameeachcourse: String,
  priceeachcourse: Number,
  tel: String,
  username: String,
  image: String,
});

const isBuyModalOpen = ref(false);
const isAfterBuyModalOpen = ref(false);

const buyCourse = (courseId) => {
  // Construct the URL with the courseId as a parameter
  const url = `/buy/${courseId}`;

  // Navigate to the constructed URL
  window.location.href = url;
};
const openBuyModal = () => {
  isBuyModalOpen.value = true;
};

const closeBuyModal = () => {
  isBuyModalOpen.value = false;
};


const closeAfterBuyModal = () => {
  isAfterBuyModalOpen.value = false;
};



const updateUsername = (value) => {
  emit("update:username", value);
};

const updateTel = (value) => {
  emit("update:tel", value);
};
</script>
