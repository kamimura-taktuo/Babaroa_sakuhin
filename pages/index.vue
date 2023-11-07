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

export default {
  async asyncData() {
    const { data } = await axios.get(
      `https://test1024.microcms.io/api/v1/menu`,
      {
        headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' }
      }
    )
    return data
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
    }
}
</script>