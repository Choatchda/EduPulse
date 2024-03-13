<template>
  <div id="app">
    <Navbar />
    <div class="m-10">
      <section class="mt-6 flex items-center justify-center">
        <div
          class="p-4 items-center justify-center text-center bg-white w-3/4 shadow-lg rounded-lg"
        >
          <div class="flex items-end justify-end">
            
              <router-link
                to="/editprofile"
                class="inline-flex items-center justify-center px-4 py-1 text-base font-medium text-center text-black rounded-lg focus:ring-4 focus:ring-gray-200 bg-slate-100 outline outline-offset-2 outline-gray-200"
              >
                Edit
              </router-link>
            
          </div>
          <div class="flex justify-center items-center my-3">
            <div class="hidden lg:flex justify-center">
              <img  
                src="https://edupulse-bucket.s3.amazonaws.com/logo.png"
                class="w-3/4"
              />
            </div>
          </div>
          <div class="flex justify-center items-center my-3">
            <div class="hidden lg:mt-0 lg:flex justify-center">
              <img v-if="userData && userData.user && userData.user.selectedGender === 'เพศชาย'"
                src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                class="w-40 h-40 rounded-full"
              />
              <img v-else
                src="https://www.svgrepo.com/show/382099/female-avatar-girl-face-woman-user-2.svg"
                class="w-40 h-40 rounded-full"
              />
            </div>
          </div>
          <h5 class="text-xl font-semibold my-3">{{ userData && userData.username }}</h5>
          <div class="flex items-center justify-center my-3">
            <div
              class="bg-gray-200 w-1/2 items-center justify-center rounded-lg shadow-lg p-3"
            >
                <!-- Replace static content with dynamic data bindings -->

<!-- ... other parts of the template ... -->
<h6 class="text-lg font-semibold mb-4">ชื่อ : {{ userData && userData.user && userData.user.first_name }}  </h6> 
    <h6 class="text-lg font-semibold mb-4">นามสกุล :  {{ userData && userData.user && userData.user.last_name }} </h6>
    <h6 class="text-lg font-semibold mb-4">อีเมล :   {{ userData && userData.user && userData.user.email }} </h6>


            </div>
          </div>
        </div>
      </section> 
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import  {backendUrl}  from '../port';
export default {
  components: {
    Navbar: Navbar,
  },
  data() {
    return {
      userData: null,
    };
  },
  mounted() {
    const userId = localStorage.getItem("userId");
    if (userId) {
      console.log('HERE' + userId)
      this.fetchUserData(userId);
    }
  },
  methods: {
    fetchUserData(userId) {
      // You can replace the following URL with your API endpoint to fetch user data
      const apiUrl = `http://localhost:3000/user/${userId}`;

      // Make a GET request to the API
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.userData = data;
          console.log(this.userData) // Update the userData property with the fetched data
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    },
  },
};
</script>
