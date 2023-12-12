<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <p class="publishedAt">{{ publishedAt }}</p>
    <div class="post" v-html="main"></div>
  </main>
</template>

<script>
// import axios from 'axios'

// export default {
//   async asyncData({ params }) {
//     const { data } = await axios.get(
//       `https://test1024.microcms.io/api/v1/menu/${params.recipe}`,
//       {
//         headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }
//       }
//     )
//     return data
//   }
// }
</script>