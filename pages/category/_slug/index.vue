<template>
<div>
  <!--左上のロゴの表示-->
  <div class="logo">
    <h1 class="header-title">
      <a href="http://localhost:3000/">
        <img
          src="@/assets/img/logo.png"
          alt="rogo"
          width="65"
          height="65"
        />
      </a>
    </h1>
  </div>
<ul class="recipe">
  <li class="recipe_hairetu" v-for="content in contents" :key="content.id">
    <nuxt-link :to="`../recipe/${content.id}`">
    <img :src=content.eyecatch.url width="40%"><br>
      {{ content.category_name}}
      {{content.title}}
    </nuxt-link>
  </li>
</ul>
</div>
</template>

<script>
import axios from 'axios'
export default {
  async asyncData({params}) {
    console.log(params.slug)
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://test1024.microcms.io/api/v1/menu?filters=category[contains]${params.slug}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }
      }
    )
    return data
  }
  
}
</script>