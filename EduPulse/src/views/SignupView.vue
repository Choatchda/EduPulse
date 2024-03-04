<template>
  <div
    id="signup"
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100"
  >
    <h1 class="text-6xl font-bold font-orbitron text-black mb-4 custom-font">
      Edupulse
    </h1>

    <!-- Sign-up box -->

    <div class="w-1/2 bg-gray-300 bg-opacity-20 p-4 rounded-lg">
      <h1 class="text-4xl font-bold font-orbitron text-black mb-4 custom-font">
        Signup
      </h1>
      <form>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="first-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >First name</label
            >
            <div class="mt-2">
              <input
                    type="text"
                    id="first_name"
                    name = "first_name"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="last-name"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Last name</label
            >
            <div class="mt-2">
             <input
                    type="text"
                    id="last_name"
                    name = "last_name"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
            </div>
          </div>
        </div>
        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label
              for="Age"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Age</label
            >
            <div class="mt-2">
              <input
                    type="number"
                    id="age"
                    name = "age"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
            </div>
          </div>

          <div class="sm:col-span-3">
            <label
              for="Gender"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Gender</label
            >
            <div class="mt-2">
              <input
                    type="text"
                    id="gender"
                    name = "gender"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
            </div>
          </div>
        </div>
        <div class="sm:col-span-4 mt-6">
          <label
            for="Username"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Username</label
          >
          <div class="mt-2">
             <input
                    type="text"
                    id="username"
                    name = "username"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
          </div>
        </div>
        <div class="sm:col-span-4 mt-6">
          <label
            for="Password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Password</label
          >
          <div class="mt-2">
            <input
                    type="text"
                    id="password"
                    name = "password"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
          </div>
        </div>
            <div class="sm:col-span-4 mt-6">
          <label
            for="Confirm Password"
            class="block text-sm font-medium leading-6 text-gray-900"
            >Confirm Password</label
          >
          <div class="mt-2">
            <input
                    type="text"
                    id="confirm_password"
                    name = "confirm_password"
                    class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5"
                    required
                  />
          </div>
        </div>
        <div class = "flex justify-center items-center">
          <button type="submit" class="flex w-1/2 mt-6 justify-center  rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>
      <div class="text-gray-600 text-center">
            <p>
              Already have an account?
              <router-link to="/signin" class="text-blue-500">Sign in</router-link>.
            </p>
          </div>

    </div>
  </div>
</template>
