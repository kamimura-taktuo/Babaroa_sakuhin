
<template>

  <main class="main">
    <!--左上のロゴの表示-->
    <div class="logo">
    <h1 class="header-title">
      <a href="/">
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
          <div class="text_setting" style="flex: 0 0 45%;">
            <div class="calorie_text" v-html="calorie.main"></div>
          </div>
      </div>
    </div>

    <!--材料-->
    <div class="material_tag">
    <p class="midasi">材料</p>
    <div class="material" v-html="main"></div>
    </div>

    



    <!--手順-->
    <div class="repeat" v-for="item in procedure" :key="item.body" style="display: flex;">
      <div v-html="item.body" style="flex: 0 0 50%; padding: 0 10% 0 10%;" class="repeat_text"></div>
      <img :src="item.img.url" style="flex: 0 0 45%; margin-bottom: 30px;" class="repeat_img">
    </div>    
      
  
    <!--タグ-->
    <p class="midasi">タグ</p>
    <ul class="tags_hairetu_1">
      <li v-for="contents in tags" :key="contents.id" class="tags_hairetu_2">
        <nuxt-link :to="`../tag/${contents.id}`">
        <img src="@/assets/img/tagu_Picture.png" width="4%">
          {{ contents.tags_name }}
        </nuxt-link>
      </li>
    </ul>

  <!--手順-->
  <!-- export const Main = ({ repeat }) => (
    <main>
      {repeat.map((item, i) =>
        item.fieldId === 'procedure' ? (
            // 画像 + テキスト表示用のコンポーネントを利用する
          <repeat key={i}  text={item.body} image={item.img} />
        ) : null
      )}
    </main>
  ); -->


  <!-- footer -->
    <div>
      <footer>
        <a href="/">トップへ戻る</a>
        <p>© All rights reserved by dmmwebcampmedia.</p>
      </footer>
    </div>

    

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