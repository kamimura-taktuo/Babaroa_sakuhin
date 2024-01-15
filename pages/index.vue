
<template>
  <div>
    <!--ロード画面のロゴ-->
        <div id="splash">
        <div id="splash_logo">
              <img src="../assets/img/logo.png" alt="ロゴ" class="fadeUp">
        </div>
        </div>

      <header class="header">

        <search-form/>
        <!-- <div>
          読み込み
          
                <article v-for="post in posts" :key="post.id" style="margin-bottom:30px;" class="article">
                    ...省略
                </article>
            <index-pager :numPages="numPages" :current="current">
            </index-pager>
        </div> -->
        <!-- <div class="navtext-container">
          <form id="form4" @submit.prevent="submit">
                <input type="text" v-model="query" ref="searchForm" class="kennsaku_text">
                  <button class="search-btn" type="submit">
                    検索
                  </button>
        </form>
        </div> -->
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
                          <p class="p6">カロリー　500000kcal</p><br>
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
    <div>
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
        <li class="category_2" v-for="content in contents" :key="content.id">
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
          <!-- <ul class="footer-menu">
           <li>home</li>
           <li>about</li>
           <li>service</li>
           <li>Contact Us</li>
          </ul> -->

          <!-- <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <img src="@/assets/img/yt_icon_mono_dark.png" style="width:30px;">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-line"></i>
            </a>
          </li>       
        </ul> -->
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

    // submit() {
    //   if (this.canSubmit) {
    //     //検索が有効な場合に検索結果ページに遷移させる
    //     this.$router.push({
    //       path: '/search',
    //       query: {
    //         q: this.query
    //       }
    //     })
    //     this.query = ''
    //     this.$refs.searchForm.blur()
    //   }
    // }
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
  },

  // name: 'SearchForm',
  // computed: {
  //   // 検索キーワードが有効な場合にtrueを返す
  //   canSubmit() {
  //     return !!this.query && // キーワードがないとだめ
  //       !/^\s+$/.test(this.query) // 空白のみはだめ
  //   }
  // },
}
</script>

<style scoped>

form{
  margin-bottom: 3rem;
}

/* input[type=text] {
  font-size: 1.2rem;
  padding: 4px 8px;
  width: 245px;
  box-sizing: border-box;
  border-radius: 20px;
  border: solid 1px #ccc;
  background-color: #fff;
  font-family: "Ubuntu", "Noto Sans JP", sans-serif;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
} */

/* button {
  z-index: 1;
  height:39px;
  width:50px;	
  position:absolute; 
  left:200px; 
  top:0;
  background:#7fbfff;
  color:#ffffff;
  border:none;
  border-radius:0 25px 25px 0;
} */

</style>
