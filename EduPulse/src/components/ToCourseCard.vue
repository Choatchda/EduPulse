<template>
  <div class="w-1/4 bg-white border border-gray-200 rounded-lg shadow-lg m-5">
    <div class="p-3">
      <img
        class="rounded-lg"
        :src=imagecourse
        alt=""
      />
    </div>
    <div class="p-4">
      <div class="text-gray-600 flex align-middle items-center mb-2">
        <font-awesome-icon icon="fa-regular fa-circle-play" />
        <p class="ml-3">{{numbercourse}} lessons</p>
      </div>
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900">
        {{namecourse}}
      </h5>
      <p class="mb-3 font-semibold text-orange-500">
        {{ pricecourse }}฿
      </p>
      <hr class="h-px my-4 border-0 bg-gray-300">
      <div class="flex align-middle items-center mb-2 justify-between">
        <div class="text-gray-600 flex items-center">
          <font-awesome-icon icon="fa-solid fa-user" class="text-base"/>
          <p class="text-sm ml-2">{{ numberstudent }} Students</p>
        </div>
        <button
        href="#"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300"
        style="background: var(--bg--gradient);"
      >
      <router-link to="/detailcourse">
        <svg
          class="rtl:rotate-180 w-full h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </router-link>
        
        </button>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imagecourse: {
      type: String,
      default: ""
    },
    numbercourse: {
      type: Number,
      default: 0,
    },
    namecourse: {
      type: String,
      default: "",
    },
    pricecourse: {
      type: Number,
      default: 0
    },
    numberstudent: {
      type: Number,
      default: 0
    }
  }
}
</script>
