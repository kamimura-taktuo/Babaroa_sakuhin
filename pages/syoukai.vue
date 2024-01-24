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
        <div class="team_member">
            <img src="@/assets/img/アップルパイ.png">
            <div>
                <p class="member_name">SOMA</p>
                <p class="member_tag">リーダー</p>
            </div>
        </div>

        <div class="team_member">
            <img src="@/assets/img/アップルパイ.png">
            <div>
                <p class="member_name">TAKUTO</p>
                <p class="member_tag">サブリーダー</p>
            </div>
        </div>

    </div>

    <!--ギャラリー-->
	<ul class="gallery">
        <li><a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/01.jpg" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/01.jpg" alt=""></a></li>
        <li><a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/02.jpg" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/02.jpg" alt=""></a></li>
        <li><a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/03.jpg" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/03.jpg" alt=""></a></li>
        <li><a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/04.jpg" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/04.jpg" alt=""></a></li>
        <li><a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/05.jpg" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/05.jpg" alt=""></a></li>
        <li><a href="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/06.jpg" data-lightbox="gallery1" data-title="グループ1キャプション"><img src="https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/6-2-1/img/06.jpg" alt=""></a></li>
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
                    <p>1年生の時にWebサイト制作に所属し、HTMLやCSS、JavaScriptの基本的な学習を進めてきました。</p>
                </div>
            </div>

            <div class="timeline_item">
                <div class="time_date">
                    <p class="time">2023</p>
                    <p class="flag">卒業制作の目的と背景</p>
                </div>
                <div class="desc">
                    <p>このサイトの目的は、男性でも女性でも利用しやすいようなデザインのサイトにすることです。</p>
                    <p>その背景として、当時世の中では新型コロナウイルスが、流行っておりおうちにいる時間が増えることで料理をする人も増えてきました。</p>
                    <p>そこで、今まで見たことのないようなデザインのレシピサイトを作ってみたいという思いでこのサイトの作成に至りました。</p>
                </div>
            </div>

            <div class="timeline_item">
                <div class="time_date">
                    <p class="time">2024</p>
                    <p class="flag">作品制作について</p>
                </div>
                <div class="desc">
                    <p>作品の開発をしていく中で、１年生の時に学習した基礎的な知識だけでは足りず、わからないところは調べときには先生に質問し、知識と経験を深めていきました。</p>
                    <p>できなかったことができるようになったときの達成感やWebサイト制作の楽しさを感じたことでこのサイトを完成させることができました。</p>
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
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述
}

}
</script>


<style>
.top_title{
    padding: 70px 0 50px 0;
    color: #fff;
    text-align: center;
    font-size: 5vw;
}

.midasi_syoukai{
    padding: 0 0 0 20px;
    font-size: 3vw;
    color: #fff;
}

.menber_syoukai{
    height: 40%;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    align-items: center;
}

.menber_syoukai img{
    width: 64px;
    height: 64px;
}
.team_member{
    text-align: center;
    padding: 0 5%;
}

.member_name{
    color: #fff;
}

.member_tag{
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

</style>