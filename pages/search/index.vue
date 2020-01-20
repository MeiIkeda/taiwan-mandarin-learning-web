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
              <nuxt-link :to="{ name: 'search' }" style="text-decoration: underline">
                単語検索<br>search
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <!--    <head>-->
    <!--      <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />-->
    <!--      <title />-->
    <!--    </head>-->
    <!--
    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    -->
    <div class="main-image-search">
      <br>
      <div>単語を入力して下さい</div>
      <input v-model="searchWord" type="text">
      <br><br>
      <div align="center">
        <div>
          <b-button @click="getData" style="background-color: #f0f8ff; color: black">
            Search!
          </b-button>
        </div>
        <br>
      </div>

      <b-alert v-model="showErrorAlert" style="color: red; background-color: transparent; border-color: transparent" variant="info">
        {{ error_message }}
      </b-alert>

      <div class="body_search">
        <!--ページネーション-->
        <div class="text-center">
          <!--開始-->
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
                @click="requestPageData(index + current_page_digit)"
                :class="{active: (index + current_page_digit) == current_page}"
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

        <!--終了-->
        <table class="main_table_search table-bordered">
          <tbody>
            <tr v-if="wordsToShow.length != 0">
              <th>Traditional</th><th>Simplified</th><th>Pinyin</th><th>Bopomofo</th><th>Meaning</th>
            </tr>
            <tr :key="list.id" v-for="list in wordsToShow" style="color: #47494e">
              <td>
                <b-button @click="speak(list.bopomofo)" style="background-color: #f0f8ff; color: black">
                  {{ list.traditional }}
                </b-button>
              </td>
              <td>{{ list.simplified }}</td>
              <td>{{ list.pinyin }}</td>
              <td>{{ list.bopomofo }}</td>
              <td>{{ list.meaning }}</td>
            </tr>
          </tbody>
        </table>

        <div v-if="wordsToShow.length === 9">
          <br><br>
        </div>
        <div v-if="wordsToShow.length === 8">
          <br><br><br>
        </div>
        <div v-if="wordsToShow.length === 7">
          <br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 6">
          <br><br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 5">
          <br><br><br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 4">
          <br><br><br><br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 3">
          <br><br><br><br><br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 2">
          <br><br><br><br><br><br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 1">
          <br><br><br><br><br><br><br><br><br><br>
        </div>
        <div v-if="wordsToShow.length === 0">
          <br><br><br><br><br><br><br><br><br><br><br>
        </div>
        <br>
      </div>
    </div>
    <br>
    <div align="center">
      <div class="text-itself-search">
        <p>
          単語検索ページです。検索したい文字を入力し、「Search!」ボタンを押してください。<br>
          入力文字列に対して、繁体字/簡体字/意味のいずれかに該当する文字列があった場合、検索結果が返されます。<br>
          検索結果の繁体字ボタン部分を押すと、発音を聞くことができます。<br>
        </p>
        <p style="color: red;">
          ※音声再生に関して：お使いのブラウザやバージョンによっては、音声再生に対応していない場合があります。
          詳しくは
          <nuxt-link :to="{ name: 'faq' }">
            FAQページ
          </nuxt-link>
          をご覧ください。<br>
        </p>
      </div>
    </div>
    <!--    <head>-->
    <!--      <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />-->
    <!--      <title />-->
    <!--    </head>-->
    <!--
    <div style="color: #3b8070" align="center">
      スポンサーリンク
    </div>
    <script data-ad-client="ca-pub-9333963654003765" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
    -->
    <br>
    <div align="center" style="white-space: nowrap; vertical-align: top">
      <table>
        <tbody>
          <tr style="font-weight:300; font-size: 16px; text-align:center">
            <td>
              <nuxt-link :to="{ name: 'privacypolicy' }">
                プライバシー＆ポリシー<br>privacy&policy
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td /><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'faq' }">
                よくあるご質問<br>FAQ
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td /><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'contact' }">
                お問い合わせ<br>contact
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
  </section>
</template>

<script>
import MySpeechSynthesis from '../../plugins/mySpeechSynthesis.js'
export default {
  component: {
    MySpeechSynthesis
  },
  head () {
    return {
      title: '台湾華語 taiwan-mandarin/search'
      // script: [
      //   { 'data-ad-client': process.env.GA_ADSENSE_ID }
      // ]
    }
  },

  data () {
    return {
      searchWord: '',
      words: [],
      wordsToShow: [],
      showErrorAlert: false,
      error_message: '',
      error_message_sentry: '',
      total_page: '',
      current_page: 1,
      pageUnit: 10
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
        return Math.floor(this.total_page % 10)
      } else {
        return 10
      }
    },

    // 最後のページ群
    max_digit () {
      return Math.floor(this.total_page / 10) * 10
    }
  },

  methods: {
    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time))
    },
    requestPageData (page) {
      this.wordsToShow = this.words.slice(page * 10 - 10, page * 10)
      this.current_page = page
    },
    async getData () {
      this.showErrorAlert = false
      this.total_page = ''
      this.current_page = 1
      this.words = []
      this.wordsToShow = []
      this.error_message = ''
      this.error_message_sentry = ''
      const me = this
      const data = await this.$axios.$get(process.env.BASE_URL_API + '/api/v1/vocabulary/search/' + this.searchWord, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'charset': 'UTF-8'
        },
        auth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD
        }
      }).catch(function (error) {
        if (error.response) {
          if (error.response.status === 404) {
            me.error_message = '該当する項目は見つかりませんでした。'
            me.error_message_sentry = '該当する項目は見つかりませんでした。' + error.response.data.message
          } else if (error.response.data && error.response.data.message != null) {
            me.error_message = '検索情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '検索情報を取得できません。 しばらくしてからもう一度お試しください。' + error.response.data.message
          } else {
            me.error_message = '検索情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '検索情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          }
          // console.log('Error = ' + me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        } else {
          me.error_message = '検索情報を取得できません。 しばらくしてからもう一度お試しください。'
          me.error_message_sentry = '検索情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          // console.log('Error = ' + me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        }
      })
      if (data) {
        this.words = data
        this.wordsToShow = this.words.slice(0, this.pageUnit)
        if (this.words.length % this.pageUnit === 0) {
          this.total_page = parseInt(this.words.length / this.pageUnit)
        } else {
          this.total_page = parseInt(this.words.length / this.pageUnit) + 1
        }
      }
    },

    async speak (word) {
      let count = 0
      let voices = MySpeechSynthesis.methods.loadVoices()
      while (voices == null || voices.length === 0) {
        await this.sleep(1000)
        voices = MySpeechSynthesis.methods.loadVoices()
        count++
        if (count > 10) {
          break
        }
      }
      this.showErrorAlert = false
      const message = MySpeechSynthesis.methods.mySpeak(word, voices)
      if (message !== 'success') {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.$sentry.captureException(new Error('Error = ' + message))
        this.showErrorAlert = true
      }
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

  .main_table_search
    margin: auto
    align-self: center
    color :black

    // @media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
  .main-image-search
    animation: fadeIn 1.5s ease 0s 1 normal
    -webkit-animation: fadeIn 1.5s ease 0s 1 normal
    text-align: center
    background-image: url('../../static/img/frower3_3.jpg') !important
    width: 90%
    height: 60%
    background-size: cover
    margin: 0 auto
    @media screen and (max-width : 767px)
      width: 100%
  .text-itself-search
    text-align: left
    margin: 0 250px
    @media screen and (max-width : 767px)
      margin: 0 20px
  //@media screen and (min-width : 1024px)
  // ここにタブレット・PCの記述
  /* じわっと画像が表示される */
  @keyframes fadeIn  /*上のbody内で呼び出しているアニメーションと名前をそろえる*/
    0% {opacity: 0} /* 始め */
    100% {opacity: 1} /* 終わり */
  /*古いブラウザ用*/
  @-webkit-keyframes fadeIn
    0% {opacity: 0}
    100% {opacity: 1}
</style>
