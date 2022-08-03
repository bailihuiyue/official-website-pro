<template>
  <div v-loading="loadingTiny" class="tinyEditor">
    <div :class="{fullscreen:fullscreen}" :style="{width:containerWidth}" class="tinymce-container">
      <textarea :id="tinymceId" class="tinymce-textarea" />
    </div>
    <div class="tinyUploadLoading" v-if="loading">
      <img src="imgs/loading.gif" />
      <div>上传中...</div>
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
      },
      loading: false
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
        media_live_embeds: true,
        branding: false,
        elementpath: false,
        selector: `#${this.tinymceId}`,
        language:'zh_CN',
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
        // 图片默认class名
        // image_class_list: [
        //   { title: 'tinyImg', value: 'tinyImg' }
        // ],
        // 可覆盖tiny的css样式,只是控制在tiny中的显示样式,实际style不会保存起来
        content_style: "img.mce-object.mce-object-video{background-image: url('/imgs/video/tinyPlay.png');background-size: 30%;background-color: #000000;border: 2px dashed #0094ff;outline: none;border-radius: 5px;}",
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
        convert_urls: false,
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
          //触发点击
          input.click()
          input.onchange = function () {
            const file = createFormData(null, this.files[0])
            if (meta.filetype == 'image') {
              // 上传图片
              // const self = this
              // if (blob.size > 50 * 1024 * 1024) {
              //   failure('图片过大,不要超过5mb')
              //   return false
              // }
              self.loading = true
              uploadImg(file)
                .then((res) => {
                  if (res) {
                    // self.$message.success('上传成功!')
                    self.imageSuccessCBK(self.$imgServer + res)
                    // // TODO:靠 { width: '100%' }设置宽高
                    // callback(self.$imgServer + res, { width: '100%' })
                  } else {
                    self.$message.error('上传失败!')
                  }
                  self.loading = false
                })
                .catch((err) => {
                  self.loading = false
                  const error =
                    err.response && err.response.data && err.response.data.enMsg
                  self.$message.error('上传失败!' + '\r\n' + error)
                  console.log(err)
                  return false
                })
            } else {
              self.loading = true
              uploadFile(file)
                .then((res) => {
                  if (res) {
                    self.$message.success('上传成功!')
                    // 上传视频
                    if (meta.filetype === 'media') {
                      // self.videoSuccessCBK(self.$videoURL + res)
                      callback(self.$videoURL + res)
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
                  self.loading = false
                })
                .catch((err) => {
                  const error =
                    err.response && err.response.data && err.response.data.enMsg
                  self.$message.error('上传失败!' + '\r\n' + error)
                  console.log(err)
                  self.loading = false
                  return false
                })
            }
          }
        }
        // video_template_callback: function (data) {
        //   debugger
        //   return (
        //     `<span
        //     class="mce-preview-object mce-object-video"
        //     contenteditable="false"
        //     data-mce-object="video"
        //     data-mce-p-allowfullscreen="allowfullscreen"
        //     data-mce-p-frameborder="no"
        //     data-mce-p-scrolling="no"
        //     data-mce-p-src=${data.source1}
        //     data-mce-p-width=${data.width}
        //     data-mce-p-height=${data.height}
        //     data-mce-p-controls="controls">
        //       <video width=${data.width} height=${data.height} controls="controls">
        //         <source src=${data.source1} type=${data.sourcemime}> </source>
        //       </video>
        //     </span>`
        //   )
        // }
        // media_url_resolver: function (data, resolve) {
        //   try {
        //     let embedHtml = `
        //          <div
        //         data-mce-object="video"
        //         data-mce-p-src=${data.url} >
        //         <video class="tinyVideo" controls="controls" width="" height="">
        //         <source src="${data.url}" type="video/mp4" />
        //         </video>
        //       </div>`
        //     resolve({ html: embedHtml })
        //   } catch (e) {
        //     resolve({ html: '' })
        //   }
        // }
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
        .insertContent(`<img class="tinyImg" style="width:100%" src="${res}" >`)
    }
  }
}
</script>

<style lang="scss">
.tinyEditor {
  .tinyUploadLoading {
    position: absolute;
    top: 120px;
    left: 25%;
    z-index: 999999999;
  }
}
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
// .mce-container.mce-panel.mce-floatpanel.mce-window.mce-in {
//   width: 80% !important;
//   left: 50% !important;
//   top: 100px !important;
//   transform: translate(-50%, 0);
//   .mce-container-body.mce-window-body.mce-abs-layout {
//     width: 100% !important;
//   }
// }
</style>
