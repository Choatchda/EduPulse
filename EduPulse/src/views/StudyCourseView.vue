<template>
  <div>
    <input type="file" @change="handleFileUpload">
    <button @click="uploadVideo">Upload</button>

    <!-- Display selected video -->
    <video v-if="videoUrl" controls width="200" height="200">
      <source :src="videoUrl" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoFile: null,
      videoUrl: null
    };
  },
  methods: {
    handleFileUpload(event) {
      this.videoFile = event.target.files[0];
      this.videoUrl = URL.createObjectURL(this.videoFile); // Create object URL for the selected video file
    },
    async uploadVideo() {
      if (!this.videoFile) {
        // No file selected, do nothing
        return;
      }

      const formData = new FormData();
      formData.append('video', this.videoFile);

      // Perform upload here
    }
  }
};
</script>

<style>
/* Add any additional styling here */
</style>