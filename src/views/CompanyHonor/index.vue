<template>
  <div class="companyHonor">
    <ButtonGroup
      :btns="companyHonorTypes"
      type="vertical"
      @click="onChangeTypes"
      :defaultClickedBtn="0"
    />
    <div class="carousel">
      <Carousel :carouselList="medalOfHonour" v-if="type==='medalOfHonour'" />
      <Carousel :carouselList="honorEvents" v-if="type==='honorEvents'" />
    </div>
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { companyHonorTypes } from '@/utils/config'
import { getCompanyHonorList } from './service'
import Carousel from '@/components/Carousel'

export default {
  name: 'companyHonor',
  components: {
    ButtonGroup,
    Carousel
  },
  data() {
    return {
      companyHonorTypes,
      medalOfHonour: [],
      honorEvents: [],
      type: 'medalOfHonour'
    }
  },
  created() {
    getCompanyHonorList(this.$lang).then((res) => {
      this.medalOfHonour = res.medalOfHonour
      this.honorEvents = res.honorEvents
    })
  },
  methods: {
    onChangeTypes(data) {
      this.type = data.id
    }
  }
}
</script>
<style lang="scss">
.companyHonor {
  .carousel {
    // width: 80%;
    // margin: 20px auto;
  }
}
.mobile {
  .ButtonGroup{
    margin-bottom: 0;
  }
  .companyHonor {
    .carousel {
      width: 100%;
      margin: 0;
    }
  }
}
</style>