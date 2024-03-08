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
          {{ namecourse }}
        </h5>
        <p class="mb-3 font-semibold text-gray-500">
          ฿{{ pricecourse }}
        </p>
        <hr class="h-px my-4 border-0 bg-gray-300">
        <div class="flex items-center mb-2">
          <button
          href="#"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
          style="background: var(--bg--gradient);"
        >
          คอร์สเรียน
          </button>
        </div>
       
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
  namecourse: String,
  pricecourse: Number
})
  </script>
  