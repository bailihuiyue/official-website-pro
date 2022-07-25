<template>
  <div class="companyHonor">
    <ButtonGroup
      :btns="companyHonorTypes"
      type="vertical"
      @click="onChangeTypes"
      defaultClickedBtn="medalOfHonour"
      :useLocalImg="true"
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
@import '~@/styles/color.scss';

.companyHonor {
  .carousel {
    width: $contentWidth;
    margin: 20px auto;
  }
}
.mobile {
  .companyHonor {
    .ButtonGroup {
      margin-bottom: 0;
    }
    .el-row {
      width: 90%;
      margin-left: auto;
      margin-right: auto;
    }
    .carousel {
      width: 100%;
      margin: 0;
    }
  }
}
</style>