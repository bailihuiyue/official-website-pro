<template>
  <div class="ContactUs">
    <h1>{{lang.contactUs[$lang]}}</h1>
    <el-row :gutter="20">
      <el-col :span="isMobile?24:8" v-for="c in contactUsData.list">
        <el-card shadow="hover">
          <div slot="header">
            <span class="img">
              <img :src="c.img" />
            </span>
          </div>
          <div class="title">{{c.title[$lang]}}</div>
          <div class="desc">{{c.desc[$lang]}}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { contactUsData } from '@/utils/config'
import device from 'current-device'

export default {
  data() {
    return {
      contactUsData,
      isMobile: device.mobile(),
      lang: {
        contactUs: {
          cn: '联系我们',
          en: 'Contact Us'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.ContactUs {
  width: 80%;
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
      width: 350px;
      .title{
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
      }
    }
  }
}
.mobile {
  .ContactUs {
    .el-card {
      width: 80%;
    }
  }
}
</style>