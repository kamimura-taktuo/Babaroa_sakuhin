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
    <!--タイムライン-->
    <p class="midasi_syoukai">タイムライン</p>
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
</style>