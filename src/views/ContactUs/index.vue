<template>
  <div class="ContactUs">
    <h1>{{lang.contactUs[$lang]}}</h1>
    <el-row :gutter="20">
      <el-col :span="isMobile?24:8" v-for="c in contactUsData" :key="c.id">
        <el-card shadow="hover" @click.native="onClick(c.qrCode)">
          <div slot="header">
            <span class="img">
              <img :src="c.img" />
            </span>
          </div>
          <div class="title">{{c.title[$lang]}}</div>
          <div class="desc" :title="c.desc[$lang]">
            <el-link
              :href="c.desc[$lang]"
              v-if="c.desc[$lang].indexOf('http')>=0"
              target="_blank"
            >{{c.desc[$lang]}}</el-link>
            <span v-else>{{c.desc[$lang]}}</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <SubmitQuestion :isFAQ="false" />
    <el-dialog :visible.sync="dialogVisible" width="300px">
      <img :src="qrCode" style="width: 100%;" />
    </el-dialog>
  </div>
</template>
<script>
import { contactUsData } from '@/utils/config'
import device from 'current-device'
import SubmitQuestion from '@/components/SubmitQuestion'

export default {
  components: { SubmitQuestion },
  data() {
    return {
      dialogVisible: false,
      qrCode: '',
      contactUsData,
      isMobile: device.mobile(),
      lang: {
        contactUs: {
          cn: '联系我们',
          en: 'Contact Us'
        }
      }
    }
  },
  methods: {
    onClick(qrCode) {
      if (qrCode && this.$lang === 'cn') {
        this.qrCode = qrCode
        this.dialogVisible = true
      }
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.ContactUs {
  width: $contentWidth;
  margin: 0 auto;
  h1 {
    margin: 30px;
    text-align: center;
  }
  .el-col {
    text-align: center;
    .el-card {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 30px;
      width: 300px;
      .el-card__header {
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 18px;
        margin-bottom: 15px;
        font-weight: bold;
      }
      .desc {
        word-break: break-all;
        text-align: center;
        font-size: 14px;
        height: 65px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        overflow: hidden;
        white-space: pre-wrap;
      }
    }
  }
}
.mobile {
  .ContactUs {
    .el-card {
      width: $contentWidth;
    }
  }
}
</style>