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

    <TheFooter />
  </div>
  
</template>

<script>
import axios from 'axios'
/*import Logo from '~/components/Logo.vue'*/

export default {
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
  }
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