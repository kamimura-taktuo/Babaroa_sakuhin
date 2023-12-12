<template>
  <main class="main">
    <h1 class="title">{{ title }}</h1>
    <!--スイーツの画像とカロリーの並び-->
    <div class="calorie">
      <div  style="display: flex;">
        <div class="img_setting" style="flex: 0 0 50%;"><img class="recipe_img" :src="calorie.img.url"></div>
          <div class="text_setting" style="flex: 0 0 50%;">
            <div class="calorie_text" v-html="calorie.main"></div>
          </div>
      </div>
    </div>

    <div class="material" v-html="main"></div>

    <ul>
      <li v-for="contents in tags" :key="contents.id">
        <nuxt-link :to="`../tag/${contents.id}`">
          {{ contents.tags_name}}
        </nuxt-link>
      </li>
    </ul>



  </main>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://test1024.microcms.io/api/v1/menu/${params.slug}`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }

      }
    )
    return data
  }
}
</script>