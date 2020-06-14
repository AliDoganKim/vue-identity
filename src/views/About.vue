<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div v-for="(item,index) in values" :key="index">
      <p>{{item}}</p>
    </div>
    <button @click="callSecureApi">Call Secure API</button>
    <div v-for="service in services" :key="service.iconUri">
      <p>
        <img :src="service.iconUri" />
        <a :href="service.uri">{{service.name}}</a>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
/*const config = {
    headers: { Authorization: `Bearer ${token}` }
};*/
export default {
  
  data() {
    return {
      values: ["no data yet"],
      services: []
    }
  },
  methods: {
  
    async callSecureApi() {
      try {
        const response = await axios.get("http://localhost:4000/api/news");
         this.values = response.data;
      } catch (err) {
        console.log('secure api call failed');
      }
    }
  }
}
</script>

