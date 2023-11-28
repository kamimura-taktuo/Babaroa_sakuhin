<template>
  <div>
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

    <!--ロード画面のロゴ-->
        <div id="splash">
        <div id="splash_logo">
              <img src="../assets/img/logo.png" alt="ロゴ" class="fadeUp">
        </div>
        </div>


    <!--ヘッダー-->
        <header class="header">
          <div class="header-inner inner">
            <div class="inner float">
    <!--ヘッダー内のロゴ-->
              <div class="logo">
                <h1 class="header-title">
                  <a href="http://localhost:3000/">
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
              <!--検索機能-->
              <form id="form4" action="http://localhost:3000/" method="get">
              <input id="sbox4" name="s" type="text" v-model="searchText" placeholder="フリーワードを入力" />
              <button id="sbtn4" type="button" @click="searchRecipe">検索</button>
              </form>
              <!--メニュー一覧-->
              <nav class="header-nav">
                <ul class="header-nav-list">
                  <li class="header-nav-item"><a class="header-nav-item-link" href="#">カテゴリー</a></li>
                  <li class="header-nav-item"><a class="header-nav-item-link" href="#">オヌヌメ</a></li>
                  <li class="header-nav-item"><a class="header-nav-item-link" href="#">ニュース</a></li>
                  <li class="header-nav-item"><a class="header-nav-item-link" href="#">ブログ</a></li>
                  <li class="header-nav-item"><a class="header-nav-item-link" href="#">問い合わせ</a></li>
                </ul>
              </nav>
            </div>
          </header>
 
        <div class="relative">
          <!-- <div class="your-class"> -->
          <!--動画のslick再生-->
          <slick  :options="option">
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
        </div>
        
        <div>
          <img class="absolute" src="../assets/img/logo.png" />
          <div class="inner float">
            <div class="logo">
              <h1>
                <a href="http://localhost:3000/">
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
          <slick :options="option2" class="slider-for" ref="sliderFor">
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
          </slick>
        
      <!-- <slick :options="option3"> -->
        <slick :options="option3" class="slider-nav" ref="sliderNav">
          <div><img class="png_2" src="@/assets/img/どら焼き画像.png"><p class="p6">どら焼き</p></div>
          <div><img class="png_2" src="@/assets/img/おはぎ画像.png"><p class="p6">おはぎ</p></div>
          <div><img class="png_2" src="@/assets/img/わらび餅.png"><p class="p6">わらび餅</p></div>
          <div><img class="png_2" src="@/assets/img/アップルパイ.png"><p class="p6">アップルパイ</p></div>
          <div><img class="png_2" src="@/assets/img/カッサータ.png"><p class="p6">カッサータ</p></div>
          <div><img class="png_2" src="@/assets/img/チーズタルト.png"><p class="p6">チーズタルト</p></div>
          <div><img class="png_2" src="@/assets/img/抹茶カヌレ.png"><p class="p6">抹茶カヌレ</p></div>
        </slick>
    <ul>
      <li v-for="content in contents" :key="content.id">
        <nuxt-link :to="`/${content.id}`">
          {{ content.title }}
        </nuxt-link>
      </li>
    </ul>


    <!-- footer -->
         <footer>
          <ul class="footer-menu">
           <li>home</li>
           <li>about</li>
           <li>service</li>
           <li>Contact Us</li>
          </ul>
          <p>© All rights reserved by dmmwebcampmedia.</p>
        </footer>

    
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
    return{
      option: {
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        infinite: false,
        example: "test",
      },
      searchText: '',
      option2:{
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        // asNavFor: this.$refs.sliderNav
        asNavFor: '.slider-nav',
      },
      option3:{
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        // asNavFor: this.$refs.sliderFor,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      }
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

  methods:{
    execHideElement(selector){
      if(process.browser){
        const main = require('~/assets/js/main')

        main.hideElement(selector)
      }
    },
    searchRecipe() {
      console.log(this.searchText)
      // console.log(this.$params)
    },
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
