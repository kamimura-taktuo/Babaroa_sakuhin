

<!--検索結果表示のページ-->


<template>
<div>
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

  <!-- <p style="color: #fff;">こんにちは</p> -->
  

  <!-- 検索フォーム -->
  <!-- <div class="search-form">
    <input v-model="q"
    type="text"
    @keyup.enter="(e) => search(e.target.value)"
    @keypress="setSearchable" class="search-text"/>
  </div> -->

  <!-- 検索結果件数 -->
  <p class="search-result"> {{ totalCount }}件の検索結果</p>

 <!--検索記事-->
<div v-if="totalCount > 0">
  <ul class="recipe">
      <li class="recipe_hairetu" v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/recipe/${content.id}`" class="container">
        <img :src=content.eyecatch.url>
        <div class="Time_recipe">
          <p class="Time_cook">{{content.time}}</p>
        </div><br>
          {{content.title}}
        </nuxt-link>
      </li>
  </ul>
</div>
<div v-else>
  <p class="error">申し訳ございません。レシピは見つかりませんでした</p>
  <img src="@/assets/img/お辞儀2.png" class="error_png">

</div>

<!--Topページに戻るボタン-->
<div class="top_buttom">
  <a href="/"><img src="@/assets/img/topへ.png"></a>
</div>


<!-- footer
    <div>
         <footer>
          <a href="/">トップへ戻る</a>
          <p>© All rights reserved by dmmwebcampmedia.</p>
        </footer>
    </div> -->
  

</div>

</template>

<script>
import axios from 'axios'

export default {

  async asyncData({ query }) {
    var text = query.id
    const { data } = await axios.get(
      //検索実行
      `https://test1024.microcms.io/api/v1/menu/?q=${text}`,
      { headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' } }
    )
    return data;
  },

  data() {
    return {
      contents: "",
      //　省略
    }
  },

  // data() {
  //   return {
  //     contents: this.contents || [], // 検索結果の配列
  //     totalCount: this.totalCount || 0, // 検索結果件数の表示用
  //     q: this.$route.query.q, // SearchForm.vueから渡されるクエリ
  //     searchable: true, // この画面から検索した際の制御
  //   };
  // },

  // async created() {
  //   const query = this.$route.query;
  //   if (query.q === undefined) {
  //     return;
  //   }
  //   // 検索可能ならsearchメソッド実行
  //   this.search(query.q);
  // },
  // methods: {
  //   setSearchable() {
  //     this.searchable = true;
  //   },
  //   async search(q = '') {
  //     if (!q.trim() || !this.searchable) {
  //       return;
  //     }

  //     const { data, error } = await axios
  //       // search.jsにクエリを渡して呼び出す
  //       .get(`/.netlify/functions/search?q=${q}`)
  //       .catch((error) => ({
  //         error
  //       }));
  //     if (error) {
  //       return;
  //     }
  //     this.contents = data.contents;
  //     this.totalCount = data.totalCount;
  //     this.searchable = false;
  //   }
  //  }
}
</script>
<style scoped>

.search-form {
  padding: 64px 0 0 20px;
  width: 45%;
  margin-top: 2rem;
  position: relative;
}

input[type=text] {
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  box-shadow: none;
  /* -webkit-appearance: none; */
  transition: box-shadow 0.2s ease;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.search-text{
  color: #fff;
}
.search-result {
  padding: 70px 0 0 30px;
  margin-top: 3rem;
  font-size: 2.5rem;
  color: #6F959E;
  margin-bottom: 3rem;
}

.article {
  margin-bottom: 6rem;
  width: 100%;
}

.post-published {
  font-size: 1.4rem;
  color: #888;
  margin-right: 20px;
}

.post-title {
  margin-top: 6px;
  font-size: 2.4rem;
  color: #888;
  line-height: 1.6;
  font-weight: bold;
}

.post-title:hover {
  opacity: .5;
}

.post-tag {
  font-size: 1.4rem;
  color: 888;
  opacity: 0.7;
  letter-spacing: 1px;
}
.error{
  color: #fff;
  text-align: center;
  font-size: 3vw;
}
.error_png{
  width: 15%;
  display: block;
  margin: auto;
}
.top_buttom{
  margin: 0 20px 0 auto;
  width: 120px;
  height: 70px;
}
.top_buttom img{
  width: 120px;
  height: 70px;
}

</style>