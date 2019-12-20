<template>
  <section class="container_vocabulary">
    <h1 class="title_vocabulary">
      台湾華語<br>taiwan_mandarin
    </h1>
    <div align="center" style="white-space: nowrap; vertical-align: top">
      <table>
        <tbody>
          <tr style="font-weight:300; font-size: 18px; text-align:center">
            <td>
              <nuxt-link :to="{ name: 'index' }">
                ホーム<br>home
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'about' }">
                サイト概要<br>about
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'bopomofo' }">
                ボポモフォ<br>bopomofo
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'vocabulary' }">
                中国語語彙<br>vocabulary
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'search' }">
                単語検索<br>search
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'contact' }" style="text-decoration: underline">
                お問い合わせ<br>contact
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>

    <!--<div style="color: #3b8070" align="center">
      Google アドセンス
    </div>-->

    <div class="main-image-contact">
      <br>

      <div v-if="showSuccessMessage">
        <b-alert v-model="showSuccessMessage" style="color: black; background-color: transparent; border-color: transparent" variant="info" dismissible>
          {{ success_message }}
        </b-alert>
      </div>
<!--      <div v-if="showErrorAlert">-->
<!--        <b-alert v-model="showErrorAlert" style="color: red; background-color: transparent; border-color: transparent" variant="info" dismissible>-->
<!--          {{ error_message }}-->
<!--        </b-alert>-->
<!--      </div>-->
      <div class="form-group">
        <label class="col-sm-3 control-label" style="text-shadow: 1px 1px 0 white">お名前(必須)</label>
        <div v-if="showErrorAlert_name" style="color: red">
          {{ error_message_name }}
        </div>
        <div class="col-sm-6" style="margin-left: auto; margin-right: auto">
          <input v-model="inputDto.name" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label" style="text-shadow: 1px 1px 0 white">会社・団体名</label>
        <div class="col-sm-6" style="margin-left: auto; margin-right: auto">
          <input v-model="inputDto.company" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label" style="text-shadow: 1px 1px 0 white">Email(必須)</label>
        <div v-if="showErrorAlert_email" style="color: red">
          {{ error_message_email }}
        </div>
        <div class="col-sm-6" style="margin-left: auto; margin-right: auto">
          <input v-model="inputDto.email" type="email" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label" style="text-shadow: 1px 1px 0 white">件名</label>
        <div class="col-sm-6" style="margin-left: auto; margin-right: auto">
          <input v-model="inputDto.title" type="text" class="form-control">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-3 control-label" style="text-shadow: 1px 1px 0 white">お問い合わせ内容(必須)</label>
        <div v-if="showErrorAlert_inquiry" style="color: red">
          {{ error_message_inquiry }}
        </div>
        <div class="col-sm-6" style="margin-left: auto; margin-right: auto">
          <textarea v-model="inputDto.inquiry" rows="7" class="form-control" />
        </div>
      </div>
      <div align="center">
        内容をお確かめの上、Send!ボタンを押して送信して下さい。
      </div>
      <div v-if="showErrorAlert">
        <b-alert v-model="showErrorAlert" style="color: red; background-color: transparent; border-color: transparent" variant="info" dismissible>
          {{ error_message }}
        </b-alert>
      </div>
      <br>
      <div align="center">
        <b-button @click="send" style="background-color: #f0f8ff; color: black">
          Send!
        </b-button>
      </div>
      <br>
    </div>

    <!--<div style="color: #3b8070" align="center">
      Google アドセンス
    </div>-->
  </section>
</template>

<script>
export default {
  data () {
    return {
      inputDto: {
        name: '',
        company: '',
        email: '',
        title: '',
        inquiry: ''
      },
      success_message: '',
      error_message: '',
      error_message_sentry: '',
      showSuccessMessage: false,
      showErrorAlert: false,
      showErrorAlert_name: false,
      showErrorAlert_email: false,
      showErrorAlert_inquiry: false,
      error_message_name: '',
      error_message_email: '',
      error_message_inquiry: ''
    }
  },

  methods: {
    async send () {
      let isError = false
      if (this.inputDto.name === '') {
        this.error_message_name = '※お名前を入力してください。'
        this.showErrorAlert_name = true
        isError = true
      } else {
        this.error_message_name = ''
        this.showErrorAlert_name = false
      }
      const emailRegExp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      if (this.inputDto.email === '' || !this.inputDto.email.match(emailRegExp)) {
        this.error_message_email = '※emailをご確認ください。'
        this.showErrorAlert_email = true
        isError = true
      } else {
        this.error_message_email = ''
        this.showErrorAlert_email = false
      }
      if (this.inputDto.inquiry === '') {
        this.error_message_inquiry = '※本文を入力して下さい。'
        this.showErrorAlert_inquiry = true
        isError = true
      } else if (this.inputDto.inquiry.length > 1200) {
        this.error_message_inquiry = '※本文は1000字までです。'
        this.showErrorAlert_inquiry = true
        isError = true
      } else {
        this.error_message_inquiry = ''
        this.showErrorAlert_inquiry = false
      }

      if (isError) {
        return
      }

      const me = this
      // console.log('this.inputDto = ' + JSON.stringify(this.inputDto))
      await this.$axios.$post(process.env.BASE_URL_API + '/api/v1/contact', this.inputDto, {
        headers: {
          'Access-Control-Allow-Origin': process.env.ACCESS_CONTROL_ORIGIN,
          'content-type': 'application/json',
          'charset': 'UTF-8'
        }
      }, {
        auth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD
        }
      }).then(function (response) {
        me.success_message = 'メッセージを送信しました。'
        me.showSuccessMessage = true
        me.inputDto = {}
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data && error.response.data.message != null) {
            me.error_message = 'メッセージを送信できませんでした。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = 'メッセージを送信できませんでした。 しばらくしてからもう一度お試しください。' + error.response.data.message
          } else {
            me.error_message = 'メッセージを送信できませんでした。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = 'メッセージを送信できませんでした。 しばらくしてからもう一度お試しください。' + error
          }
          // console.log('Error = ' + me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        } else {
          me.error_message = 'メッセージを送信できませんでした。しばらくしてからもう一度お試しください。'
          me.error_message_sentry = 'メッセージを送信できませんでした。しばらくしてからもう一度お試しください。' + error
          // console.log('Error = ' + me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        }
      })
    }
  }
}
</script>

<style lang="stylus">

  .title_vocabulary
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
      'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
    display: block
    font-weight: 300
    font-size: 50px
    text-align :center
    color: #35495e
    letter-spacing: 1px

  .subtitle_vocabulary
    font-weight: 300
    font-size: 20px
    align: center !important
    text-align :center
    color: #526488

  .container
    margin: auto
    min-height: 100vh
    display: flex
    justify-content: center
    align-items: center
    text-align: center

  .main-image-contact
    text-align: center
    background-image: url('../../static/img/temple4.jpg') !important
    width: 90%
    background-size: cover
    margin: 0 auto

</style>
