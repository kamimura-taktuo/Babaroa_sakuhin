
<template>
  <main class="main">
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

    <h1 class="recipe_title">{{ title }}</h1>
    <!--スイーツの画像とカロリーの並び-->
    <div class="calorie">
      <div  style="display: flex;">
        <div class="img_setting" style="flex: 0 0 50%;"><img class="recipe_img" :src="calorie.img.url"></div>
          <div class="text_setting" style="flex: 0 0 50%;">
            <div class="calorie_text" v-html="calorie.main"></div>
          </div>
      </div>
    </div>


    <!--材料-->
    <div class="material" v-html="main"></div>

    <!--手順-->

    
    <!--タグ-->
    <p>タグ</p>
    <ul class="tags_hairetu_1">
      <li v-for="contents in tags" :key="contents.id" class="tags_hairetu_2">
        <nuxt-link :to="`../tag/${contents.id}`">
        <img src="@/assets/img/tagu_Picture.png" width="5%">
          {{ contents.tags_name }}
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

export const Main = ({ procedure }) => (
  <main>
    {procedure.map((item, i) =>
      item.fieldId === 'procedure' ? (
           // 画像 + テキスト表示用のコンポーネントを利用する
        <Procedure key={i}  text={item.text} image={item.image} />
      ) : null
    )}
  </main>
);
</script>