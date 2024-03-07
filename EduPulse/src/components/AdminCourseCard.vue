<template>
  <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-lg m-5">
 <div class="p-3">
        <img
          class="rounded-lg"
          src="https://tierragamer.com/wp-content/uploads/2023/03/Mashle2tierragamer.webp"
          alt=""
        />
      </div>

    <div class="p-4">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
        Noteworthy technology 2021
      </h5>
      <p class="mb-3 font-semibold text-gray-500">
        ฿400
      </p>
      <hr class="h-px my-4 border-0 bg-gray-300">
      <div class="flex items-center mb-2 gap-2">
        <button
          @click="openEditModal"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300"
          style="background: black;"
        >
          แก้ไข
        </button>
        <button
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-full focus:ring-4 focus:outline-none focus:ring-blue-300"
          style="background: #157AFE;"
        >
          ดูรายละเอียด
        </button>
      </div>
    </div>

   <!-- Edit Modal -->
   <div v-if="isEditModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <!-- Your edit form goes here -->
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Edit Item</h2>
        <form @submit.prevent="submitEditForm">
          <div class="mb-4">
            <label for="itemName" class="block text-sm font-medium text-gray-600">ชื่อคอร์สเรียน</label>
            <input v-model="editedItemName" type="text" id="itemName" name="itemName" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          <div class="mb-4">
            <label for="itemPrice" class="block text-sm font-medium text-gray-600">ราคา</label>
            <input v-model="editedItemPrice" type="number" id="itemPrice" name="itemPrice" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
            <div class="mb-4">
            <label for="studycourse" class="block text-sm font-medium text-gray-600">กลุ่มวิชา</label>
            <input v-model="editedstudycourse" type="text" id="studycourse" name="studycourse" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          <div class="mb-4">
            <label for="teacher" class="block text-sm font-medium text-gray-600">ครูผู้สอน</label>
            <input v-model="editedstudycourse" type="text" id="teacher" name="teacher" class="mt-1 p-2 border rounded-md w-full" required>
          </div>
          
          
          
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Upload Image</label>
            <input type="file" accept="image/*" @change="handleImageUpload" class="mt-1 p-2 border rounded-md w-full">
            <div v-if="editedItemImage" class="mt-2">
              <img :src="editedItemImage" alt="Uploaded Image" class="w-24 h-24 object-cover rounded-md">
            </div>
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium text-gray-600">Upload Video</label>
            <input type="file" accept="video/*" @change="handleVideoUpload" class="mt-1 p-2 border rounded-md w-full">
            <div v-if="editedItemVideo" class="mt-2">
              <video controls class="w-24 h-24 object-cover rounded-md">
                <source :src="editedItemVideo" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Save Changes</button>
          <button @click="closeEditModal" class="ml-2 bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isEditModalOpen = ref(false);
const editedItemName = ref('');
const editedItemPrice = ref('');
const editedItemImage = ref('');
const editedItemVideo = ref('');

const openEditModal = () => {
  isEditModalOpen.value = true;
  // Initialize the form fields with current data
  editedItemName.value = 'Noteworthy technology 2021'; // Set your initial item name here
  editedItemPrice.value = 400; // Set your initial item price here
  editedItemImage.value = ''; // Set your initial image URL here
  editedItemVideo.value = ''; // Set your initial video URL here
};

const closeEditModal = () => {
  isEditModalOpen.value = false;
};

const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Handle image upload logic here, e.g., save to server and get the URL
    // For now, just display a preview
    const reader = new FileReader();
    reader.onload = () => {
      editedItemImage.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const handleVideoUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    // Handle video upload logic here, e.g., save to server and get the URL
    // For now, just display a preview
    const reader = new FileReader();
    reader.onload = () => {
      editedItemVideo.value = reader.result;
    };
    reader.readAsDataURL(file);
  }
};

const submitEditForm = () => {
  // Perform the logic to save changes
  // You can access the editedItemName, editedItemPrice, editedItemImage, and editedItemVideo values here
  // For example: console.log('Edited Item Name:', editedItemName.value);
  // Then close the modal
  closeEditModal();
};
</script>