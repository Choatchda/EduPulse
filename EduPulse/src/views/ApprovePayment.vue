<template>
  <div id="app">
    <Navbar />
    <div class="flex flex-wrap justify-center">
      <PaymentCard v-for="(card, index) in paymentCards" :key="index" :cardData=card />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PaymentCard from "../components/PaymentCard.vue";
import axios from "axios"; // Import Axios for HTTP requests
import  {backendUrl}  from '../port';
export default {
  components: {
    Navbar,
    PaymentCard
  },
  data() {
    return {
      paymentCards: []
    };
  },
  created() {
    // Fetch payment card data from an API endpoint or another data source
    this.fetchPaymentCardData();
  },
  methods: {
    async fetchPaymentCardData() {
      try {
        
        // Replace the URL with the actual endpoint to fetch payment card data
        const response = await axios.get(`${backendUrl}/payments`);
        this.paymentCards = response.data.payments; 
        console.log(response.data);
        ;// Assuming the API response is an array of payment card objects
      } catch (error) {
        console.error("Error fetching payment card data:", error);
      }
    }
  }
};
</script>
