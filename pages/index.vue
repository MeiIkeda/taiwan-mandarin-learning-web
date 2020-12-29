<template>
  <section>
    <Header
      :name="'index'"
    />
    <GoogleAds />
    <div class="main-image">
      <br>
      <div style="margin-left: auto; margin-right: auto">
        <ul class="pagination justify-content-center">
          <!--最初のページへ-->
          <div v-if="total_page>2">
            <li @click="requestPageData(1)" class="page-item">
              <a class="page-link" href="#">&lt;&lt;</a>
            </li>
          </div>

          <!--1つ前のページ群--><!--current_page_digit:0,10,20,30....-->
          <div v-if="current_page_digit>0">
            <li @click="requestPageData(current_page_digit - 9)" class="page-item">
              <a class="page-link" href="#">&lt;</a>
            </li>
          </div>
          <div v-if="current_page_digit>0">
            ...
          </div>

          <!--ページ番号-->
          <div v-for="index in Math.floor(showing_page_max_number)" :key="index">
            <li
              :class="{active: (index + current_page_digit) == current_page}"
              @click="requestPageData(index + current_page_digit)"
              class="page-item"
            >
              <a class="page-link" href="#">{{ index
                + current_page_digit }}</a>
            </li>
          </div>

          <!--1つ後のページ群-->
          <div v-if="(max_digit > current_page_digit) && !(current_page_digit + 10 == total_page)">
            ...
          </div>
          <div v-if="(max_digit > current_page_digit) && !(current_page_digit + 10 == total_page)">
            <li @click="requestPageData(current_page_digit + 11)" class="page-item">
              <a class="page-link" href="#">&gt;</a>
            </li>
          </div>

          <!--最後のページへ-->
          <div v-if="total_page>2">
            <li @click="requestPageData(total_page)" class="page-item">
              <a class="page-link" href="#">&gt;&gt;</a>
            </li>
          </div>
        </ul>
      </div>

      <!--font-weight: bold; #35495e darkolivegreen steelblue-->
      <div style="color: azure; text-shadow: 1px 1px 0 darkolivegreen; font-size: 20px">
        更新履歴
      </div>

      <div v-if="showErrorAlert">
        <b-alert v-model="showErrorAlert" style="color: azure; text-shadow: 1px 1px 0 darkolivegreen; background-color: transparent; border-color: transparent" variant="info">
          {{ error_message }}
        </b-alert>
      </div>
      <div v-else>
        <table class="table-bordered" style="margin-left: auto; margin-right: auto">
          <tbody style="align: center; text-align: left">
            <tr v-for="list in announcement" :key="list.id" style="white-space: nowrap; color: azure; text-shadow: 1px 1px 0 darkolivegreen">
              <td style="max-width:120px">
                {{ list.announcementDate }}
              </td> <td style="min-width:300px">
                {{ list.announcement }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="announcement.length === 9">
        <br><br>
      </div>
      <div v-if="announcement.length === 8">
        <br><br><br>
      </div>
      <div v-if="announcement.length === 7">
        <br><br><br><br>
      </div>
      <div v-if="announcement.length === 6">
        <br><br><br><br><br>
      </div>
      <div v-if="announcement.length === 5">
        <br><br><br><br><br><br>
      </div>
      <div v-if="announcement.length === 4">
        <br><br><br><br><br><br><br>
      </div>
      <div v-if="announcement.length === 3">
        <br><br><br><br><br><br><br><br>
      </div>
      <div v-if="announcement.length === 2">
        <br><br><br><br><br><br><br><br><br>
      </div>
      <div v-if="announcement.length === 1">
        <br><br><br><br><br><br><br><br><br><br>
      </div>
      <div v-if="announcement.length === 0">
        <br><br><br><br><br><br><br><br><br><br><br>
      </div>
      <br>
    </div>
    <br>
    <GoogleAds />
    <Footer
      :name="'index'"
    />
  </section>
</template>

<script>
import Header from './components/header'
import Footer from './components/footer'
import GoogleAds from './components/googleAdsHorizontal'
export default {
  components: {
    Header,
    Footer,
    GoogleAds
  },

  data () {
    return {
      total_page: '',
      current_page: 1,
      announcement: [],
      error_message: '',
      error_message_sentry: '',
      showErrorAlert: false
    }
  },

  computed: {
    // 現在のページ群
    current_page_digit () {
      return Math.floor((this.current_page - 1) / 10) * 10
    },
    // ページ群の最大値
    showing_page_max_number () {
      // 最後のページ
      if (Math.floor((this.current_page - 1) / 10) === Math.floor(this.total_page / 10)) {
        // console.log('showing_page_max_number=' + Math.floor(this.total_page % 10))
        return Math.floor(this.total_page % 10)
      } else {
        // console.log('showing_page_max_number=' + 10)
        return 10
      }
    },

    // 最後のページ群
    max_digit () {
      return Math.floor(this.total_page / 10) * 10
    }
  },

  watch: {
    level (val) {
      this.getData()
    }
  },

  mounted () {
    this.getData()
  },

  methods: {
    async getData () {
      const me = this
      const data = await this.$axios.$get(process.env.BASE_URL_API + '/api/v1/announcement/1', {
        headers: {
          'Access-Control-Allow-Origin': '*'
        },
        auth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD
        }
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data && error.response.data.message != null) {
            me.error_message = '更新情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '更新情報を取得できません。 しばらくしてからもう一度お試しください。' + error.response.data.message
          } else {
            me.error_message = '更新情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '更新情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          }
          // console.log('Error = ' + me.error_message_sentry)
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
          me.showErrorAlert = true
        } else {
          me.error_message = '更新情報を取得できません。 しばらくしてからもう一度お試しください。'
          me.error_message_sentry = '更新情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          // console.log('Error = ' + me.error_message_sentry)
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
          me.showErrorAlert = true
        }
      })
      if (data) {
        this.announcement = data.announcementDtoList
        this.current_page = data.current_page
        this.total_page = data.total_page
      }
    },

    async requestPageData (page) {
      console.log('page = ' + page)
      this.current_page = page

      const me = this
      this.search_list = []
      // リクエストパラメータにPageも付け加える、APIのパスは一時的なもの
      const data = await this.$axios.$get(process.env.BASE_URL_API + `/api/v1/announcement/${me.current_page}`, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data && error.response.data.message != null) {
            me.error_message = '更新情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '更新情報を取得できません。 しばらくしてからもう一度お試しください。' + error.response.data.message
          } else {
            me.error_message = '更新情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '更新情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          }
          console.log('Error = ' + me.error_message_sentry)
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
          me.showErrorAlert = true
        } else {
          me.error_message = '更新情報を取得できません。 しばらくしてからもう一度お試しください。'
          me.error_message_sentry = '更新情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          console.log('Error = ' + me.error_message_sentry)
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
          me.showErrorAlert = true
        }
      })
      if (data) {
        this.announcement = data.announcementDtoList
        this.current_page = data.current_page
        this.total_page = data.total_page
      }
    }
  },
  head () {
    return {
      title: 'ホーム home'
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

  //  @media screen and (min-width : 1024px)
  .main-image
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: center
    background-image: url('../static/img/temple2_3.jpg') !important
    width: 90%
    background-size: cover
    margin: 0 auto
    @media screen and (max-width : 767px)
      width: 100%
  /* じわっと画像が表示される */
  @keyframes fadeIn  /*上のbody内で呼び出しているアニメーションと名前をそろえる*/
    0% {opacity: 0} /* 始め */
    100% {opacity: 1} /* 終わり */
  /*古いブラウザ用*/
  @-webkit-keyframes fadeIn
    0% {opacity: 0}
    100% {opacity: 1}
</style>
