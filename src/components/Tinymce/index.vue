<template>
  <div v-loading="loadingTiny">
    <div :class="{fullscreen:fullscreen}" :style="{width:containerWidth}" class="tinymce-container">
      <textarea :id="tinymceId" class="tinymce-textarea" />
    </div>
  </div>
</template>

<script>
import plugins from './plugins'
import toolbar from './toolbar'
// import load from './dynamicLoadScript'
// import { USER_INFO } from '@/store/mutation-types'
import { uploadImg, uploadFile } from './service'
import { createFormData } from '@/utils/utils'

// const tinymceCDN = 'https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js'

export default {
  name: 'Tinymce',
  props: {
    id: {
      type: String,
      default: function () {
        return (
          'vue-tinymce-' +
          +new Date() +
          ((Math.random() * 1000).toFixed(0) + '')
        )
      }
    },
    content: {
      type: String,
      default: ''
    },
    toolbar: {
      type: Array,
      required: false,
      default() {
        return []
      }
    },
    menubar: {
      type: [String, Boolean],
      default: 'file edit insert view format table'
    },
    height: {
      type: [Number, String],
      required: false,
      default: 360
    },
    width: {
      type: [Number, String],
      required: false,
      default: 'auto'
    }
  },
  data() {
    return {
      hasChange: false,
      hasInit: false,
      tinymceId: this.id,
      fullscreen: false,
      languageTypeList: {
        en: 'en',
        zh: 'zh_CN',
        es: 'es_MX',
        ja: 'ja'
      },
      loadingTiny: false,
      lang: {
        clickDownload: {
          cn: '点击下载',
          en: 'Click To Download'
        }
      }
      // userinfo: this.$ls.get(USER_INFO)
    }
  },
  computed: {
    containerWidth() {
      const width = this.width
      if (/^[\d]+(\.[\d]+)?$/.test(width)) {
        // matches `100`, `'100'`
        return `${width}px`
      }
      return width
    }
  },
  watch: {
    content(val) {
      if (!this.hasChange && this.hasInit) {
        this.$nextTick(() =>
          window.tinymce.get(this.tinymceId).setContent(val || '')
        )
      }
    }
  },
  mounted() {
    this.init()
  },
  activated() {
    if (window.tinymce) {
      this.initTinymce()
    }
  },
  deactivated() {
    this.destroyTinymce()
  },
  destroyed() {
    this.destroyTinymce()
  },
  methods: {
    init() {
      this.initTinymce()
      // // dynamic load tinymce from cdn
      // load(tinymceCDN, err => {
      //   if (err) {
      //     this.$message.error(err.message)
      //     return
      //   }
      //   this.initTinymce()
      // })
    },
    initTinymce() {
      const _this = this
      window.tinymce.init({
        branding: false,
        elementpath: false,
        selector: `#${this.tinymceId}`,
        language:
          this.languageTypeList[
            window.localStorage.getItem('lang') === 'en' ? 'en' : 'zh'
          ],
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        toolbar: this.toolbar.length > 0 ? this.toolbar : toolbar,
        menubar: this.menubar,
        plugins: plugins,
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        default_link_target: '_blank',
        link_title: false,
        nonbreaking_force_tab: true, // inserting nonbreaking space &nbsp; need Nonbreaking Space Plugin
        // images_upload_url: '/demo/upimg.php',
        init_instance_callback: (editor) => {
          _this.loadingTiny = false
          if (_this.content) {
            editor.setContent(_this.content)
          }
          _this.hasInit = true
          editor.on('NodeChange Change KeyUp SetContent', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent())
          })
        },
        setup(editor) {
          _this.loadingTiny = true
          editor.on('FullscreenStateChanged', (e) => {
            _this.fullscreen = e.state
          })
        },
        // it will try to keep these URLs intact
        // https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/
        // https://stackoverflow.com/questions/5196205/disable-tinymce-absolute-to-relative-url-conversions
        convert_urls: false,
        // 整合七牛上传
        // images_dataimg_filter(img) {
        //   setTimeout(() => {
        //     const $image = $(img);
        //     $image.removeAttr('width');
        //     $image.removeAttr('height');
        //     if ($image[0].height && $image[0].width) {
        //       $image.attr('data-wscntype', 'image');
        //       $image.attr('data-wscnh', $image[0].height);
        //       $image.attr('data-wscnw', $image[0].width);
        //       $image.addClass('wscnph');
        //     }
        //   }, 0);
        //   return img
        // },
        images_upload_handler: (blobInfo, success, failure, progress) => {
          progress(0)
          const self = this
          const blob = blobInfo.blob()
          if (blob.size > 50 * 1024 * 1024) {
            failure('图片过大,不要超过5mb')
            return false
          }
          const file = createFormData(null, blob)
          uploadImg(file)
            .then((res) => {
              if (res) {
                self.$message.success('上传成功!')
                self.imageSuccessCBK(this.$imgServer + res)
                success(null)
              } else {
                self.$message.error('上传失败!')
              }
              progress(100)
            })
            .catch((err) => {
              const error =
                err.response && err.response.data && err.response.data.enMsg
              progress(100)
              failure('上传失败!' + '\r\n' + error)
              console.log(err)
              return false
            })
        },
        file_picker_callback: (callback, value, meta) => {
          let accept = ''
          if (meta.filetype == 'image') {
            accept = '.jpg,.png,.webp'
          } else if (meta.filetype === 'media') {
            accept = '.mp4'
          } else if (meta.filetype == 'file') {
            accept = '.pdf'
          }
          const self = this
          // 动态创建上传input，并进行模拟点击上传操作，达到本地上传视频效果。
          let input = document.createElement('input') //创建一个隐藏的input
          input.setAttribute('type', 'file')
          input.setAttribute('accept', accept)
          input.onchange = function () {
            const file = createFormData(null, this.files[0])
            if (meta.filetype == 'image') {
              // 上传图片
              // const self = this
              // if (blob.size > 50 * 1024 * 1024) {
              //   failure('图片过大,不要超过5mb')
              //   return false
              // }
              uploadImg(file)
                .then((res) => {
                  if (res) {
                    // self.$message.success('上传成功!')
                    self.imageSuccessCBK(self.$imgServer + res)
                  } else {
                    self.$message.error('上传失败!')
                  }
                })
                .catch((err) => {
                  const error =
                    err.response && err.response.data && err.response.data.enMsg
                  self.$message.error('上传失败!' + '\r\n' + error)
                  console.log(err)
                  return false
                })
            } else {
              uploadFile(file)
                .then((res) => {
                  if (res) {
                    self.$message.success('上传成功!')
                    // 上传视频
                    if (meta.filetype === 'media') {
                      self.videoSuccessCBK(self.$videoURL + res)
                    } else if (meta.filetype == 'file') {
                      // 上传文件
                      // self.fileSuccessCBK(self.$baseURL + res)
                      callback(self.$baseURL + res, {
                        text: self.lang.clickDownload[self.$lang],
                        rel: ''
                      })
                    }
                  } else {
                    self.$message.error('上传失败!')
                  }
                })
                .catch((err) => {
                  const error =
                    err.response && err.response.data && err.response.data.enMsg
                  self.$message.error('上传失败!' + '\r\n' + error)
                  console.log(err)
                  return false
                })
            }
          }
          //触发点击
          input.click()
        }
      })
    },
    destroyTinymce() {
      const tinymce = window.tinymce.get(this.tinymceId)
      if (this.fullscreen) {
        tinymce.execCommand('mceFullScreen')
      }

      if (tinymce) {
        tinymce.destroy()
      }
    },
    setContent(content) {
      window.tinymce.get(this.tinymceId).setContent(content)
    },
    getContent() {
      return window.tinymce.get(this.tinymceId).getContent()
    },
    videoSuccessCBK(res) {
      window.tinymce
        .get(this.tinymceId)
        .insertContent(
          `<video class="tinyVideo" controls="controls"><source src="${res}" type="video/mp4" /></video>`
        )
    },
    fileSuccessCBK(res) {
      window.tinymce
        .get(this.tinymceId)
        .insertContent(
          `<a href="${res}" target="_blank" class="tinyLink">${
            this.lang.clickDownload[this.$lang]
          }<a/>`
        )
    },
    imageSuccessCBK(res) {
      window.tinymce
        .get(this.tinymceId)
        .insertContent(`<img class="tyinImg" style="width:100%" src="${res}" >`)
    }
  }
}
</script>

<style lang="scss">
.tinymce-container {
  position: relative;
  line-height: normal;
  min-height: 300px;
  .mce-path.mce-flow-layout-item.mce-first {
    display: none !important;
  }
  .mce-tinymce.mce-container.mce-panel {
    width: auto !important;
  }
  .tinyVideo {
    margin: 15px auto;
    width: auto;
    height: 300px;
    display: block;
  }
  // #tinymce {
  //   img {
  //     width: 100%;
  //   }
  // }
}
// .tinymce-container >>> .mce-fullscreen {
//   z-index: 10000;
// }
.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}
.editor-custom-btn-container {
  position: absolute;
  right: 4px;
  top: 4px;
  /*z-index: 2005;*/
}
.fullscreen .editor-custom-btn-container {
  z-index: 10000;
  position: fixed;
}
.editor-upload-btn {
  display: inline-block;
}
// .mce-tabs {
//   display: none !important;
// }

// .mce-container.mce-panel.mce-floatpanel.mce-window.mce-in {
//   .mce-container.mce-form.mce-abs-layout-item.mce-first {
//     display: none !important;
//   }
//   .mce-container.mce-form.mce-abs-layout-item.mce-last {
//     display: block !important;
//   }
//   .mce-container-body.mce-window-body.mce-abs-layout {
//     /* width: 600px; */
//   }
//   .mce-dropzone.mce-abs-layout-item.mce-last {
//     width: 400px;
//   }
// }
</style>
