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
      <div class=" mb-2">
        <button
          href="#"
          class="w-full items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-100 bg-black"
        >
          Buy Course
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    nameeachcourse: {
      type: String,
      default: "",
    },
    priceeachcourse: {
      type: Number,
      default: 0
    }
  }
}
</script>
