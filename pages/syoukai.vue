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


    <!--私たちについて-->
    <p class="top_title">私たちについて</p>

    <!--メンバー紹介-->
    <p class="midasi_syoukai">メンバー紹介</p>
    <div class="menber_syoukai">
        <div class="team_member box blurTrigger">
            <img src="@/assets/img/プロフィール3.png">
            <div>
                <p class="member_name">SOMA</p>
                <p class="member_tag">リーダー</p>
                <p class="member_tag">好きなお菓子：キャラメルポップコーン</p>
            </div>
        </div>

        <div class="team_member box blurTrigger">
            <img src="@/assets/img/プロフィール２.png">
            <div>
                <p class="member_name">TAKUTO</p>
                <p class="member_tag">サブリーダー</p>
                <p class="member_tag">好きなお菓子：クラブジャム</p>
            </div>
        </div>

    </div>

    <!--ギャラリー-->
	<ul class="gallery">
        <li><a href="/recipe/b54zvgspd_ct" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/チョコレートケーキ.png" alt=""></a></li>
        <li><a href="/recipe/o95a73p_ri" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/イチゴタルト.png" alt=""></a></li>
        <li><a href="/recipe/0rkfpp1kqcmj" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/おしるこ.jpg" alt=""></a></li>
        <li><a href="/recipe/a_5pzumycx7" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/バスクチーズケーキ.png" alt=""></a></li>
        <li><a href="/recipe/w5bgfmjl6xqr" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/抹茶プリン.jpg" alt=""></a></li>
        <li><a href="/recipe/wg3_al4u-a_i" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/キャラメルポップコーン.png" alt=""></a></li>
    </ul>


    <!--ビィジョン-->
    <p class="midasi_syoukai">Vision</p>
    <div class="vision">
        <p class="vision_title">男性でも女性でも利用しやすいデザインのWebサイト</p>
        <p class="vision_naiyou">近年、料理をする人たちの割合は増え続けています。</p>
        <p class="vision_naiyou">その中でも2019年以降、世間では新型コロナウイルスが流行しお家にいる時間が増え、自炊をする人たちの割合も増えてきました。</p>
        <p class="vision_naiyou">そこで、私たちもなにか世の中の流れに沿ったサイトを作ってみたいと考えたのがきっかけです。</p>
        <p class="vision_naiyou">そして、私たちメンバー2人とも甘いものが好きということでお菓子のレシピサイトを作ろうと考えました。</p>
        <p class="vision_naiyou">こういった背景のもとこのサイトを活用していろんなお菓子作りに出会ってほしいです。</p>
    </div>

    <!--ギャラリー-->
	<ul class="gallery">
        <li><a href="/recipe/5eaytaast" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/抹茶カヌレ.png" alt=""></a></li>
        <li><a href="/recipe/1nkp7___0sy" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/リングドーナツ.png" alt=""></a></li>
        <li><a href="/recipe/0rkfpp1kqcmj" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/チョコレートムース.png" alt=""></a></li>
        <li><a href="/recipe/e39r85us80k" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/カステラ.png" alt=""></a></li>
        <li><a href="/recipe/bf36imk134x" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/わらび餅.png" alt=""></a></li>
        <li><a href="/recipe/2_3w4yjfl-f9" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="../assets/img/ティラミス.png" alt=""></a></li>
    </ul>

    <!--タイムライン-->
    <p class="midasi_syoukai">タイムライン</p>
    <div>
        <div class="cp_timeline04">
            <div class="timeline_item">
                <div class="time_date">
                    <p class="time">2022</p>
                    <p class="flag">Webサイト作成との出会い</p>
                </div>
                <div class="desc">
                    <p>Webサイト制作のゼミに所属</p>
                    <p>HTMLやCSS、JavaScriptの基本的な学習</p>
                </div>
            </div>

            <div class="timeline_item">
                <div class="time_date">
                    <p class="time">2023</p>
                    <p class="flag">卒業制作・前編</p>
                </div>
                <div class="desc">
                    <p>まずは、作品のテーマを決め実際にあるお菓子のレシピサイトの調査を行いました。</p>
                    <p>そこから要件定義書を作成し、レシピサイトのデザインを作成</p>
                    <p>デザインをもとにコーディングの作業、中間発表で出た課題のリストアップ</p>
                </div>
            </div>

            <div class="timeline_item">
                <div class="time_date">
                    <p class="time">2024</p>
                    <p class="flag">卒業制作・後編</p>
                </div>
                <div class="desc">
                    <p>中間発表で出た課題の追加・修正</p>
                    <p>作品発表に必要な資料作り</p>
                </div>
            </div>
        </div>
    </div>




    <!-- footer -->
    <div>
         <footer>
          <a href="/" class="footer_text">トップへ戻る</a>
          <p>© All rights reserved by dmmwebcampmedia.</p>
        </footer>
    </div>

</div>
</template>


<script>
export default{
mounted(){
function fadeAnime(){
// flipLeft
$('.gallery li').each(function(){ 
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
        $(this).addClass('flipLeft');
    }else{
        $(this).removeClass('flipLeft');
    }
});

$('.blurTrigger').each(function(){ //blurTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    }else{
    $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
    }
    }); 
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述

  // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
}

}
</script>


<style>
.top_title{
    font-family: "titlefont", sans-serif;
    padding: 70px 0 50px 0;
    color: #fff;
    text-align: center;
    font-size: 7vw;
    /* font-weight: bold; */
}

.midasi_syoukai{
    padding: 0 0 0 54px;
    font-size: 5vw;
    color: #fff;
    font-family: "myfont", sans-serif;
}

.menber_syoukai{
    height: 40%;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
}

.menber_syoukai img{
    width: 50%;
    /* height: 150px; */
    border-radius: 50%;
}
.team_member{
    text-align: center;
    padding: 0 5%;
}

.member_name{
    font-size: 1.5vw;
    font-weight: bold;
    color: #fff;
}

.member_tag{
    font-size: 1.2vw;
    color: #fff;
}

/*タイムライン*/
.cp_timeline04 {
	position: relative;
	margin: 3em 30px;
	padding-bottom: 2em;
}
.cp_timeline04:before {
	position: absolute;
	top: 0px;
	left: 45px;
	width: 3px;
	height: 100%;
	content: '';
	background: #ffffff;
}
.cp_timeline04 .timeline_item {
	margin: 0px 0px 0px 80px;
}
.cp_timeline04 .timeline_item .time_date .time {
	font-family: serif;
	font-size: 6em;
	font-weight: bold;
	position: relative;
	margin: 0;
	letter-spacing: 3px;
	color: rgba(255, 255, 255, 0.403);
}
.cp_timeline04 .timeline_item .time_date .time:before {
	position: absolute;
	top: 50%;
	left: -42px;
	width: 10px;
	height: 10px;
	content: '';
	-webkit-transform: rotate(45deg);
	        transform: rotate(45deg);
	border: 3px solid #ffffff;
	background: #000000;
}
.cp_timeline04 .timeline_item .time_date .flag {
	font-size: 1.5em;
	font-weight: bold;
	margin: 0;
	margin-top: -60px;
	color: #d6d6d6;
}
.cp_timeline04 .timeline_item .desc {
    color: #fff;
	font-size: 0.8em;
	line-height: 20px;
	margin-top: 10px;
	padding-left: 20px;
	border-left: 1px solid #ffffff;
}
@media only screen and (max-width: 767px) {
	.cp_timeline04:before {
		left: 15px;
	}
	.cp_timeline04 .timeline_item .time_date .time:before {
		left: -32px;
	}
	.cp_timeline04 .timeline_item {
		margin: 0px 0px 0px 40px;
	}
	.cp_timeline04 .timeline_item .desc {
		padding-left: 0px;
		border-top: 1px solid #ffffff;
		border-left: none;
	}
}

/*==================================================
ギャラリーのためのcss
===================================*/
.gallery{
columns: 4;/*段組みの数*/
padding:15% 15px;/*ギャラリー左右に余白をつける*/
}

.gallery li {
    margin-bottom: 20px;/*各画像下に余白をつける*/
}

/*ギャラリー内のイメージは横幅100%にする*/
.gallery img{
  width:100%;
  height:auto;
  vertical-align: bottom;/*画像の下にできる余白を削除*/}

/*　横幅900px以下の段組み設定　*/
@media only screen and (max-width: 900px) {
  .gallery{
  columns:3;
  } 
}

@media only screen and (max-width: 768px) {
  .gallery{
  columns: 2;
  } 
}


/*========= レイアウトのためのCSS ===============*/

ul{
  margin:0;
  padding: 0;
  list-style: none;
}

a{
  color: #333;
}

a:hover,
a:active{
  text-decoration: none;
}

h1{
  text-align: center;
  font-size:6vw;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin:30px 0;
}

p{
  margin:0 10px 10px 10px;
  word-wrap : break-word;
}

/*画像を出現させるアニメーションCSS*/

.flipLeft{
animation-name: flipLeft;
animation-duration:0.5s;
animation-fill-mode:forwards;
perspective-origin: left center;
opacity: 0;
}

@keyframes flipLeft{
  from {
   transform: perspective(600px) translate3d(0, 0, 0) rotateY(30deg);
  opacity: 0;
  }

  to {
  transform: perspective(600px) translate3d(0, 0, 0) rotateY(0deg);
  opacity: 1;
  }
}

.vision{
    text-align: center;
}
.vision_title{
    color: #fff;
    font-size: 2vw;
    font-weight: bold;
    
}
.vision_naiyou{
    color: #fff;
    font-size: 1.5vw;
}

/* ぼかしから出現 */
.blur{
  animation-name:blurAnime;
  animation-duration:2.5s;
  animation-fill-mode:forwards;
}

@keyframes blurAnime{
  from {
  filter: blur(10px);
  transform: scale(1.02);
  opacity: 0;
  }

  to {
  filter: blur(0);
  transform: scale(1);
  opacity: 1;
  }
}
</style>