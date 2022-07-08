<template>
  <div class="SubmitQuestion">
    <div class="isPC" v-if="!isMobile" @click="showSubmitForm=true">
      <img src="imgs/headset.svg" />
      <div class="submitFAQTxt">{{lang[isFAQ?'submitFAQTxt':'messageFeedbackTxt'][$lang]}}</div>
    </div>
    <div v-else style="margin:20px 0;text-align:center">
      <el-button
        size="small"
        type="info"
        plain
        @click="showSubmitForm=true"
      >{{lang['submitFAQTxt'][$lang]}}</el-button>
    </div>
    <el-dialog
      :close-on-click-modal="false"
      :title="lang.dialog[isFAQ?'submitFAQTitle':'messageFeedbackTitle'][$lang]"
      :visible.sync="showSubmitForm"
      :width="isMobile?'100%':'500px'"
      @open="onOpen"
    >
      <!-- FAQ的表单列表 -->
      <el-form v-if="isFAQ" :model="formData" label-position="right" :rules="FAQRules" ref="form">
        <el-form-item :label="lang.dialog.name[$lang]" :label-width="formLabelWidth" prop="name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="lang.dialog.phone[$lang]" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="formData.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="lang.dialog.email[$lang]" :label-width="formLabelWidth">
          <el-input v-model="formData.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="lang.dialog.title[$lang]" :label-width="formLabelWidth">
          <el-input v-model="formData.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="lang.dialog.productName[$lang]"
          :label-width="formLabelWidth"
          prop="productName"
        >
          <el-input v-model="formData.productName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="lang.dialog.detail[$lang]"
          :label-width="formLabelWidth"
          prop="detail"
        >
          <el-input v-model="formData.detail" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item style="text-align: right;">
          <el-button @click="onCancel">{{lang.dialog.cancel[$lang]}}</el-button>
          <el-button type="primary" @click="onSubmit">{{lang.dialog.submit[$lang]}}</el-button>
        </el-form-item>
      </el-form>
      <!-- 留言反馈的表单列表 -->
      <el-form v-else :model="formData" label-position="right" :rules="feedBackRules" ref="form">
        <el-form-item :label="lang.dialog.name[$lang]" :label-width="formLabelWidth" prop="name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="lang.dialog.companyName[$lang]"
          :label-width="formLabelWidth"
          prop="companyName"
        >
          <el-input v-model="formData.companyName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="lang.dialog.companyAddress[$lang]"
          :label-width="formLabelWidth"
          prop="companyAddress"
        >
          <el-input v-model="formData.companyAddress" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="lang.dialog.phone[$lang]" :label-width="formLabelWidth" prop="phone">
          <el-input v-model="formData.phone" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item :label="lang.dialog.email[$lang]" :label-width="formLabelWidth" prop="email">
          <el-input v-model="formData.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          :label="lang.dialog.detail[$lang]"
          :label-width="formLabelWidth"
          prop="detail"
        >
          <el-input v-model="formData.detail" type="textarea" :rows="5"></el-input>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item style="text-align: right;">
          <el-button @click="onCancel">{{lang.dialog.cancel[$lang]}}</el-button>
          <el-button type="primary" @click="onSubmit">{{lang.dialog.submit[$lang]}}</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import device from 'current-device'
import { addQuestion } from './service'
import { questionTypes } from '@/utils/config'

const requiredTxt = {
  cn: '该内容必须填写',
  en: 'The field is required'
}

export default {
  props: ['isFAQ'],
  name: 'submitQuestion',
  data() {
    return {
      showSubmitForm: false,
      isMobile: device.mobile(),
      formLabelWidth: '130px',
      lang: {
        submitFAQTxt: {
          en: 'Submit FAQ',
          cn: '提交问题'
        },
        messageFeedbackTxt: {
          cn: '留言反馈',
          en: 'Message Feedback'
        },
        dialog: {
          submitFAQTitle: {
            cn: '提交问题',
            en: 'Submit Question'
          },
          messageFeedbackTitle: {
            cn: '留言反馈',
            en: 'Message Feedback'
          },
          name: {
            cn: '你的名字',
            en: 'Your Name'
          },
          phone: {
            cn: '联系方式',
            en: 'Phone No'
          },
          email: {
            cn: '邮箱',
            en: 'Email'
          },
          title: {
            cn: '问题简介',
            en: 'Question Desc'
          },
          productName: {
            cn: '产品名称',
            en: 'Product Name'
          },
          detail: {
            cn: '详细问题介绍',
            en: 'Question Detail'
          },
          companyAddress: {
            cn: '公司地址',
            en: 'Company address'
          },
          companyName: {
            cn: '公司名称',
            en: 'Company name'
          },
          submit: {
            cn: '提交',
            en: 'Submit'
          },
          cancel: {
            cn: '取消',
            en: 'Cancel'
          }
        },
        submitFeedback: {
          cn: '提交成功',
          en: 'Success!'
        }
      },
      formData: {
        name: '',
        phone: '',
        email: '',
        title: '',
        productName: '',
        detail: '',
        companyAddress: '',
        companyName: ''
      },
      FAQRules: {
        name: [{ required: true, message: requiredTxt[this.$lang] }],
        phone: [{ required: true, message: requiredTxt[this.$lang] }],
        productName: [{ required: true, message: requiredTxt[this.$lang] }],
        detail: [{ required: true, message: requiredTxt[this.$lang] }]
      },
      feedBackRules: {
        name: [{ required: true, message: requiredTxt[this.$lang] }],
        phone: [{ required: true, message: requiredTxt[this.$lang] }],
        email: [{ required: true, message: requiredTxt[this.$lang] }],
        detail: [{ required: true, message: requiredTxt[this.$lang] }]
      }
    }
  },
  methods: {
    onOpen() {
      this.formData = {
        name: undefined,
        phone: undefined,
        email: undefined,
        title: undefined,
        productName: undefined,
        detail: undefined,
        companyAddress: undefined,
        companyName: undefined
      }
    },
    onCancel() {
      this.showSubmitForm = false
    },
    onSubmit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.formData)
          addQuestion(
            this.$lang,
            questionTypes[this.isFAQ ? 'faq' : 'messageFeedback'],
            this.formData
          ).then((res) => {
            if (res) {
              this.showSubmitForm = false
              this.$message.success(this.lang.submitFeedback[this.$lang])
              this.formData = {
                name: undefined,
                phone: undefined,
                email: undefined,
                title: undefined,
                productName: undefined,
                detail: undefined,
                companyAddress: undefined,
                companyName: undefined
              }
            }
          })
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '~@/styles/color.scss';

.SubmitQuestion {
  .isPC {
    width: 60px;
    height: 90px;
    position: fixed;
    right: 12px;
    bottom: 300px;
    cursor: pointer;
    text-align: center;
    img {
      width: 50px;
      height: 50px;
    }
    .submitFAQTxt {
      font-size: 12px;
    }
    &:hover {
      // background-color: $blackBackgroundColor;
      background-color: rgba(0, 0, 0, 0.03);
      border-radius: 10px;
      color: $themeColor !important;
    }
  }
}
</style>