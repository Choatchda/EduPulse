<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <!-- Section 1 -->
      <section>
        <div class="flex flex-row justify-center gap-8 items-center">
          <div class="hidden lg:mt-0 lg:flex justify-center">
            <img
              src="https://cdn.discordapp.com/attachments/914474333273989140/1211369005814644768/image.png?ex=65edf24d&is=65db7d4d&hm=3651b4838ac07e4dfd09efaca6075f045a5577e2ce6f86e2c2663052ddc26848&"
              class="w-3/4"
            />
          </div>
        </div>
      </section>

      <!-- Section 2 -->
      <section class="mt-6 flex items-center justify-center">
        <div
          class="justify-center items-center p-4 bg-white w-2/4 shadow-lg rounded-lg"
        >
          <h1 class="text-5xl font-bold text-black text-center pb-24">
            เพิ่มคอร์สเรียน
          </h1>

         <!-- Form Grid 1 -->
<div class="sm:col-span-2 mb-4 flex flex-wrap justify-center gap-24">
  <div class="flex-col mb-6 flex item-center w-1/3">
    <label for="courseName" class="text-sm font-medium leading-6 text-gray-900">ชื่อคอร์สเรียน:</label>
    <input v-model="courseName" type="text" id="courseName" name="courseName" class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
  </div>
  <div class="flex-col mb-6 flex">
    <label for="teacher" class="text-sm font-medium leading-6 text-gray-900">ครูผู้สอน:</label>
    <input v-model="teacherName" type="text" id="teacher" name="teacher" class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
  </div>
</div>

<!-- Form Grid 2 -->
<div class="sm:col-span-2 mb-4 flex flex-wrap justify-center gap-24">
  <div class="flex-col mb-6 flex item-center w-1/3">
    <label for="Subject" class="text-sm font-medium leading-6 text-gray-900">วิชา:</label>
    <input v-model="subject" type="text" id="Subject" name="Subject" class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
  </div>
  <div class="flex-col mb-6 flex">
    <label for="price" class="text-sm font-medium leading-6 text-gray-900">ราคา:</label>
    <input v-model="price" type="text" id="price" name="price" class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
  </div>
</div>

<!-- Form Grid 3 -->
<div class="px-11 ml-8 flex-col mb-6 flex item-center w-1/2">
  <label for="courseDuration" class="text-sm font-medium leading-6 text-gray-900">อายุคอร์สเรียน:</label>
  <input v-model="hour" type="number" id="courseDuration" name="courseDuration" class="w-48 h-12 bg-slate-50 border-0 rounded-2xl shadow-sm ring-1 ring-inset ring-gray-400 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" />
</div>

          <!-- Image upload section -->
      
         <div class="flex justify-center flex-col items-center mb-5">
            <h1>อัปโหลดภาพ</h1>
            <span class="text-red-500">รองรับเฉพาะไฟล์ .pdf .jpg .png .jpeg</span>
            <input type="file" accept="image/*" @change="handleImageUpload" class="ml-11" />
  
         <div v-if="imageUrl" class="mt-6 mr-6">
          <img :src="imageUrl" width="200" height="200" />
          <button @click="clearImage"  class="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">ลบ</button>
        </div>  
      </div>

          <!-- Video upload section -->
          <div class="flex justify-center flex-col items-center mb-5">
          <h1>อัปโหลดวิดีโอ</h1>
          <span class="text-red-500">รองรับเฉพาะไฟล์ .mov .mp4</span>
          <input type="file" accept="video/*" @change="handleVideoUpload" class="ml-11" />
  
        <div v-if="videoUrl" class="mt-6 mr-6">
        <video controls width="200" height="200">
          <source :src="videoUrl" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button @click="clearVideo" class="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">ลบ</button>
      </div>
    </div>

          <div class="flex justify-center">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32" @click = "addCourse"
            >
              เพิ่ม
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import Navbar from "../components/Navbar.vue";
import  {backendUrl}  from '../port';
export default {
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      imageFileName: null,
      imageUrl: null,
      videoFileName: null,
      videoUrl: null,
      courseName: '',
      teacherName: '',
      subject: '',
      price: '',
      hour: ''
    };
  },
  methods: {
    async addCourse() {
      const formData = new FormData();
      formData.append('courseName', this.courseName);
      formData.append('teacherName', this.teacherName);
      formData.append('subject', this.subject);
      formData.append('price', this.price);
      formData.append('hour', this.hour);
      formData.append('imageFile', this.imageFile);
      formData.append('videoFile', this.videoFile);

      try {
    const response = await axios.post(`${backendUrl}/course`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to JSON
        },
    });

    console.log(response);

    if (response.status === 201) {
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Course added successfully'
        });
    } else {
        throw new Error('Failed to add course');
    }
} catch (error) {
    console.error('Error adding course:', error);
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: error.message || 'An error occurred during the request.'
    });
} }
,
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFileName = file.name;
        this.imageUrl = URL.createObjectURL(file);
        this.imageFile = file;
      }
    },
    handleVideoUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.videoFileName = file.name;
        this.videoUrl = URL.createObjectURL(file);
        this.videoFile = file;
      }
    },
    clearImage() {
      this.imageFileName = null;
      this.imageUrl = null;
      this.imageFile = null;
    },
    clearVideo() {
      this.videoFileName = null;
      this.videoUrl = null;
      this.videoFile = null;
    }
  }
};
</script>