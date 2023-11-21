<template>

  
  <div>
    <TheHeader />

    <!-- <section class="container">
    <div>
      <div class="logoWrapper">
        <logo />
      </div>
      <p><button @click="execHideElement('.logoWrapper')">Hide Logo</button></p>
    </div>
    </section> -->
    <!-- <slick ref="slick" :options="option">
      <div>
        aaa
      </div>
      <div>
        bbb
      </div>
      <div>
        ccc
      </div>
      <div>
        ddd
      </div>
    </slick> -->
    <div id="splash">
          <div id="splash_logo">
            <img src="../assets/img/logo.png" alt="ロゴ" class="fadeUp" />
          </div>
        </div>
 
        <div class="relative">
          
          <!-- <div class="your-class"> -->
          <slick ref="slick" :options="option">
            <div>
              <video id="video" class="video1"  autoplay loop muted playsinline>
                <source
                  src="/Video/動画①.mp4"
                  type="Video/mp4"
                />
              </video>
            </div>
            <div>
              <video id="video" class="video1" autoplay loop muted playsinline>
                <source
                  src="/Video/cookie動画.mp4"
                  type="Video/mp4"
                />
              </video>
            </div>
            <div>
              <video id="video" class="video1" autoplay loop muted playsinline>
                <!-- <source
                  :src="require('../assets/Video/sasikomi.mp4')"
                  type="Video/mp4"
                /> -->
                <source
                  src="/sasikomi.mp4"
                  type="Video/mp4"
                />
              </video>
            </div>
          </slick>
        
 
          <img class="absolute" src="../assets/img/logo.png" />
          <div class="inner float">
            <div class="logo">
              <h1>
                <a href="index.vue">
                  <img
                    src="../assets/img/logo.png"
                    alt="rogo"
                    width="65"
                    height="65"
                  />
                </a>
              </h1>
            </div>
          </div>
        </div>

    <div style="text-align: center; margin: auto;" >
        <p class="title">~One step closer to fashion~</p>
        <p class=p1>大人なスイーツレシピ</p>
    </div>

    <!--おすすめスイーツ-->
        <p class ="p4">おすすめスイーツ</p>
          <div class="slider-for">
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;"  class="png_1" src="../assets/img/どら焼き画像.png"></div>
                    <div class="slide-item__text">
                      <p class="p6">どら焼き</p>
                      <p class="p6">製作時間　30分</p>
                    </div>
                </div>
            </div>
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;" class="png_1" src="@/assets/img/おはぎ画像.png"></div>
                    <div class="slide-item__text">
                      <p class="p6">おはぎ</p>
                      <p class="p6">製作時間　30分</p>
                    </div>
              </div>
            </div>
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;" class="png_1" src="@/assets/img/わらび餅.png"></div>
                  <div class="slide-item__text">
                    <p class="p6">わらび餅</p>
                    <p class="p6">製作時間　30分</p>
                    <p class="p6">カロリー　500000kcal</p>
                  </div>
              </div>
            </div>
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;" class="png_1" src="@/assets/img/アップルパイ.png"></div>
                    <div class="slide-item__text">
                      <p class="p6">アップルパイ</p>
                      <p class="p6">製作時間　30分</p>
                    </div>
              </div>
            </div>
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;" class="png_1" src="@/assets/img/カッサータ.png"></div>
                    <div class="slide-item__text">
                      <p class="p6">カッサータ</p>
                      <p class="p6">製作時間　30分</p>
                    </div>
              </div>
            </div>
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;" class="png_1" src="@/assets/img/チーズタルト.png"></div>
                    <div class="slide-item__text">
                      <p class="p6">チーズタルト</p>
                      <p class="p6">製作時間　30分</p>
                    </div>
              </div>
            </div>
            <div>
              <div class="slide-item__wrapper2" style="display: flex;">
                  <div class="slide-item__img" style="flex: 0 0 50%;"><img style="width: 75%;" class="png_1" src="@/assets/img/抹茶カヌレ.png"></div>
                    <div class="slide-item__text">
                      <p class="p6">抹茶カヌレ</p>
                      <p class="p6">製作時間　30分</p>
                    </div>
              </div>
            </div>
        </div>

    <div></div>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>

    <TheFooter />
  </div>
  
</template>

<script>
import axios from 'axios'
/*import Logo from '~/components/Logo.vue'*/
import slick from 'vue-slick'

export default {
  components: {
    slick,
  },
  data() {
    return {
      option: {
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        infinite: false,
      },
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      `https://test1024.microcms.io/api/v1/menu`,
      {
        headers: {
          "X-MICROCMS-API-KEY": "Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi",
        },
      }
    );
    return data;
  },
  data() {
    return {
      example: "test",
    };
  },
  head() {
      return {
        title: 'Bavarois',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'My custom description'
          }
        ]
      }
  },
  /*components:{
    Logo
  },*/
  methods:{
    execHideElement(selector){
      if(process.browser){
        const main = require('~/assets/js/main')

        main.hideElement(selector)
      }
    }
  },
  mounted() {
    // このページで動くスクリプト
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
  },
}
</script>
<script>
// $(document).ready(function () {
//   $(".your-class").slick({
//     autoplay: true,
//     autoplaySpeed: 5000,
//     fade: true,
//   });

//   $(".slider-for").slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: ".slider-nav",
//   });
//   $(".slider-nav").slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: ".slider-for",
//     dots: true,
//     centerMode: true,
//     focusOnSelect: true,
//   });
// });
</script>