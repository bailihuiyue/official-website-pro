<template>
  <div class="configGuide">
    <SeatchBar @onSearch="onSearch" />
    <ButtonGroup :btns="configGuide" type="horizontal" />
  </div>
</template>
<script>
import ButtonGroup from '@/components/ButtonGroup'
import { configGuide } from '@/utils/config'
import SeatchBar from '@/components/SeatchBar.vue'

export default {
  name: 'configGuide',
  components: {
    ButtonGroup,
    SeatchBar
  },
  data() {
    return {
      configGuide,
      searchTxt: ''
    }
  },
  methods: {
    onSearch(searchTxt) {
      this.searchTxt = searchTxt
    }
  }
}
</script>
<style lang="scss">
.configGuide {
}
</style>