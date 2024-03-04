<template >
    <div id = "signin">
     <div class="flex">
    <div class="w-1/2">
      <!-- Image on the left -->
      <img src="https://cdn.discordapp.com/attachments/1214039159514210355/1214039364330328106/joy-young-woman-studying_1.png?ex=65f7a944&is=65e53444&hm=9778be359c32eae7c03b195c9f0ddf372966ba44583e1f914d90ccced9fb1132&" class="w-full h-auto" alt="Your image">
    </div>
    <div class="w-1/2 flex justify-center items-center flex-col">
   
      <h1 class="text-6xl font-bold font-orbitron text-black mb-4 custom-font">Edupulse</h1>
     
      <div class="w-1/2  h-1/2 mx-auto  rounded-lg bg-gray-300 bg-opacity-20 p-4  flex justify-center items-center flex-col ">
    <div class="mb-6">
        <!-- Email  -->
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900"> Email</label>
        <input type="email" class="w-full px-14 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500  ">
    </div>
      <div class="mb-6">
        <!-- Password  -->
        <label for="username" class="block text-sm font-medium leading-6 text-gray-900"> Password</label>
        <input type="password"  class="w-full px-14 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500  ">
      </div>
      <!-- Sign-in  -->
      <button type="submit" class="w-1/2 bg-indigo-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-indigo-600">Sign In</button>
        
       <div class="text-gray-600">
      <p>Already have an account? <a href="/signup" class="text-blue-500">Sign up</a>.</p>
    </div>

      </div>
    </div>
  </div>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
    components: {
        navbar : Navbar
    }
}
</script>