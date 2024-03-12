<template>
  <div id="app">
    <Navbar />
    <div class="flex flex-wrap justify-center">
      <PaymentCard v-for="(card, index) in paymentCards" :key="index" :cardData="card" />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PaymentCard from "../components/PaymentCard.vue";

export default {
  components: {
    Navbar,
    PaymentCard
  },
  data() {
    return {
      paymentCards: [
        { username: "User1", date: "2024-03-12", image: "https://media.discordapp.net/attachments/1186144025074479185/1217129675097378936/ba154685-db18-4ac7-b318-a4a2b15b9d4c.jpg?ex=6602e757&is=65f07257&hm=12f15f5d86f25885c48899ae994f316db739646636eaa0efbb265516629ad35e&=&format=webp&width=914&height=1124", price: 100 , couresname : 'คอร์สภาษาไทย'},
        { username: "User2", date: "2024-03-13", image: "https://media.discordapp.net/attachments/1186144025074479185/1217129675097378936/ba154685-db18-4ac7-b318-a4a2b15b9d4c.jpg?ex=6602e757&is=65f07257&hm=12f15f5d86f25885c48899ae994f316db739646636eaa0efbb265516629ad35e&=&format=webp&width=914&height=1124", price: 5000 , couresname : 'คอร์สภาษาอังกฤษ'},
        // Add more payment card data as needed
      ]
    };
  }
};
</script>