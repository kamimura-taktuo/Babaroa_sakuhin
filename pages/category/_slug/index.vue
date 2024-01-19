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

<!-- <h1 class="category_name">{{ title }}</h1> -->
  <div>
    <ul class="recipe">
      <li class="recipe_hairetu delay-time2 box fadeLeftTrigger" v-for="content in contents" :key="content.id">
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

  <div class="paginetion">
    // 略
    <Pagination
    :pager="pager"
    :current="Number(page)"
    :category="categoryId"
    />
  </div>

  <!-- footer -->
    <div>
      <footer>
        <a href="/">トップへ戻る</a>
        <p>© All rights reserved by dmmwebcampmedia.</p>
      </footer>
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
  },

  mounted(){
    if(process.browser){
      $(function () {
        $(window).on('load',function(){
          $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
          $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
        });
        // $('.your-class').slick({
        //   fade: true,
        //   autoplay: true,
        //   autoplaySpeed: 3000,
        // });
      });
    }

    function fadeAnime(){
      $('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
        }else{
        $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
        }
      });
    }

    // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
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

/* 左から */

.fadeLeft{
animation-name:fadeLeftAnime;
animation-duration:0.5s;
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeLeftAnime{
  from {
    opacity: 0;
  transform: translateX(-100px);
  }

  to {
    opacity: 1;
  transform: translateX(0);
  }
}

.delay-time2{
  animation-delay: 0.3s;
}
</style>
