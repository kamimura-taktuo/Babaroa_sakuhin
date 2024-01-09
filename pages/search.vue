<template>
<div>
  <!-- 検索フォーム -->
  <div class="search-form">
    <input v-model="q"
    type="text"
    @keyup.enter="(e) => search(e.target.value)"
    @keypress="setSearchable"/>
  </div>

  <!-- 検索結果件数 -->
  <p class="search-result"> {{ totalCount }}件の検索結果</p>

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

</div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      contents: this.contents || [], // 検索結果の配列
      totalCount: this.totalCount || 0, // 検索結果件数の表示用
      q: this.$route.query.q, // SearchForm.vueから渡されるクエリ
      searchable: true, // この画面から検索した際の制御
    };
  },

  async created() {
    const query = this.$route.query;
    if (query.q === undefined) {
      return;
    }
    // 検索可能ならsearchメソッド実行
    this.search(query.q);
  },
  methods: {
    setSearchable() {
      this.searchable = true;
    },
    async search(q = '') {
      if (!q.trim() || !this.searchable) {
        return;
      }

      const { data, error } = await axios
        // search.jsにクエリを渡して呼び出す
        .get(`/.netlify/functions/search?q=${q}`)
        .catch((error) => ({
          error
        }));
      if (error) {
        return;
      }
      this.contents = data.contents;
      this.totalCount = data.totalCount;
      this.searchable = false;
    }
  }
}
</script>
<style scoped>

.search-form {
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
  -webkit-appearance: none;
  transition: box-shadow 0.2s ease;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

.search-result {
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