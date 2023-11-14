<template>
  <div>
    <TheHeader />

    <div></div>
<ul>
    <li v-for="content in contents" :key="content.id">
      <nuxt-link :to="`/${content.id}`">
        {{ content.title }}
      </nuxt-link>
    </li>
  </ul>
</template>
 
<script>
import axios from 'axios'
export default {
  async asyncData() {
    const { data } = await axios.get(
      // your-service-id部分は自分のサービスidに置き換えてください
      'https://tqeyp08sct.microcms.io/api/v1/blog',
      {
        // your-api-key部分は自分のapi-keyに置き換えてください
        headers: { 'X-MICROCMS-API-KEY': 'zGv5zVd3UZM28GwBgRXDtVva2jpx0AkyXnlo' }
      }
    )
    return data
  }
}
 
  // data() {
  //   return {
  //     example: "test",
  //   };
  // },
  // head() {
  //   return {
  //     title: "Bavarois",
  //     meta: [
  //       // hid is used as unique identifier. Do not use `vmid` for it as it will not work
  //       {
  //         hid: "description",
  //         name: "description",
  //         content: "My custom description",
  //       },
  //     ],
  //   };
  // },
  //};

 
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