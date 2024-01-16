

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
  

  <!-- 検索フォーム -->
  <!-- <div class="search-form">
    <input v-model="q"
    type="text"
    @keyup.enter="(e) => search(e.target.value)"
    @keypress="setSearchable" class="search-text"/>
  </div> -->

  <!-- 検索結果件数 -->
  <!-- <p class="search-result"> {{ totalCount }}件の検索結果</p> -->

  <!-- 記事一覧
  <article v-for="post in contents" :key="post.id" style="margin-bottom:30px;" class="article">
    <span class="post-published">{{ post.publishedAt | formatDate }}</span>
    <span v-for="(tag, i) in post.tag" :key="tag.id" class="post-tag">{{ tag.name }}
      <span v-if="i !== post.tag.length-1" style="margin:0 5px;">/</span>
    </span>
    <nuxt-link :to="`/${post.id}`">
      <h1 class="post-title">
        {{ post.title }}
      </h1>
    </nuxt-link>
  </article> -->


 <!--検索記事-->
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
  padding: 0 0 0 10px;
  margin-top: 3rem;
  font-size: 1.4rem;
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
</style>