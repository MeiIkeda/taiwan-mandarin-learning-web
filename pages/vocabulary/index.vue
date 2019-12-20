<template>
  <section class="container_vocabulary">
    <h1 class="title_vocabulary">
      台湾華語<br>taiwan_mandarin
    </h1>
    <!--<div align="center">-->
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
              <nuxt-link :to="{ name: 'vocabulary' }" style="text-decoration: underline">
                中国語語彙<br>vocabulary
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'search' }">
                単語検索<br>search
              </nuxt-link>
            </td><td>&nbsp;&nbsp;</td><td>
              <nuxt-link :to="{ name: 'contact' }">
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

    <div class="main-image-vocabulary">
      <br>
      <b-alert v-model="showErrorAlert" style="color: red; background-color: transparent; border-color: transparent" variant="info">
        {{ error_message }}
      </b-alert>
      <div class="choose_level">
        <label>Choose Level
          <select v-model="level" class="custom-select">
            <option disabled value="">選択</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
          </select>
        </label>
      </div>
      <div class="next_button">
        <b-button @click="autoStart" style="background-color: #f0fff0; color: black">
          AutoStart
        </b-button>
        <b-button @click="autoStop" style="background-color: #f8f8ff; color: black">
          AutoStop
        </b-button><br><br>
        <b-button @click="back" style="background-color: #ffebcd; color: black">
          Back
        </b-button>
        <b-button @click="speak" style="background-color: #f0f8ff; color: black">
          Speak!
        </b-button>
        <b-button @click="next" style="background-color: lemonchiffon; color: black">
          Next
        </b-button>
      </div>
      <div class="body_vocabulary">
        <table class="main_table">
          <tbody>
            <tr>
              <td style="white-space:nowrap">
                <div class="word_itself">
                  {{ word.traditional }}
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div align="center">
          <table class="table-bordered" style="align: center; text-align: left">
            <thead style="white-space:nowrap; align: center; text-align: center;">
              <tr>
                <th>繁体字(Traditional)</th>
                <th>簡体字(Simplified)</th>
              </tr>
            </thead>
            <tbody style="white-space:nowrap; align: center; text-align: center">
              <tr>
                <td>{{ word.traditional }}</td>
                <td>{{ word.simplified }}</td>
              </tr>
            </tbody>
            <thead style="white-space:nowrap; align: center; text-align: center">
              <tr>
                <th>拼音(Pinyin)</th>
                <th>注音(Bopomofo)</th>
              </tr>
            </thead>
            <tbody style="white-space:nowrap; align: center; text-align: center">
              <tr>
                <td>{{ word.pinyin }}</td>
                <td>{{ word.bopomofo }}</td>
              </tr>
            </tbody>
          </table>
          <br>
          <div>意味(Meaning):{{ word.meaning }}</div>
          <!--     <table class="table-bordered" style="align: center; text-align: left">
            <thead style="white-space:nowrap; align: center; text-align: center">
            <tr>
              <th>意味(Meaning)</th>
            </tr>
            </thead>
            <tbody style="white-space:nowrap; align: center; text-align: center">
            <tr>
              <td>{{ word.meaning }}</td>
            </tr>
            </tbody>
          </table>-->
          <br>
          <div v-if="word.exampleDtoList != null && word.exampleDtoList.length !== 0">
            <table style="align: center; text-align: left">
              <tbody style="white-space:nowrap; align: center; text-align: center">
                <!-- <tr>-->
                <tr :key="list.id" v-for="list in word.exampleDtoList">
                  <td>例文</td><td>:</td><td>{{ list.sentence }}</td>
                  <td>訳</td><td>:</td><td>{{ list.translation }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <br>
      </div>
    </div>
    <div align="center">
      <p>
        <br>
        各レベル(Choose Level)には、およそ150の単語が含まれています。<br>
        おおよそですが、中国語検定HSKとの対照表は以下の通りです。<br>
      </p>
      <table class="table-bordered" style="align: center; text-align: left">
        <tbody style="white-space:nowrap; align: center; text-align: center">
          <tr>
            <td style="background-color: mintcream">
              1級
            </td><td>Level 1</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              2級
            </td><td>Level 2</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              3級
            </td><td>Level 3 ~ Level 4</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              4級
            </td><td>Level 5 ~ Level 8</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              5級
            </td><td>Level 9 ~ Level 17</td>
          </tr>
          <tr>
            <td style="background-color: mintcream">
              6級
            </td><td>Level 18 ~ ※準備中</td>
          </tr>
        </tbody>
      </table>
      <br>
      <p>単語の発音を聞いたり(Speak!)、単語リストを自動再生(AutoStart)する事ができます。<br></p>
      <p style="color: red">
        ※お使いのブラウザやバージョンによっては、音声再生に対応していない場合があります。<br>
        推奨ブラウザはGoogle Chromeです。<br>
      </p>
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
      level: 1,
      word_index: 0,
      word: {
        simplified: '台湾',
        traditional: '台湾',
        pinyin: 'tai2 wan1',
        bopomofo: 'ㄊㄞˊㄨㄢ',
        meaning: '台湾',
        pronunciation: ''
      },
      word_fromDB: [],
      error_message: '',
      error_message_sentry: '',
      isAuto: false,
      timer: '',
      count: 0,
      showErrorAlert: false,
      isSearching: false
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
      this.showErrorAlert = false
      this.word_fromDB = []
      const me = this
      this.isSearching = true
      const data = await this.$axios.$get(process.env.BASE_URL_API + '/api/v1/vocabulary/' + this.level, {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }, {
        auth: {
          username: process.env.BASIC_AUTH_USERNAME,
          password: process.env.BASIC_AUTH_PASSWORD
        }
      }).catch(function (error) {
        if (error.response) {
          if (error.response.data && error.response.data.message != null) {
            me.error_message = '単語情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '単語情報を取得できません。 しばらくしてからもう一度お試しください。' + error.response.data.message
          } else {
            me.error_message = '単語情報を取得できません。 しばらくしてからもう一度お試しください。'
            me.error_message_sentry = '単語情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          }
          // console.log('Error = ' + me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        } else {
          me.error_message = '単語情報を取得できません。 しばらくしてからもう一度お試しください。'
          me.error_message_sentry = '単語情報を取得できません。 しばらくしてからもう一度お試しください。' + error
          // console.log('Error = ' + me.error_message_sentry)
          me.showErrorAlert = true
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
        }
      })
      if (data) {
        this.word_fromDB = data
        this.word = this.word_fromDB[0]
      }
      this.isSearching = false
    },

    next () {
      if (this.isSearching) {
        return
      }
      if (this.word_index === (this.word_fromDB.length - 1)) {
        this.word_index = 0
        this.word = this.word_fromDB[this.word_index]
      } else {
        this.word_index++
        this.word = this.word_fromDB[this.word_index]
      }
    },
    back () {
      if (this.isSearching) {
        return
      }
      if (this.word_index === 0) {
        this.word_index = this.word_fromDB.length - 1
        this.word = this.word_fromDB[this.word_index]
      } else {
        this.word_index--
        this.word = this.word_fromDB[this.word_index]
      }
    },

    sleep (time) {
      return new Promise(resolve => setTimeout(resolve, time))
    },

    async interval () {
      this.speak()
      await this.sleep(2000)
      this.speak()
      await this.sleep(3000)
      this.count++
    },

    async autoStart () {
      if (this.isSearching) {
        return
      }
      this.isAuto = true
      while (this.isAuto) {
        await this.interval()
        // console.log('word_index : ' + this.word_index)
        this.next()
        if (this.count === 1000) {
          // console.log('finish! : ' + this.word_index)
          break
        }
      }
    },

    autoStop () {
      if (this.isSearching) {
        return
      }
      this.isAuto = false
    },

    speak () {
      if (this.isSearching) {
        return
      }
      if (this.word_fromDB === null || this.word_fromDB === []) {
        return
      }
      const agent = window.navigator.userAgent
      if (!('SpeechSynthesisUtterance' in window)) {
        this.error_message = 'お使いのブラウザは音声再生に対応していない可能性があります。 (Google Chrome推奨)'
        this.error_message_sentry = 'お使いのブラウザは単語再生に対応していない可能性があります。(1)' + agent
        this.$sentry.captureException(new Error('Error = ' + this.error_message_sentry))
        // console.log(this.error_message_sentry)
        this.showErrorAlert = true
        return
      }
      const uttr = new SpeechSynthesisUtterance(this.word.simplified)
      uttr.localService = false
      // uttr.lang = process.env.SPEAK_LANGUAGE
      uttr.lang = 'zh-CN'
      const voices = speechSynthesis.getVoices()
      let isChinese = false
      const me = this
      voices.forEach(function (voice, i) {
        if (voice.lang.includes('zh')) {
          isChinese = true
          console.log(voice)
        }
        if ((i === (voices.length - 1)) && !isChinese) {
          const agent = window.navigator.userAgent
          me.error_message = 'お使いのブラウザーは音声再生に対応していない可能性があります。(Google Chrome推奨)'
          me.error_message_sentry = 'お使いのブラウザーは単語再生に対応していない可能性があります。(2)' + agent
          me.$sentry.captureException(new Error('Error = ' + me.error_message_sentry))
          // console.log(me.error_message_sentry)
          me.showErrorAlert = true
        }
      })
      speechSynthesis.speak(uttr)
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

  .word_itself
    font-family:serif
    font-size: 90px
    border: groove
    color: black
    text-shadow: 1.5px 1.5px 0 white

  .body_vocabulary
    // margin: 0px 100px 0px 100px
    margin: 0px auto 0px auto
    color: black
    font-weight: bold
    text-shadow: 0.5px 0.5px 0 white

  .speak_button
    text-align:center
    margin:auto

  .main_table
    margin: auto
    align-self: center
    //text-align: center
    border-collapse: separate
    border-spacing:20px 5px

  .choose_level
    text-align:center
    margin: auto

  .next_button
    text-align:center
    margin: auto

  .custom-select
    width:60px
    position: relative
    display: inline-block
    background-color:#e0ffff
    outline: none !important
    border:1px solid black

 // @media screen and (min-width : 1024px)
    // ここにタブレット・PCの記述
    .main-image-vocabulary
      text-align: center
      background-image: url('../../static/img/lion.jpg') !important
      width: 95%
      background-size: cover
      margin: 0 auto
</style>
