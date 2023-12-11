<template>
<div>
  <ul class="recipe">
    <li class="recipe_hairetu" v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
      <img :src=content.eyecatch.url width="40%"><br>
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://test1024.microcms.io/api/v1/menu?limit=20',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }
      }
    )
    return data
  }
}
</script>