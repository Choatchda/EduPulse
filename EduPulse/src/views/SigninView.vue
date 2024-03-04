<template>
  <div id="signin">
    <div class="flex">
      <div class="w-1/2">
        <!-- Image on the left -->
        <img
          src="https://cdn.discordapp.com/attachments/1214039159514210355/1214039364330328106/joy-young-woman-studying_1.png?ex=65f7a944&is=65e53444&hm=9778be359c32eae7c03b195c9f0ddf372966ba44583e1f914d90ccced9fb1132&"
          class="w-full h-auto"
          alt="Your image"
        />
      </div>
      <div class="w-1/2 flex justify-center items-center flex-col">
        <h1
          class="text-6xl font-bold font-orbitron text-black mb-4 custom-font"
        >
          Edupulse
        </h1>

        <div
          class="w-1/2 h-1/2 mx-auto rounded-lg bg-gray-300 bg-opacity-20 p-4 flex justify-center items-center flex-col"
        >
          <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-8">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium leading-6 text-gray-900"
                  >Email</label
                >
                <div class="mt-2">
                  <input
                    type="text"
                    id="email"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>

              <div>
                <div class="flex items-center justify-between">
                  <label
                    for="password"
                    class="block text-sm font-medium leading-6 text-gray-900"
                    >Password</label
                  >
                </div>
                <div class="mt-2">
                  <input
                    type="text"
                    id="password"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div class="text-gray-600 text-center">
              <p>
                Already have an account?
                <a href="/signup" class="text-blue-500">Sign up</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    navbar: Navbar,
  },
};
</script>
