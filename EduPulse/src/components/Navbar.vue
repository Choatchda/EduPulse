



<template>
  <header>
    <Disclosure as="nav" class="bg-white w-full px-0" v-slot="{ open }">
      <div class="sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div
            class="flex flex-3 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex flex-shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="https://edupulse-bucket.s3.amazonaws.com/logo.png"
                alt="Eduplus"
              />
            </div>
          </div>
      <div v-if="userId === 'd7afeb6e-ab7d-4f22-a92a-87d7e66995b2'" class="flex flex-6 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-16">
            <a
              v-for="item in loggedInNavigation"
              v-on:click="!item.current"
              :key="item.name"
              :class="[
                item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <router-link :to="item.href">{{ item.name }}</router-link>
            </a>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-6 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-16">
            <a
              v-for="item in navigation"
              v-on:click="!item.current"
              :key="item.name"
              :class="[
                item.current ? 'bg-gray-900 text-white' : 'text-gray-500 hover:bg-gray-700 hover:text-white',
                'rounded-md px-3 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <router-link :to="item.href">{{ item.name }}</router-link>
            </a>
          </div>
        </div>
      </div>
          <div
            class="flex flex-3 absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
          >
            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg"
                    alt=""
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="/profile"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >Profile</a
                    >
                  </MenuItem>
            
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      @click.prevent="signOut"
                      class="block px-4 py-2 text-sm text-gray-700"
                      >Sign out</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            v-for="item in navigation"
            :key="item.name"
            as="a"
            :href="item.href"
            :class="[
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-700 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
  </header>
</template>
<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";

const router = useRouter();

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Course", href: "/course", current: false },
  { name: "แจ้งปัญหา", href: "/problem", current: false },
  { name: "คอร์สของฉัน", href: "/mycourse", current: false }
  
];

const loggedInNavigation = [
  { name: "หน้าหลัก", href: "/", current: false },
  { name: "เพิ่มคอร์สเรียน", href: "/Addcourse", current: false },
  { name: "ปัญหา", href: "/problem", current: false },
  { name: "การอนุมัติ", href: "/approval", current: false },
];

let userId = localStorage.getItem('userId'); // ให้ตัวแปรนี้เก็บ user id ที่ได้จากการล็อกอิน

const signOut = () => {
  // Clear localStorage
  localStorage.clear();
  let timerInterval;
  Swal.fire({
    title: "Logout successful",
    html: "I will close in <b></b> milliseconds.",
    timer: 3000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const timer = Swal.getPopup().querySelector("b");
      timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log(" was closed by the timer");
      router.push("/signin");
    }
  });
  // Redirect to the sign-in page
};
</script>
