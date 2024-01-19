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
<!-- <ul class="recipe">
  <li class="recipe_hairetu" v-for="content in contents" :key="content.id">
    <nuxt-link :to="`../recipe/${content.id}`">
    <img :src=content.eyecatch.url width="20%"><br>
      {{ content.tags_name}}
      {{content.title}}
    </nuxt-link>
  </li>
</ul> -->

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
    console.log(params.slug)
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      `https://test1024.microcms.io/api/v1/menu?filters=tags[contains]${params.slug}&limit=100`,
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }
      }
    )
    return data
  },

  mounted(){
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