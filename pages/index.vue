
<template>
  <div>
    <!--ロード画面のロゴ-->
        <div id="splash">
        <div id="splash_logo">
              <img src="../assets/img/logo.png" alt="ロゴ" class="fadeUp">
        </div>
        </div>

      <header class="header">
        
        <!--検索フォームの呼び出し-->
        <search-form/>
        
        <div class="logo">
                <h1 class="header-title">
                  <a href="/">
                    <img
                      src="../assets/img/logo.png"
                      alt="rogo"
                      width="65"
                      height="65"
                    />
                  </a>
                </h1>
              </div>

          <!--ハンバーガーメニュー-->
          <input type="checkbox" class="menu-btn" id="menu-btn">
          <label for="menu-btn" class="menu-icon">
            <span class="navicon">
            </span>
          </label>

          
          <ul class="menu" id="page-link">
            <li><a href="#area-1">おすすめ</a></li>
            <li><a href="#area-2">カテゴリー</a></li>
            <li><a href="#area-3">問い合わせ</a></li>
          </ul>

      </header>

        <div>
          <img class="absolute" src="../assets/img/logo.png" />
        
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
                    <source
                      src="/sasikomi.mp4"
                      type="Video/mp4"
                    />
                  </video>
                </div>
              </slick>
            </div>
        </div>
        
        <div>
          <img class="absolute" src="../assets/img/logo.png" />
        </div>
 
    <div style="text-align: center; margin: auto;" >
        <p class="title">~One step closer to fashion~</p>
        <p class=p1>大人なスイーツレシピ</p>
    </div>
 
    <!--おすすめスイーツ-->
    <section class="area" id="area-1">
    <div class="osusume">
        <p class ="p1_midasi">おすすめスイーツ</p>
          <slick :options="option2" class="slider-for" ref="sliderFor">
              <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%;"><a href="/recipe/t_c6b-tvw4"><img style="width: 75%;"  class="png_1" src="../assets/img/どら焼き画像.png"></a></div>
                        <div class="slide-item__text">
                          <p class="p6">どら焼き</p>
                          <p class="p6">製作時間　約50分</p>
                          <p class="p6">カロリー　354kcal</p><br>
                          <a href="/recipe/t_c6b-tvw4"><img src="../assets/img/こちらから.png" class="kotira"></a>
                        </div>
                    </div>
                </div>
                <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%;"><a href="/recipe/0f1jwlvszx"><img style="width: 75%;" class="png_1" src="@/assets/img/おはぎ画像.png"></a></div>
                        <div class="slide-item__text">
                          <p class="p6">おはぎ</p>
                          <p class="p6">製作時間　30分</p>
                          <p class="p6">カロリー　332kcal</p><br>
                          <a href="/recipe/0f1jwlvszx"><img src="../assets/img/こちらから.png" class="kotira"></a>
                        </div>
                  </div>
                </div>
                <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%; text-align: center;"><a href="/recipe/bf36imk134x"><img style="width: 75%;" class="png_1" src="@/assets/img/わらび餅.png"></a></div>
                      <div class="slide-item__text">
                        <p class="p6">わらび餅</p>
                        <p class="p6">製作時間　30分</p>
                        <p class="p6">カロリー　280kcal</p><br>
                        <a href="/recipe/bf36imk134x"><img src="../assets/img/こちらから.png" class="kotira"></a>
                      </div>
                  </div>
                </div>
                <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%;"><a href="/recipe/wtmwzn68w"><img style="width: 75%;" class="png_1" src="@/assets/img/アップルパイ.png"></a></div>
                        <div class="slide-item__text">
                          <p class="p6">アップルパイ</p>
                          <p class="p6">製作時間　30分</p>
                          <p class="p6">カロリー　304kcal</p><br>
                          <a href="/recipe/wtmwzn68w"><img src="../assets/img/こちらから.png" class="kotira"></a>
                        </div>
                  </div>
                </div>
                <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%;"><a href="/recipe/geb_65syw"><img style="width: 75%;" class="png_1" src="@/assets/img/カッサータ.png"></a></div>
                        <div class="slide-item__text">
                          <p class="p6">カッサータ</p>
                          <p class="p6">製作時間　30分</p>
                          <p class="p6">カロリー　245kcal</p><br>
                          <a href="/recipe/geb_65syw"><img src="../assets/img/こちらから.png" class="kotira"></a>
                        </div>
                  </div>
                </div>
                <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%;"><a href="/recipe/b60yrfq2n1"></a><img style="width: 75%;" class="png_1" src="@/assets/img/チーズタルト.png"></div>
                        <div class="slide-item__text">
                          <p class="p6">チーズタルト</p>
                          <p class="p6">製作時間　60分</p>
                          <p class="p6">カロリー　274kcal</p><br>
                          <a href="/recipe/b60yrfq2n1"><img src="../assets/img/こちらから.png" class="kotira"></a>
                        </div>
                  </div>
                </div>
                <div class="slider">
                  <div class="slide-item__wrapper2" style="display: flex;">
                      <div class="slide-item__img" style="flex: 0 0 50%;"><a href="/recipe/5eaytaast"><img style="width: 75%;" class="png_1" src="@/assets/img/抹茶カヌレ.png"></a></div>
                        <div class="slide-item__text">
                          <p class="p6">抹茶カヌレ</p>
                          <p class="p6">製作時間　1日</p>
                          <p class="p6">カロリー　208kcal</p><br>
                          <a href="/recipe/5eaytaast"><img src="../assets/img/こちらから.png" class="kotira"></a>
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
    </div>
    </section>

    <!--洋菓子・和菓子-->
    <section class="area" id="area-2">
      <p class="p1_midasi">カテゴリー</p>
    <div class="box zoomInTrigger">
      <div id="cards">
        <div class="card">
          <div class="picture">
            <a href="/category/r8t9nb4t3s/page/1">
              <img src="../assets/img/wagasi.png" />
            </a>
          </div>
        </div>
        <div class="card" id="card-center">
          <div class="picture">
            <a href="/category/2oqnz88qr/page/1">
              <img src="../assets/img/yougasi.png" />
            </a>
          </div>
        </div>
      </div>
    </div>

    <!--カテゴリーの表示-->
    <div class="category_hyouji">
      <p class="p1_midasi">イチオシカテゴリー</p>
          <ul class="category_1">
            <li class="delay-time04 box flipLeftTrigger" v-for="content in contents" :key="content.id">
              <nuxt-link :to="`category/${content.id}/page/1`">
                <img :src=content.category_img.url width="40%"><br>
                {{ content.category_name }}<br>
              </nuxt-link>
            </li>
          </ul>
      </div>
    </section>

  <!--問い合わせフォーム-->
  <section class="area" id="area-3">
  <section id="contact">
  
  <h1 class="section-header">Contact</h1>
  
  <div class="contact-wrapper">
  
  <!-- Left contact page --> 
    
    <form id="contact-form" class="form-horizontal" role="form">
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value="" required>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="" required>
        </div>
      </div>

      <div>
      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      </div>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <img src="@/assets/img/sousinn_buttom.png" style="width: 60px; height: 100%;">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
  </div>
  
  </section>
  </section>


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
import axios from 'axios';
/*import Logo from '~/components/Logo.vue'*/
import slick from 'vue-slick';

export default {
  components: {
    slick
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
      },
      query: '',
    }
    
  },
  async asyncData({ params }) {
    
    const { data } = await axios.get(
      `https://test1024.microcms.io/api/v1/categories?limit=12`,
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
        contents: "",
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
    /*検索キーワードの取得*/ 
    searchRecipe() {
      console.log(this.searchText)
      // console.log(this.$params)
    },

  },
  mounted() {
    // このページで動くスクリプト
    if(process.browser){
      // $(function () {
      //   $(window).on('load',function(){
          $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
          $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
      //   });
      // });
    }

    //メニュークリック時の動作
    $('#page-link a[href*="#"]').click(function () {
      var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
      var pos = $(elmHash).offset().top;  //idの上部の距離を取得
      $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
      return false;
    });

    document.querySelector('#contact-form').addEventListener('submit', (e) => {
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });


    //スクロールアニメーション
    function fadeAnime(){
      $('.flipLeftTrigger').each(function(){ //flipLeftTriggerというクラス名が
      var elemPos = $(this).offset().top-50;//要素より、50px上の
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('flipLeft');// 画面内に入ったらflipLeftというクラス名を追記
      }else{
      $(this).removeClass('flipLeft');// 画面外に出たらflipLeftというクラス名を外す
      }
      });

      $('.zoomInTrigger').each(function(){ //zoomInTriggerというクラス名が
        var elemPos = $(this).offset().top-50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('zoomIn');// 画面内に入ったらzoomInというクラス名を追記
        }else{
        $(this).removeClass('zoomIn');// 画面外に出たらzoomInというクラス名を外す
        }
      });
    }

    // 画面をスクロールをしたら動かしたい場合の記述
      $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
      });// ここまで画面をスクロールをしたら動かしたい場合の記述

    
  },
}
</script>

<style scoped>

form{
  margin-bottom: 3rem;
}
</style>
