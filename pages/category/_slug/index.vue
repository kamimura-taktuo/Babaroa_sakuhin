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

<!-- <h1 class="category_name">{{ title }}</h1> -->
  <div>
    <ul class="recipe">
      <li class="recipe_hairetu" v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/recipe/${content.id}`" class="container">
        <img :src=content.eyecatch.url>
        <div class="Time_recipe">
          {{content.time}}
        </div><br>
          {{content.title}}
        </nuxt-link>
      </li>
    </ul>
  </div>

  <div>
    // 略
    <Pagination
    :pager="pager"
    :current="Number(page)"
    :category="categoryId"
    />
  </div>
</div>


</template>

<script>
import axios from 'axios'
export default {
  async asyncData({params}) {
    const page = params.p || '1'
    const categoryId = params.categoryId
    console.log(params.categoryId)
    const limit = 10
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://test1024.microcms.io/api/v1/menu?limit=${limit}${
        categoryId === undefined ? '' : `&filters=category[contains]${categoryId}`
      }&offset=${(page - 1) * limit}`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }
      }
    );

    const menu = await axios.get(
      `https://test1024.microcms.io/api/v1/menu?limit=100`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' },
      }
    );
    const selectedCategory =
      categoryId !== undefined
        ? menu.data.contents.find((content) => content.id === categoryId)
        : undefined;

    return {
      ...data,
      // selectedCategory,
      categoryId,
      page,
      pager: [...Array(Math.ceil(data.totalCount / limit)).keys()],
    };
    return data
  }
  
}
</script>


<style>
.pagena{
  width: 100%;
  height: 100%;
}
.Pagination {
  display: flex;
  /* align-items: center; */
  justify-content: center;
}
.Pagination-Item-Link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  background: #fff;
  border: solid 2px #111;
  font-size: 14px;
  color: #111;
  font-weight: bold;
  transition: all 0.15s linear;
}
.Pagination-Item-Link-Icon {
  width: 20px;
}
.Pagination-Item-Link.isActive {
  background: #111;
  color: #fff;
  pointer-events: none;
}
.Pagination-Item-Link:not(.isActive):hover {
  background: #111;
  color: #fff;
}
.Pagination > * + * {
  margin-left: 8px;
}
</style>
