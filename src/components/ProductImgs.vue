<template>
  <div class="productImgs">
    <a :href="'#'+item.href" v-for="item in productImgs" :key="item.img">
      <img :src="$imgServer+item.img" class="img" />
    </a>
  </div>
</template>
<script>
export default {
  name: 'productImgs',
  props: ['productImgs'],
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.productImgs {
  a {
    display: block;
    overflow: hidden;
    .img {
      max-width: 100%;
      max-height: 100%;
      display: block;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>