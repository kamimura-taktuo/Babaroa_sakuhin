<template>
<div>
  <form @submit.prevent="submit">
    <input type="text" v-model="query" ref="searchForm">
    <button class="search-btn" type="submit">
      検索
    </button>
  </form>
</div>
</template>

<script>
export default {
  name: 'SearchForm',
  data() {
    return {
      query: '',
    }
  },
  computed: {
    // 検索キーワードが有効な場合にtrueを返す
    canSubmit() {
      return !!this.query && // キーワードがないとだめ
        !/^\s+$/.test(this.query) // 空白のみはだめ
    }
  },
  methods: {
    submit() {
      if (this.canSubmit) {
        //検索が有効な場合に検索結果ページに遷移させる
        this.$router.push({
          path: '/search',
          query: {
            q: this.query
          }
        })
        this.query = ''
        this.$refs.searchForm.blur()
      }
    }
  }
}
</script>

<style scoped>

form{
  position:relative;
  max-width: 100%;	
  margin: 12px 5% 0 0;
  /* margin-bottom: 3rem; */
  text-align: right;
  /* margin-left: auto; */
  }

input[type=text] {
  font-size: 1.2rem;
  padding: 4px 8px; 
  width: 200px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 1px #ccc;
  background-color: #fff;
  /* font-family: "Ubuntu", "Noto Sans JP", sans-serif; */
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}

button {
  font-size: 1.2rem;
  /* -webkit-appearance: none; */
  padding: 4px 2%;
  border-radius: 4px;
  background-color: #6d6d6e;
  border: solid 1px #ccc;
  vertical-align: bottom;
  /* font-family: "Ubuntu", "Noto Sans JP", sans-serif; */
  cursor: pointer;
}

.search-btn{
  margin: 0 1% 0 0;
  color: #fff;
  text-align: right;
}
</style>