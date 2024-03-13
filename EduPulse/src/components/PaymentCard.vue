<!-- PaymentCard.vue -->
<template>
  <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-lg m-5">
    <div class="p-3">
      <img
        class="rounded-lg"
        :src="cardData.slipImageURL"
        alt=""
      />
    </div>
    <div class="p-4">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
        {{ userDetail.first_name }}  {{ userDetail.last_name }}
      </h5>
      <p class="mb-1 font-semibold text-gray-500">
        {{ cardData.date }}
      </p>
      <p class="mb-3 font-semibold text-gray-500">
        ฿{{ cardData.price }}
      </p>
      <hr class="h-px my-4 border-0 bg-gray-300">
      <div class="flex items-center mb-2">
        <button
          @click="openPaymentModal"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          style="background: var(--bg--gradient);"
        >
          รายละเอียด
        </button>
      </div>
    </div>

    <!-- Payment Modal -->
    <div v-if="isPaymentModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg overflow-y-auto" style="max-height: 80vh;">
      <h2 class="text-2xl font-bold mb-4">Payment Details</h2>
      <img
        class="rounded-lg"
        :src="cardData.slipImageURL"
        alt=""
      />
      <p class="mb-2">จ่ายโดย: {{ userDetail.first_name }}  {{ userDetail.last_name }}</p>
      <p class="mb-2">วันที่: {{ cardData.date }}</p>
      <p class="mb-4">ราคา: ฿{{ cardData.price }}</p>
      
      <label for="state">Approve:</label>
      <select v-model="state" id="approval" class="mb-4">
        <option value="อนุมัติ">อนุมัติ</option>
        <option value="ปฏิเสธ">ปฏิเสธ</option>
      </select>
      <div class="flex justify-center">
        <button @click="submitPayment" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Submit</button>
        <button @click="closePaymentModal" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue';
import axios from 'axios'; // Import Axios for HTTP requests
import { backendUrl } from '../port';

const isPaymentModalOpen = ref(false);
const state = ref('state'); // Default to 'อนุมัติ'
const courseDetail = ref({});
const userDetail = ref({});

const openPaymentModal = () => {
  isPaymentModalOpen.value = true;
};

const closePaymentModal = () => {
  isPaymentModalOpen.value = false;
};

const { cardData } = defineProps(['cardData']);

const submitPayment = async () => {
  console.log(approval.value);
  try {
    // Update payment with approval status
    const response = await axios.put(`${backendUrl}/payments/${cardData.paymentId}`, {
      state: state.value,
    });

    console.log('Payment updated successfully:', response.data);

    // Close the modal after successful submission
    closePaymentModal();
  } catch (error) {
    console.error('Error updating payment:', error);
  }
};

onMounted(async () => {
  try {
    // Fetch course details based on cardData.userId
    const courseResponse = await axios.get(`${backendUrl}/course/${cardData.courseId}`);
    courseDetail.value = courseResponse.data.course;
    console.log(courseDetail.value);

    // Fetch user details based on cardData.userId
    const userResponse = await axios.get(`${backendUrl}/user/${cardData.userId}`);
    userDetail.value = userResponse.data.user;
    console.log(userDetail.value.first_name);
  } catch (error) {
    console.error('Error fetching course or user details:', error);
  }
});

</script>