<template>
  <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-lg m-5">
    <div class="p-3">
      <img
        class="rounded-lg"
        :src="cardData.image"
        alt=""
      />
    </div>
    <div class="p-4">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
        {{ cardData.username }}
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
          :src="cardData.image"
          alt=""
        />
        <p class="mb-2">จ่ายโดย: {{ cardData.username }}</p>
        <p class="mb-2">วันที่: {{ cardData.date }}</p>
        <p class="mb-4">ราคา: ฿{{ cardData.price }}</p>
        <label for="approval">Approve:</label>
        <select v-model="approval" id="approval" class="mb-4">
          <option value="approve">อนุมัติ</option>
          <option value="reject">ปฏิเสธ</option>
        </select>
        <div class="flex justify-center">
          <button @click="closePaymentModal" class="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Submit</button>
          <button @click="closePaymentModal" class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isPaymentModalOpen = ref(false);
const approval = ref('approve'); // Default to 'อนุมัติ'

const openPaymentModal = () => {
  isPaymentModalOpen.value = true;
};

const closePaymentModal = () => {
  isPaymentModalOpen.value = false;
};

// Define props
defineProps({
  cardData: {
    type: Object,
    required: true
  }
});
</script>
