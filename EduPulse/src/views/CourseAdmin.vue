<template>
  <div id="app" >
    <Navbar />
    <div class="m-10 flex flex-row">
      <div class="basis-3/12">
        <SearchBox />
      </div>
      <div class="basis-9/12">
        <div class="flex flex-wrap justify-center">
          <AdminCourseCard 
            v-for="index in 3"
            :key="index"
            namecourse="ใครอยากเป็นเศรษฐี"
            pricecourse=599
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import AdminCourseCard from "../components/AdminCourseCard.vue";
import SearchBox from "../components/SearchBox.vue";
export default {
components: {
  Navbar: Navbar,
  AdminCourseCard: AdminCourseCard,
  SearchBox: SearchBox
},
};
</script>
